"use client"
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import ShopItem from '../shopItem'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CartProvider } from '../cartContext'
import { Cart } from '../cart'
interface FlowerItem {
    id: string;
    Img: string;
    Name: string;
    price: number;
    inStock: boolean;
    sale?: number;
    label?: string;
    currency: string;
}

interface ArrowProps {
    onClick?: () => void
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        onClick={onClick}
    >
        <ChevronRight className="h-4 w-4" />
    </div>
)

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        onClick={onClick}
    >
        <ChevronLeft className="h-4 w-4" />
    </div>
)
// interface NewInShopProps {
//     shopItems: FlowerItem[]
// }
export default function NewInShop() {
    const [slidesToShow, setSlidesToShow] = useState(4)
    const [shopItems, setsShopItems] = useState<FlowerItem[]>([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/flowersData');
            const data = await res.json();
            setsShopItems(data);
        }
        fetchData();

    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1)
            } else if (window.innerWidth < 768) {
                setSlidesToShow(2)
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(3)
            } else {
                setSlidesToShow(4)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <CartProvider>
            <div className="flex flex-col text-center">
                <label className="text-3xl font-mrsSaint text-specialText">New  in  shop</label>
                <h2 className="font-frank text-5xl text-primaryText">New in Shop Bouquets</h2>
                <hr className='text-hrColor w-2/12 border-2 my-3 mx-auto' />
                <p className="font-inter text-secondaryText">Select your bouquet and get it delivered in the shortest possible time!</p>
            </div>
            <div className="max-w-7xl mx-auto py-12">
                <div className="relative w-screen xl:w-11/12 mx-auto">
                    <Slider {...settings}>
                        {shopItems.map((product) => (
                            <div key={product.id}>
                                <ShopItem
                                    {...product}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Cart/>
        </CartProvider>
    )
}