import React from 'react'

export default function NonEmptyCart() {

    let data = [1, 1, 1, 1, 1];


    return (
        <div className="nonEmptyCart py-10 ">

            <div className="order container  w-1/2 ">
                <div className="flex items-center border-b border-gray-300 pb-4 orderSummary">
                    <img src="/images/cartLogo.png" alt="cartLogo" />
                    <h1 className="font-bold ml-4 text-2xl">Order Summary</h1>
                </div>
            </div>
            <hr />

            {/* Orders */}
            {
                data.map((e) => (


                    <div className="pizza-list">
                        <div className="flex items-center my-8">
                            <img src="./images/pizza2.jpg" alt="" />
                            <div className="flex-1 ml-4">
                                <h1>Margarita</h1>
                                <span>SMALL</span>

                            </div>
                            <span className="flex-1">1 Pcs</span>
                            <span className="font-bold text-lg">₹ 199</span>



                        </div>
                    </div>


                ))
            }
            <hr />


            {/* Billing */}

            <div class="text-right py-4">
                <div>
                    <span className="text-lg font-bold">Total Amount: </span>
                    <span className="amount text-2xl font-bold ml-2">₹ 995</span>
                </div>
            </div>


            <div>
                <form action="" className="mt-4 text-right btn-primaryDiv " >

                    <input class="border border-gray-400 p-2 w-1/2 mb-4" type="text" placeholder="Address" />
                    <br />
                    <input class="border border-gray-400 p-2 w-1/2" type="text" placeholder="Phone Number" />
                    <br />
                    <button type="submit" className="btn-primary px-6 py-2 rounded-full text-white font-bold mt-6">Order Now</button>
                </form>
            </div>





        </div>
    )

}
