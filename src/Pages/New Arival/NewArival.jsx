import React, { useEffect, useState } from 'react'
import ArivalCard from './ArivalCard'

export default function NewArival() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data =>
                //console.log(data),
                setProducts(data)
            )
    }, []);
    return (
        <section>
            <div>
                <p className='text-[48px] font-[Integral CF] font-[700] text-center pt-6'>NEW ARRIVALS</p>
            </div>
            <div className="
                        grid
                        grid-cols-2
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        gap-y-8 gap-x-6
                        place-items-center
                        pt-6
                    ">
                {
                    products.map(product => <ArivalCard
                        key={product.id}
                        product={product}


                    ></ArivalCard>)
                }




            </div>
        </section >
    )
}
