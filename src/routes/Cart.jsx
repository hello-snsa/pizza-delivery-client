import React, { useState } from 'react'
import EmptyCart from '../components/cart/EmptyCart';
import NonEmptyCart from '../components/cart/NonEmptyCart';

export default function Cart() {

    const [empty, setEmpty] = useState(!true);
    return (
        <div>

            {empty ? <EmptyCart /> : <NonEmptyCart />}

        </div>
    )
}
