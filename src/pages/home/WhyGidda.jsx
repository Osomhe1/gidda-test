/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Mousewheel, Keyboard } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function WhyGidda() {
  return (
    <div>
      <div id='whyGiddaa' className='bg-[#F3FAF2] p-5'>
        <div className='w-fit flex flex-col ml-[2.5%] items-start my-6'>
          <h2 className='text-4xl font-bold text-primary capitalize'>
            Why Giddaa ?
          </h2>
          <img
            src='https://giddaa.com/assets/icons/underline.svg'
            alt=''
            className='w-36 mx-auto'
          />
        </div>
        <p className='text-center text-[14px] font-semibold'>
          Too many Nigerians at home and abroad have complained about scams,
          inavailabilty of flexible <br />
          payment options, how stressful, ambiguous, and manual the property
          purchase process is, we heard
          <br />
          you all, <b>over 100+ of you!</b>
        </p>
        <div id='badReviews' className='relative overflow-hidden mt-8'>
          <Swiper
            cssMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Autoplay, Mousewheel, Keyboard]}
            className='mySwiper  animate-slide w-full'
          >
            <SwiperSlide className='w-[400px] flex-none border-r-2 py-5 h-32 mx-4 px-2'>
              <div className='flex justify-center'>
                <span className='text-primary text-3xl -mt-3'>❝</span>
                <div className='flex flex-col text-center mx-2'>
                  <span className='text-[15px] font-bold'>
                    I was scammed, by my wife!
                  </span>
                  <small className='uppercase text-[10px] text-left'>
                    ~ DIASPORAN LIVING IN IRELAND
                  </small>
                </div>
                <span className='text-primary text-3xl mt-5'>❞</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-[400px] flex-none border-r-2 py-5 h-32 mx-4 px-2'>
              <div className='flex justify-center'>
                <span className='text-primary text-3xl -mt-3'>❝</span>
                <div className='flex flex-col text-center mx-2'>
                  <span className='text-[15px] font-bold'>
                    The form was too long!
                  </span>
                  <small className='uppercase text-[10px] text-left'>
                    ~ GOVERNMENT WORKER IN ABUJA
                  </small>
                </div>
                <span className='text-primary text-3xl mt-5'>❞</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-[400px] flex-none border-r-2 py-5 h-32 mx-4 px-2'>
              <div className='flex justify-center'>
                <span className='text-primary text-3xl -mt-3'>❝</span>
                <div className='flex flex-col text-center mx-2'>
                  <span className='text-[15px] font-bold'>
                    I can’t track my repayments
                  </span>
                  <small className='uppercase text-[10px] text-left'>
                    ~ NGO WORKER WHO RECENTLY PURCHASED AN APARTMENT
                  </small>
                </div>
                <span className='text-primary text-3xl mt-5'>❞</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-[400px] flex-none border-r-2 py-5 h-32 mx-4 px-2'>
              <div className='flex justify-center'>
                <span className='text-primary text-3xl -mt-3'>❝</span>
                <div className='flex flex-col text-center mx-2'>
                  <span className='text-[15px] font-bold'>
                    They sell to diasporan clients at higher prices, that’s
                    price discrimination. It is not fair.
                  </span>
                  <small className='text-[10px] text-left'>
                    ~ SOMEONE IN CANADA
                  </small>
                </div>
                <span className='text-primary text-3xl mt-5'>❞</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-[400px] flex-none border-r-2 py-5 h-32 mx-4 px-2'>
              <div className='flex justify-center'>
                <span className='text-primary text-3xl -mt-3'>❝</span>
                <div className='flex flex-col text-center mx-2'>
                  <span className='text-[15px] font-bold'>
                    They gave me a housing list on paper to find the house. In
                    today’s tech world? Haba!
                  </span>
                  <small className='text-[10px] text-left'>
                    ~ MORTGAGE SEEKER IN ABUJA, NIGERIA.
                  </small>
                </div>
                <span className='text-primary text-3xl mt-5'>❞</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-[700px] flex-none border-r-2 py-5 h-32 mx-4 px-2'>
              <div className='flex justify-center'>
                <span className='text-primary text-3xl -mt-3'>❝</span>
                <div className='flex flex-col text-center mx-2'>
                  <span className='text-[15px] font-bold'>
                    There's an information assymetry. I don't have nearly enough
                    information to take the leap to buy a home back home. even
                    though i want to!
                  </span>
                  <small className='text-[10px] text-left'>
                    ~ MORTGAGE SEEKER IN ABUJA, NIGERIA.
                  </small>
                </div>
                <span className='text-primary text-3xl mt-5'>❞</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=' flex flex-col items-start justify-center mt-16 mx-auto'>
          <h3 className='text-4xl font-bold text-primary capitalize'>
            Here's Why!
          </h3>
        </div>
        <div
          id='rightReason'
          className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-6 md:p-10 md:px-16 md:pr-2'
        >
          <div
            className='hover:bg-[#F5F5DE] bg-white hover:shadow-lg border hover:border-primary flex flex-col justify-center w-[300px] h-[250px] items-center rounded-[20px] space-y-4 py-5 px-2'
            id='1'
          >
            <div className='w-14 h-14 bg-[#F3FAF2] border border-primary rounded-full flex justify-center items-center'>
              <img
                src='https://giddaa.com/assets/icons/scam-free.svg'
                alt=''
                className='py-2'
              />
            </div>
            <p className='font-bold text-base text-center'>Stay Scam Free!</p>
            <p className='text-center text-[13px]'>
              We partner directly with trusted banks and developers. Your
              applications are sent straight to them, eliminating the need for
              agents, close relatives or friends. We connect you directly to the
              source.
            </p>
          </div>
          <div
            className='hover:bg-[#F5F5DE] bg-white hover:shadow-lg border hover:border-primary flex flex-col justify-center w-[300px] h-[250px] items-center rounded-[20px] space-y-4 py-5 px-2'
            id='2'
          >
            <div className='w-14 h-14 bg-[#F3FAF2] border border-primary rounded-full flex justify-center items-center'>
              <img
                src='https://giddaa.com/assets/icons/streamline.svg'
                alt=''
                className='py-2'
              />
            </div>
            <p className='font-bold text-base text-center'>
              Streamline Your Search
            </p>
            <p className='text-center text-[13px]'>
              We simplify your property search by presenting comprehensive
              information in a visual and easily understandable format, making
              decision making easier and quicker for you along your journey.
            </p>
          </div>
          <div
            className='hover:bg-[#F5F5DE] bg-white hover:shadow-lg border hover:border-primary flex flex-col justify-center w-[300px] h-[250px] items-center rounded-[20px] space-y-4 py-5 px-2'
            id='3'
          >
            <div className='w-14 h-14 bg-[#F3FAF2] border border-primary rounded-full flex justify-center items-center'>
              <img
                src='https://giddaa.com/assets/icons/multiple-options.svg'
                alt=''
                className='py-2'
              />
            </div>
            <p className='font-bold text-base text-center'>
              Multiple Purchase Options
            </p>
            <p className='text-center text-[13px]'>
              We provide you with a diverse range of housing options and
              flexible financing plans, ensuring you have a wide selection of
              choices to suit your preferences and current financial situation.
            </p>
          </div>
          <div
            className='hover:bg-[#F5F5DE] bg-white hover:shadow-lg border hover:border-primary flex flex-col justify-center w-[300px] h-[250px] items-center rounded-[20px] space-y-4 py-5 px-2'
            id='4'
          >
            <div className='w-14 h-14 bg-[#F3FAF2] border border-primary rounded-full flex justify-center items-center'>
              <img
                src='https://giddaa.com/assets/icons/pay-online.svg'
                alt=''
                className='py-2'
              />
            </div>
            <p className='font-bold text-base text-center'>
              Pay Online &amp; Track All Payments
            </p>
            <p className='text-center text-[13px]'>
              Pay online and track every single payment you make. We make your
              transactions clear as day between you and the partner you purchase
              from ,be it a property developer or bank.
            </p>
          </div>
          <div
            className='hover:bg-[#F5F5DE] bg-white hover:shadow-lg border hover:border-primary flex flex-col justify-center w-[300px] h-[250px] items-center rounded-[20px] space-y-4 py-5 px-2'
            id='5'
          >
            <div className='w-14 h-14 bg-[#F3FAF2] border border-primary rounded-full flex justify-center items-center'>
              <img
                src='https://giddaa.com/assets/icons/afford.svg'
                alt=''
                className='py-2'
              />
            </div>
            <p className='font-bold  text-base text-center'>
              Find What You Can Afford
            </p>
            <p className='text-center text-[13px]'>
              We use affordability tags to visually display properties and
              financing plans you can afford based on age and income, which
              could help you simplify your decision-making.
            </p>
          </div>
          <div
            className='hover:bg-[#F5F5DE] bg-white hover:shadow-lg border hover:border-primary flex flex-col justify-center w-[300px] h-[250px] items-center rounded-[20px] space-y-4 py-5 px-2'
            id='6'
          >
            <div className='w-14 h-20 bg-[#F3FAF2] border border-primary rounded-full flex justify-center items-center'>
              <img
                src='https://giddaa.com/assets/icons/apply-online.svg'
                alt=''
                className='py-2'
              />
            </div>
            <p className='font-bold text-base text-center'>
              Apply Online — in 5 Mins, and Track Your Application.
            </p>
            <p className='text-center text-[13px]'>
              Pay online and track every single payment you make. We make your
              transactions clear as day between you and the partner you purchase
              from ,be it a property developer or bank.
            </p>
          </div>
          <div
            className='hover:bg-[#F5F5DE] bg-white hover:shadow-lg border hover:border-primary flex flex-col justify-center w-[300px] h-[250px] items-center rounded-[20px] space-y-4 py-5 px-2'
            id='7'
          >
            <div className='w-14 h-20 bg-[#F3FAF2] border border-primary rounded-full flex justify-center items-center'>
              <img
                src='https://giddaa.com/assets/icons/virtual-viewings.svg'
                alt=''
                className='py-2'
              />
            </div>
            <p className='font-bold text-base text-center'>
              See It For Yourself — Virtual Viewings
            </p>
            <p className='text-center text-[13px]'>
              Living abroad? We offer a service that allows you to view the
              property through a video call. We also send a report of the
              condition of the property after the viewing. We’re not quite at
              the VR level yet. 😁
            </p>
          </div>
          <div
            className='hover:bg-[#F5F5DE] bg-white hover:shadow-lg border hover:border-primary flex flex-col justify-center w-[300px] h-[250px] items-center rounded-[20px] space-y-4 py-5 px-2'
            id='8'
          >
            <div className='w-14 h-20 bg-[#F3FAF2] border border-primary rounded-full flex justify-center items-center'>
              <img
                src='https://giddaa.com/assets/icons/manage-terms.svg'
                alt=''
                className='py-2'
              />
            </div>
            <p className='font-bold text-base text-center'>
              Manage Terms and Documentation
            </p>
            <p className='text-center text-[13px]'>
              All terms between you and the developer or bank are managed
              online. You can view the terms you’ve offered, send revisions, if
              need be all online. You can also view and manage important
              documents like offer letters online.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
