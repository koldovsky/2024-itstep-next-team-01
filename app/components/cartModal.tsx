"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { useCart } from './cartContext'
import { X } from 'lucide-react'
import { Button } from './button'

interface CartModalProps {
    isOpen: boolean
    onClose: () => void
}

interface FormData {
    name: string
    email: string
    phone: string
    comment: string
}

interface FormErrors {
    name?: string
    email?: string
    phone?: string
}

type FormField = 'name' | 'email' | 'phone'

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
    const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart()
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        comment: ''
    })
    const [formErrors, setFormErrors] = useState<FormErrors>({})

    const orderInputs = [
        {
            label: 'Name',
            placeholder: 'Your name',
            inputType: 'text',
            name: 'name' as FormField,
        },
        {
            label: 'Email',
            placeholder: 'Your email address',
            inputType: 'email',
            name: 'email' as FormField,
        },
        {
            label: 'Phone',
            placeholder: 'Your phone',
            inputType: 'number',
            name: 'phone' as FormField,
        },
    ]

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (name !== 'comment') {
            validateField(name as FormField, value)
        }
    }

    const validateField = (fieldName: FormField, value: string) => {
        let error = ''
        switch (fieldName) {
            case 'name':
                if (!value.trim()) error = 'Name is required'
                break
            case 'email':
                if (!value.trim()) {
                    error = 'Email is required'
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = 'Email is invalid'
                }
                break
            case 'phone':
                if (!value.trim()) {
                    error = 'Phone is required'
                } else if (!/^\d{10}$/.test(value.replace(/\D/g, ''))) {
                    error = 'Phone number must be 10 digits'
                }
                break
        }
        setFormErrors(prev => ({ ...prev, [fieldName]: error }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const errors: FormErrors = {}
        orderInputs.forEach(({ name }) => {
            validateField(name, formData[name])
            if (formErrors[name]) {
                errors[name] = formErrors[name]
            }
        })

        if (Object.keys(errors).length === 0) {
            // Submit the form
            console.log('Form submitted:', formData)
            // You can add your form submission logic here
        } else {
            setFormErrors(errors)
        }
    }

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
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    {orderInputs.map((input) => (
                        <div key={input.name}>
                            <label className='text-contentText text-md flex flex-col gap-3'>
                                {input.label}
                                <input
                                    type={input.inputType}
                                    name={input.name}
                                    placeholder={input.placeholder}
                                    value={formData[input.name]}
                                    onChange={handleInputChange}
                                    className='bg-placeholderBg placeholder:text-placeholderText h-14 px-3'
                                />
                            </label>
                            {formErrors[input.name] && (
                                <p className="text-red-500 text-sm mt-1">{formErrors[input.name]}</p>
                            )}
                        </div>
                    ))}
                    <label className='text-contentText text-md flex flex-col gap-3'>
                        Comment
                        <textarea 
                            name="comment"
                            value={formData.comment}
                            onChange={handleInputChange}
                            className='bg-placeholderBg placeholder:text-placeholderText p-3 h-25' 
                            placeholder='Your comment' 
                            wrap='hard'
                        />
                    </label>
                    <div className='w-full flex justify-center mt-10'>
                        <Button type="submit" variant={'primary'}>
                            ORDER
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}