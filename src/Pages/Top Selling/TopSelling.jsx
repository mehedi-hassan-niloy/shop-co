import React, { useEffect, useState } from 'react'
import TopSellingCard from './TopSellingCard';

export default function TopSelling() {
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("/product.json")
            .then((res) => res.json())
            .then((data) => {

                const topSelling = data.filter((item) => item.selling > 200);
                setProducts(topSelling);
            });
    }, []);
    const visibleProducts = showAll ? products : products.slice(0, 4);
    return (
        <section>
            <div>
                <p className='text-[48px] font-[Integral CF] font-[700] text-center pt-6'>TOP SELLING</p>
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
                    visibleProducts.map(product => <TopSellingCard
                        key={product.id}
                        product={product}


                    ></TopSellingCard>)
                }
            </div>

            {
                products.length > 4 && (
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

