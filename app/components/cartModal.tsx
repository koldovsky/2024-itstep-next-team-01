import React from 'react'
import Image from 'next/image'
import { useCart } from './cartContext'
import { X } from 'lucide-react'

interface CartModalProps {
    isOpen: boolean
    onClose: () => void
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
    const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart()

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Your Cart</h2>
                    <button onClick={onClose} aria-label="Close cart">
                        <X className="h-4 w-4" />
                    </button>
                </div>
                <div className="space-y-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 justify-between">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                                className="rounded-md"
                            />
                            <h3 className="font-medium">{item.name}</h3>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                className="w-16 text-center"
                                min="1"
                            />
                            <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                aria-label={`Remove ${item.name} from cart`}
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-lg">${getTotalPrice().toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}