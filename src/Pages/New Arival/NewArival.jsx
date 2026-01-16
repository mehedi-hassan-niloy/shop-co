import React, { useEffect, useState } from 'react'
import ArivalCard from './ArivalCard'
import { useSearchParams } from 'react-router-dom';

export default function NewArival() {
    const [product, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [searchParams] = useSearchParams();

    const category = searchParams.get("category");

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data =>
                //console.log(data),
                setProducts(data)
            )
    }, []);
    const filteredProducts = category
        ? product.filter(p => p.brand.toLowerCase() === category)
        : product;
    const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4);
    return (
        <section>
            <div>
                <p className='text-[48px] font-[700] text-center pt-6'>
                    {category ? `${category.toUpperCase()} STYLE` : "NEW ARRIVALS"}
                </p>
            </div>
            <div className="
                        grid
                        grid-cols-2
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        gap-y-8 gap-x-6
                        place-items-center
                        p-3
                        pt-6
                    ">
                {
                    visibleProducts.map(product => <ArivalCard
                        key={product.id}
                        product={product}


                    ></ArivalCard>)
                }

            </div>
            {filteredProducts.length > 4 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-white text-black px-6 py-2 rounded-full font-semibold border-[1px] border-[#F0EEED]"
                    >
                        {showAll ? "View Less" : "View All"}
                    </button>
                </div>
            )
            }
        </section >
    )
}
