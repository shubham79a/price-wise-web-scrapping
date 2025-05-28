"use client"

import React from 'react'
import Image from 'next/image';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const heroimages = [
  { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch' },
  { imgUrl: '/assets/images/hero-2.svg', alt: 'bag' },
  { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' },
  { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer' },
  { imgUrl: '/assets/images/hero-5.svg', alt: 'chair' }
]

function HeroCarousel() {
  return (
    <div className='relative sm:px-10 py-5 sm:pt-20 pb-5 max-w-[500px] h-[700px] w-full bg-[#F2F4F7] rounded-[30px] sm:mx-auto'>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroimages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className='object-contain'
            key={image.alt}
          />
        ))}
      </Carousel>
      <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        alt='hand-arrow'
        width={175}
        height={175}
        className='max-xl:hidden absolute -left-[15%] bottom-0 '
      />

    </div>
  )
}

export default HeroCarousel