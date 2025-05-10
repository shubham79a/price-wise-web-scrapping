import React from 'react'
import Image from 'next/image'
import SearchBar from '@/components/SearchBar'
import HeroCarousel from '@/components/HeroCarousel'
const Home = () => {
  return (
    <>
      <section className='px-6 py-24'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>

            <p className='flex gap-2 text-sm font-medium text-[#E43030]'>
              Start Shopping STarts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                height={16}
                width={16}
                className=''
              />
            </p>

            <h1 className='mt-4 md:text-4xl text-6xl leading-[72px] font-bold tracking-[-1.2px] text-gray-900'>
              Unleash the Power of <span className='text-[#E43030]'>PriceWise</span>
            </h1>

            <p className='mt-6'>
              Powerful, self-serve product data scraping tool that helps you
              extract product data from any e-commerce website in minutes.
            </p>

            <SearchBar />

          </div>

          <HeroCarousel />

        </div>



      </section>

      <section className='flex flex-col gap-10 px-6 md:px-20 py-24'>
        <h2 className='text-[32px] font-semibold text-[#282828]'>Trending</h2>
        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {['apple', 'samsung', 'xiaomi', 'oneplus', 'nokia', 'oppo', 'vivo', 'realme', 'motorola', 'lenovo', 'asus', 'acer', 'dell', 'hp', 'msi', 'razer', 'alienware', 'lg', 'sony', 'panasonic', 'tcl'].map((brand) => (
            <div>{brand}</div>
          ))
          }
        </div>
      </section>

    </>
  )
}

export default Home
