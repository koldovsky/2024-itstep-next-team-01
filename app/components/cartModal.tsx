import React, { lazy } from 'react'
import Image from 'next/image'
import { useCart } from './cartContext'
import { X } from 'lucide-react'

interface CartModalProps {
    isOpen: boolean
    onClose: () => void
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
    const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart()
    const orderInputs = [
        {
            label: 'Name',
            placeholder: 'Your name',
            inputType: 'text',
        },
        {
            label: 'Email',
            placeholder: 'Your email adress',
            inputType: 'email',
        },
        {
            label: 'Phone',
            placeholder: 'Your phone',
            inputType: 'number',
        },
    ]
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4 bg-gray">
                    <h2 className="text-xl font-semibold text-secondaryText">Shopping cart</h2>
                    <button onClick={onClose} aria-label="Close cart">
                        <X className="h-4 w-4" />
                    </button>
                </div>
                <p className='text-sm my-5 text-secondaryText'>Products</p>
                <div className="space-y-4">
                    {items.map((item) => (
                        <div key={item.id} className="grid grid-cols-12 items-center">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                                className="rounded-md col-span-2"
                            />
                            <h3 className="font-medium col-span-4 text-primaryText">{item.name}</h3>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                className="w-16 text-center col-span-2"
                                min="1"
                            />
                            <p className="text-sm text-secondaryText col-span-3 place-self-center">${Number.isNaN(item.price * item.quantity) ? 0 : item.price * item.quantity}</p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                aria-label={`Remove ${item.name} from cart`}
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex justify-end items-center text-secondaryText gap-5">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-lg">${Number.isNaN(getTotalPrice()) ? 0 : getTotalPrice()}</span>
                </div>
                <p className='text-sm my-5 text-secondaryText'>Place an order</p>
                <div className='flex flex-col gap-5'>
                    {orderInputs.map((input) => (
                        <div>
                            <label className='text-contentText text-md flex flex-col gap-3'>
                                {input.label}
                                <input
                                    type={input.inputType}
                                    placeholder={input.placeholder}
                                    className='bg-placeholderBg placeholder:text-placeholderText h-14 px-3' />
                            </label>
                        </div>
                    ))}
                    <label className='text-contentText text-md flex flex-col gap-3'>
                        Comment
                        <textarea className='bg-placeholderBg placeholder:text-placeholderText p-3 h-25' placeholder='Your comment' wrap='hard'>
                        </textarea>
                    </label>
                </div>
            </div>
        </div>
    )
}