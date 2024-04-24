import { useState } from 'react'

/* eslint-disable react/no-unescaped-entities */
export default function PublicSector() {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <div>
      <div
        id='publicSector'
        className='bg-[#F3FAF2] px-10 md:px-10 grid grid-cols-1 md:grid-cols-2'
      >
        <div className=''>
          <div className='w-20 h-20 bg-white rounded-full flex justify-center items-center'>
            <img
              src='https://giddaa.com/assets/icons/public-sector.svg'
              alt=''
              className='w-16 h-16'
            />
          </div>
          <div className=' flex flex-col items-start my-4 justify-start'>
            <h3 className='text-[40px] lg:text-[50px] font-extrabold text-primary capitalize'>
              Public Sector Workers
            </h3>
          </div>
          <p className='mt-2 max-w-[500px] text-[14px]'>
            You serve the people, and now let us serve you!. Government workers
            can effortlessly apply for a National Housing Fund (NHF) loan
            through a primary mortgage bank with Giddaa—no stress or connections
            needed. Giddaa ensures a seamless application process for NHF loans,
            and government workers can seamlessly explore alternative properties
            and plans beyond NHF.
          </p>
          <div className='grid grid-cols-2 font-bold gap-x-3 gap-y-5 mt-10'>
            <div id='dropdown-card' className=''>
              <div
                onClick={handleShow}
                className='flex space-x-3 mb-3 cursor-pointer'
              >
                <img
                  src='https://giddaa.com/assets/icons/drop-down.svg'
                  alt=''
                  className={`w-4 h-4 transform ${
                    show ? 'rotate-180' : 'rotate-0'
                  }`}
                />
                <p className='text-primary capitalize text-[12px]'>
                  Work from "your own home"
                </p>
              </div>
              <p
                className={`${
                  show ? 'block' : 'hidden'
                }  border bg-white w-[20rem] text-[12px] p-4 font-normal rounded-md`}
              >
                Though Giddaa is a self-service platform, you can reach out to
                someone from our team; we have people in Canada and Nigeria who
                will happily jump in a virtual meeting with you.
              </p>
            </div>
          </div>
        </div>

        <div className='p-4'>
          <img
            src='https://giddaa.com/assets/icons/public-workers.png'
            alt=''
            className='w-full mx-auto'
          />
        </div>
      </div>
    </div>
  )
}
