import React from 'react'

export default function EmptyCart() {
    return (
        <div className="empty-cart">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-bold mb-2">Nothing in cart</h1>
                <img src="./images/emptycart.jpg" alt="empty cart" className=" mx-auto" />
                <a href="/" className="inline-block px-6 py-2 rounded-full btn-primary text-white font-bold mt-12" >Home</a>
            </div>

        </div>
    )
}
