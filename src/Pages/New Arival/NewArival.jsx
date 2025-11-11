import React, { useEffect, useState } from 'react'
import ArivalCard from './ArivalCard'

export default function NewArival() {
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data =>
                //console.log(data),
                setProducts(data)
            )
    }, []);
    const visibleProducts = showAll ? products : products.slice(0, 4);
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
                    visibleProducts.map(product => <ArivalCard
                        key={product.id}
                        product={product}


                    ></ArivalCard>)
                }




            </div>
            {products.length > 4 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition"
                    >
                        {showAll ? "View Less" : "View All"}
                    </button>
                </div>
            )}
        </section >
    )
}
