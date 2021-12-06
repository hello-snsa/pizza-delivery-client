import React from 'react'
import PizzaContainer from './PizzaContainer'

export default function Pizza() {

    const data =
        [
            0, 1, 2, 3, 4, 5, 6, 7
        ]



    return (
        <div className="grid grid-cols-4 item-gap-x ">



            {
                data.map((e) => (
                    <div className=" item-gap-y">
                        <PizzaContainer />
                    </div>
                ))
            }

        </div>
    )
}
