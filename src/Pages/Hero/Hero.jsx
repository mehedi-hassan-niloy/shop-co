import React from 'react'
import heroImg from "../../assets/hero-img.jpg";

export default function Hero() {
    return (
        <section className="relative w-full bg-[#F2F0F1] overflow-hidden flex justify-center">
            <div className="relative w-full max-w-[1440px] h-auto lg:h-[663px] flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-10 pt-6 md:pt-10 lg:pt-12">

                {/* ---------- LEFT CONTENT ---------- */}
                <div
                    className="
            relative
            max-w-full lg:max-w-[537px]
            flex flex-col justify-start space-y-6
            text-center lg:text-left
            z-10
            mt-6 sm:mt-4 md:mt-0 lg:mt-[-130px]
          "
                >
                    <h1
                        className="
              font-extrabold text-black leading-[1.1]
              text-[42px] sm:text-[46px] md:text-[52px] lg:text-[56px]
              tracking-tight
            "
                    >
                        FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
                    </h1>

                    <p
                        className="
              text-gray-600 font-normal
              max-w-full lg:max-w-[537px]
              text-[15px] sm:text-[15px] md:text-[16px]
              leading-[1.5]
            "
                    >
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of style.
                    </p>

                    <button
                        className="
              bg-black text-white font-medium
              rounded-full lg:w-[210px]
              sm:w-auto
              py-4 px-[54px]
              text-[16px] leading-[20px]
              hover:bg-gray-900 transition
            "
                    >
                        Shop Now
                    </button>

                    {/* ---------- STATS ---------- */}
                    <div
                        className="flex flex-wrap justify-center lg:justify-start gap-[32px]
              mt-8
              w-full lg:w-[596px]
            "
                    >
                        <div>
                            <h3 className="text-[24px] font-bold leading-tight">200+</h3>
                            <p className="text-gray-600 text-sm">International Brands</p>
                        </div>
                        <div>
                            <h3 className="text-[24px] font-bold leading-tight">2,000+</h3>
                            <p className="text-gray-600 text-sm">High-Quality Products</p>
                        </div>
                        <div>
                            <h3 className="text-[24px] font-bold leading-tight">30,000+</h3>
                            <p className="text-gray-600 text-sm">Happy Customers</p>
                        </div>
                    </div>
                </div>

                {/* ---------- RIGHT IMAGE ---------- */}
                <div className="relative flex justify-center items-center w-full lg:w-1/2 lg:max-w-full mt-8 lg:mt-[180px]">
                    <img
                        src={heroImg}
                        alt="Hero Model"
                        className="w-full max-w-full object-contain"
                    />
                </div>

                {/* ---------- STAR DECORATIONS ---------- */}

                {/* ⭐ Left Small Star */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="
            absolute text-black opacity-100
            w-[44px] h-[44px]
            bottom-[25%] left-[15%]
            sm:bottom-[45%] sm:left-[20%]
            md:bottom-[40%] md:left-[12%]
            lg:top-[340px] lg:left-[55%]
            transform -translate-y-[50%]
          "
                >
                    <path d='M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z' />
                </svg>

                {/* ⭐ Right Large Star */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="
              absolute text-black opacity-100
            w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] md:w-[92px] md:h-[92px] lg:w-[104px] lg:h-[104px]
            bottom-[35%] left-[72%]
            sm:bottom-[50%] sm:left-[75%]
            md:bottom-[55%] md:left-[80%]
            lg:bottom-[70%] lg:left-[1200px]
          "
                >
                    <path d='M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z' />
                </svg>
            </div>
        </section>
    )
}
