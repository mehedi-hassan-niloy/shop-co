import React from 'react'
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
const reviews = [
    {
        name: "Sarah M.",
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
        name: "Alex K.",
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options is truly remarkable."
    },
    {
        name: "James L.",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is diverse."
    },
    {
        name: "Mia R.",
        text: "Great quality, fast delivery and amazing styles. Highly recommended!"
    },
    {
        name: "Sarah M.",
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
        name: "Alex K.",
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options is truly remarkable."
    },
    {
        name: "James L.",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is diverse."
    },
    {
        name: "Mia R.",
        text: "Great quality, fast delivery and amazing styles. Highly recommended!"
    },
];
function Review() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
    };
    return (
        <section className="w-full py-16">
            {/* Header */}
            <div className="max-w-[1240px] mx-auto flex justify-between items-center px-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold">
                    OUR HAPPY CUSTOMERS
                </h2>

                <div className="flex gap-3">
                    <button
                        onClick={scrollLeft}
                        className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>

            {/* Slider */}
            <div
                ref={sliderRef}
                className="
          max-w-[1240px]
          mx-auto
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          px-4
          scrollbar-hide
          no-scrollbar
        "
            >
                {reviews.map((item, i) => (
                    <div
                        key={i}
                        className="
 w-[320px] sm:w-[360px] lg:w-[400px]
  h-[220px] sm:h-[230px] lg:h-[240px]
  rounded-[20px]
  border
  p-[28px_32px]
  flex
  flex-col
  justify-between
  bg-white
  flex-shrink-0
            "
                    >
                        {/* Stars */}
                        <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill="#f4d615" stroke="none" />
                            ))}
                        </div>

                        {/* Name */}
                        <h3 className="font-bold mb-2">{item.name}</h3>

                        {/* Text */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Review