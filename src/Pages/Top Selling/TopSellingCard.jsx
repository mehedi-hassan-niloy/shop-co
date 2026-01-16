import React from 'react'
import { Star, StarHalf } from 'lucide-react'
function TopSellingCard(props) {
    const { title, originalPrice, discountPrice, discountPercent, rating, images } = props.product;
    return (
        <div className='max-w-full w-full sm:w-[280px] md:w-[300px] lg:w-[295px] flex flex-col items-start'>

            <img
                src={images[0]}
                alt="Product"
                className='bg-[#F0EEED] w-full h-[250px] sm:h-[270px] md:h-[298px] rounded-[20px] '
            />

            <h3 className='text-base sm:text-lg font-semibold mt-2'>{title}</h3>

            <p className='flex flex-wrap items-center gap-1 sm:gap-[6px] pt-2'>
                <Star color="#f4d615" size={16} className='h-[18px] w-[18px]' />
                <Star color="#f4d615" size={16} className='h-[18px] w-[18px]' />
                <Star color="#f4d615" size={16} className='h-[18px] w-[18px]' />
                <Star color="#f4d615" size={16} className='h-[18px] w-[18px]' />
                <StarHalf color="#f4d615" size={16} className='h-[18px] w-[18px]' />
                <span className='text-sm sm:text-base font-[Satoshi] ml-1'>{rating}/5</span>
            </p>

            <div className='flex flex-wrap items-center gap-[8px] pt-2'>
                <span className='text-[20px] sm:text-[22px] md:text-[24px] font-[700] font-[Satoshi]'>
                    ${discountPrice}
                </span>
                <span className='text-[18px] sm:text-[20px] md:text-[22px] font-[700] text-gray-600 font-[Satoshi] line-through'>
                    ${originalPrice}
                </span>
                <div className='flex justify-center bg-red-200 h-[25px] w-[58px] rounded-[4px] items-center'>
                    <span className='text-[12px] sm:text-[13px] md:text-[14px] font-[500] text-red-700'>
                        -{discountPercent}%
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TopSellingCard