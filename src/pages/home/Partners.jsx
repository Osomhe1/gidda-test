/* eslint-disable react/no-unescaped-entities */

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Mousewheel, Keyboard } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Partners() {
  const underlinImg = `https://giddaa.com/assets/icons/underline.svg`
  const underlinImg2 = `https://giddaa.com/assets/icons/hands-shake.svg`
  return (
    <>
      <div className='bg-[#F3FAF2] pb-28'>
        <div
          id='ourProperties'
          className='grid uppercase md:grid-cols-3 bg-[#F3FAF2] p-5 px-44 py-4 pl-[36px]'
        >
          <div className='flex flex-col items-center pr-[20%]'>
            <h1 className='font-title text-primary text-6xl'>
              <span aria-live='polite' aria-busy='true'>
                <span className='react-loading-skeleton'>‌6</span>
                <br />
              </span>
            </h1>
            <p className='text-[12px]'>no of properties</p>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='font-title text-primary text-6xl'>
              <span aria-live='polite' aria-busy='true'>
                <span className='react-loading-skeleton'>‌100</span>
                <br />
              </span>
            </h1>
            <p className='text-[12px]'>no of units</p>
          </div>
          <div className='flex flex-col items-center pl-[10%]'>
            <h1 className='font-title text-primary text-6xl'>
              <span aria-live='polite' aria-busy='true'>
                <span className='react-loading-skeleton'>‌9</span>
                <br />
              </span>
            </h1>
            <p className='text-[12px]'>
              PLANS/METHODS YOU CAN PURCHASE YOUR HOME
            </p>
          </div>
        </div>
        <div id='our-partners' className='relative'>
          <div className='p-10 bg-[#F5F5DE] py-8'>
            <div className='w-[320px] flex flex-col items-center pr-20'>
              <h2 className='text-4xl font-bold  text-[#335f32]'>Trusted By</h2>
              <img src={underlinImg} alt='' className='w-28 my-2' />
            </div>
            <Swiper
              cssMode={true}
              autoplay={{
                delay: 800,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={5}
              loop={true}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 3,
                },
                '@0.75': {
                  slidesPerView: 5,
                },
                '@1.00': {
                  slidesPerView: 6,
                },
                '@1.50': {
                  slidesPerView: 9,
                },
              }}
              grabCursor={true}
              mousewheel={true}
              keyboard={true}
              modules={[Autoplay, Mousewheel, Keyboard]}
              className='mySwiper px-16 mt-10  animate-slide w[800px]'
            >
              <SwiperSlide className=' '>
                <img
                  src='https://res.cloudinary.com/giddaa/image/upload/c_scale,w_1000/f_auto/q_auto:good/133575951016331388..jpeg'
                  alt='Heavens Gate Realty'
                  className='w-12 h-12 rounded-full saturate-0'
                />
              </SwiperSlide>
              <SwiperSlide className=''>
                <img
                  alt='Giddaa Housing Limited'
                  className='w-12 h-12 rounded-full saturate-0'
                />
              </SwiperSlide>
              <SwiperSlide className=''>
                <img
                  alt='Fhemfel homes limited'
                  className='w-12 h-12 rounded-full saturate-0'
                />
              </SwiperSlide>
              <SwiperSlide className=''>
                <img
                  src='https://res.cloudinary.com/giddaa/image/upload/c_scale,w_1000/f_auto/q_auto:good/133575790753066062..jpeg'
                  alt='Giddaa Real Estate'
                  className='w-12 h-12 rounded-full saturate-0'
                />
              </SwiperSlide>
              <SwiperSlide className=''>
                <img
                  src='https://res.cloudinary.com/giddaa/image/upload/c_scale,w_1000/f_auto/q_auto:good/133578234683464902.png'
                  alt='Wisdom Kwati Smarty City'
                  className='w-12 h-12 rounded-full saturate-0'
                />
              </SwiperSlide>
              <SwiperSlide className=' '>
                <img
                  src='https://res.cloudinary.com/giddaa/image/upload/c_scale,w_1000/f_auto/q_auto:good/133575951016331388..jpeg'
                  alt='Heavens Gate Realty'
                  className='w-12 h-12 rounded-full saturate-0'
                />
              </SwiperSlide>
              <SwiperSlide className=''>
                <img
                  alt='Giddaa Housing Limited'
                  className='w-12 h-12 rounded-full saturate-0'
                />
              </SwiperSlide>
              <SwiperSlide className=''>
                <img
                  alt='Fhemfel homes limited'
                  className='w-12 h-12 rounded-full saturate-0'
                />
              </SwiperSlide>
              <SwiperSlide className=''>
                <img
                  src='https://res.cloudinary.com/giddaa/image/upload/c_scale,w_1000/f_auto/q_auto:good/133575790753066062..jpeg'
                  alt='Giddaa Real Estate'
                  className='w-12 h-12 rounded-full saturate-0'
                />
              </SwiperSlide>
              <SwiperSlide className=''>
                <img
                  src='https://res.cloudinary.com/giddaa/image/upload/c_scale,w_1000/f_auto/q_auto:good/133578234683464902.png'
                  alt='Wisdom Kwati Smarty City'
                  className='w-12 h-12 rounded-full saturate-0'
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='w-64 bg-white shadow-lg h-12 absolute flex origin-bottom -rotate-6 drop-shadow-xl items-center justify-center gap-x-3 ml-[45%] rounded-[2.5rem] border-2 border-[#335f32]'>
            <img src={underlinImg2} alt='' className='w-10 h-10' />
            <h1 className='text-primary font-title text-[12px]'>
              If They Trust Us, So Can You
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
