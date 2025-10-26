import React from 'react'

export default function Barand() {
    return (
        <section className="w-full bg-black py-12 flex justify-center">
            <div className="w-full max-w-[1200px] px-6">

                <div
                    className="
                        grid
                        grid-cols-3
                        sm:grid-cols-3
                        md:grid-cols-3
                        lg:grid-cols-5
                        gap-y-8 gap-x-6
                        text-center
                        place-items-center
                    "
                >

                    <h1 className="text-white text-2xl font-serif lg:text-xl">VERSACE</h1>
                    <h1 className="text-white text-2xl font-serif lg:text-xl">ZARA</h1>
                    <h1 className="text-white text-2xl font-serif lg:text-xl">GUCCI</h1>

                    <div className="col-span-3 flex justify-center items-center gap-12 lg:col-span-2 lg:flex lg:justify-center lg:gap-32" >
                        <h1 className="text-white text-2xl font-serif lg:text-xl">PRADA</h1>
                        <h1 className="text-white text-2xl font-serif lg:text-xl">Calvin Klein</h1>
                    </div>
                </div>
            </div>
        </section >

    )
}
