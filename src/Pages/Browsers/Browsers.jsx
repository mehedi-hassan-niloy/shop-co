import React from 'react'
import { Link } from 'react-router-dom';

function Browsers() {

    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <div className="bg-[#F2F0EE] rounded-[30px] p-6 md:p-10">

                <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8">
                    BROWSE BY DRESS STYLE
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

                    {/* Casual */}
                    <div className="lg:col-span-2 cursor-pointer relative bg-white rounded-[20px] overflow-hidden h-[180px] sm:h-[200px] hover:scale-[1.02] transition">
                        <Link
                            to="/products?category=casual"

                        >
                            <p className="absolute top-4 left-4 text-lg font-semibold z-10">Casual</p>
                            <img src="/casual.png" className="w-full h-full object-cover" />
                        </Link>
                    </div>

                    {/* Formal */}
                    <div className="lg:col-span-3 cursor-pointer relative bg-white rounded-[20px] overflow-hidden h-[180px] sm:h-[200px] hover:scale-[1.02] transition">
                        <Link
                            to="/products?category=formal"
                        >
                            <p className="absolute top-4 left-4 text-lg font-semibold z-10">Formal</p>
                            <img src="/formal.png" className="w-full h-full object-cover" />
                        </Link>
                    </div>

                    {/* Party */}
                    <div className="lg:col-span-3 cursor-pointer relative bg-white rounded-[20px] overflow-hidden h-[180px] sm:h-[200px] hover:scale-[1.02] transition">
                        <Link
                            to="/products?category=party"
                        >
                            <p className="absolute top-4 left-4 text-lg font-semibold z-10">Party</p>
                            <img src="/party.png" className="w-full h-full object-cover" />
                        </Link>
                    </div>

                    {/* Gym */}
                    <div className="lg:col-span-2 cursor-pointer relative bg-white rounded-[20px] overflow-hidden h-[180px] sm:h-[200px] hover:scale-[1.02] transition">
                        <Link
                            to="/products?category=gym"
                        >
                            <p className="absolute top-4 left-4 text-lg font-semibold z-10">Gym</p>
                            <img src="/gym.png" className="w-full h-full object-cover" />
                        </Link>
                    </div>
                </div>

            </div>

        </section >
    )
}

export default Browsers