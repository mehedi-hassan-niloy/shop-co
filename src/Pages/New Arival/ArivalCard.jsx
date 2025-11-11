import React from 'react'
import { Star, StarHalf } from 'lucide-react'

export default function ArivalCard(props) {
    const { title, originalPrice, discountPrice, discountPercent, rating, images } = props.product;
    return (
        <div className='max-w-full'>
            <img src={images[0]} className='bg-[#F0EEED] w-[295px] h-[298px] rounded-[20px]' alt="Product" />
            <h3 className='text-lg font-semibold'>{title}</h3>
            <p className='flex justify-between gap-[12px] w-[150px] h-[19px] pt-2'>
                <Star color="#f4d615" size={16} className='h-[18.9px] w-[18.9px]' />
                <Star color="#f4d615" size={16} className='h-[18.9px] w-[18.9px]' />
                <Star color="#f4d615" size={16} className='h-[18.9px] w-[18.9px]' />
                <Star color="#f4d615" size={16} className='h-[18.9px] w-[18.9px]' />
                <StarHalf color="#f4d615" size={16} className='h-[18.9px] w-[18.9px]' />
                <span className='font-[14px] font-[Satoshi]'> {rating}/5</span>
            </p>
            <div className='flex items-center  gap-[12px] pt-2'>
                <span className='text-[24px] font-[700] font-[Satoshi]'>${originalPrice}</span>
                <span className='text-[24px] font-[700] text-gray-600 font-[Satoshi] line-through'>${discountPrice}</span>
                <div className='flex justify-center bg-red-200 h-[25px] w-[58px] rounded-[4px] items-center'>
                    <span className='text-[12px] font-[500] text-red-700'>-{discountPercent}%</span>
                </div>

            </div>
        </div >

    )
}



