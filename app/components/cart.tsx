import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { useCart } from './cartContext'
// import { Button } from './button'
import { CartModal } from './cartModal'

export const Cart: React.FC = () => {
    const { items } = useCart()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

    if(totalItems == 0) return null

    return (
        <div className="fixed top-20 right-4 z-50">
            <button
                className="rounded-full w-16 h-16 shadow-lg "
                onClick={() => setIsModalOpen(true)}
            >
                <ShoppingCart className="h-6 w-6 m-auto" />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        {totalItems}
                    </span>
                )}
            </button>
            <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}