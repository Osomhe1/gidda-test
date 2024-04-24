/* eslint-disable react/no-unescaped-entities */

import { Image } from '@nextui-org/react'
import Skeleton from 'react-loading-skeleton'

export default function Hero() {
  return (
    <div>
      <section className='flex flex-col md:flex-row items-center '>
        <div
          id='text'
          className='w-full flex flex-[50%] -mt-80 justify-end items-start pe-32 ps-[5rem]'
        >
          <div className='lg:mt0 mt-10 lg:px-0 px-5'>
            <h1 className=' font-semibold lg:text6xl text-2xl lg:leading-[2.2rem] capitalize'>
              Securely and Affordably Own a Home in Nigeria.
              <span className='text-[#335f32]'>
                {' '}
                We Serve Nigerians across the globe.
                {''}
              </span>
            </h1>
            <p className='text-[15px] mt-4'>
              Experience confidence when buying a home in Nigeria whether you're
              in Nigeria or <b>Abroad!</b> Enjoy peace of mind with legitimate
              transactions, straightfoward processes, and a variety of flexible
              payment options directly from top developers and banks.
            </p>
            <div className='mt-10 flex'>
              <button className='flex bg-[#335f32] text-white w-fit cursor-pointer  justify-between rounded-full px-6 text-sm py-4 font-bold   gap-4 items-center  '>
                Find a Home
              </button>
              <button className='ml-5 border-2 flex items-center justify-center rounded-md text-base w-[70%] border-[#335f32] px-10 cursor-default font-bold'>
                <Skeleton height={100} className='mb-4' />
                <p className='px-2'>Person Have Seen This</p>
              </button>
            </div>
          </div>
        </div>
        <div id='heroImage' className='flex-[55%] h-full lg:block'>
          <Image
            src={`https://giddaa.com/assets/img/hero.jpg`}
            alt='hero_image'
            className='h-full w-full rounded-none object-cover'
          />
        </div>
      </section>
      {/* <div
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
      </div> */}
    </div>
  )
}
