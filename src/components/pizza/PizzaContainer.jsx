import React from 'react'

export default function PizzaContainer({ pizza }) {
    return (
        <div>

            <div className="w-64 showcase">
                <img src='/images/pizza.jpg' alt="pizza" className="h-40 mb-4 mx-auto " />
                {/* </div> */}
                <div className="text-center">

                    <h2 className="mb-4 text-lg">Margherita</h2>

                    <span className="size py-1 px-4 rounded-full uppercase text-xs">small</span>

                    <div className="add-to-carts flex items-center justify-around mt-6">
                        <span className="font-bold text-lg">₹ 150</span>
                        <button className="add-to-cart py-1 px-6 rounded-full flex items-center font-bold">
                            <span>+</span>
                            <span className="ml-4">Add</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
