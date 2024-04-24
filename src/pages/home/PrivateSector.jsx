import { useState } from 'react'

export default function PrivateSector() {
  const [work, setWork] = useState(false)
  const [lent, setLent] = useState(false)
  const [build, setBuild] = useState(false)
  const [free, setFree] = useState(false)
  const handleWork = () => {
    setWork(!work)
  }
  const handleLent = () => {
    setLent(!lent)
  }
  const handleBuild = () => {
    setBuild(!build)
  }
  const handleFree = () => {
    setFree(!free)
  }
  return (
    <div>
      <div className='px-4 md:px-8 grid grid-cols-1 md:grid-cols-2'>
        <div id='privateSector' className='bg-white px-10 flex flex-col'>
          <div className='w-20 h-20 bg-[#F5F5DE] rounded-full flex justify-center items-center'>
            <img
              src='https://giddaa.com/assets/icons/private-sector.svg'
              alt=''
              className='w-16 h-16'
            />
          </div>
          <div className='max-w-[500px] flex flex-col items-start my-6 justify-start'>
            <h3 className=' text-[40px] lg:text-[50px] font-extrabold text-[#0A7E32] opacity-[30%] capitalize'>
              Private Sector Workers
            </h3>
          </div>
          <p className=' pr52 text-[14px]'>
            Whether you’re a doctor, nurse, banker, tech bro or sis, or work in
            another industry in the private sector, Giddaa assists individuals
            looking to purchase property without straining their budget or
            breaking the bank. In the face of rising property prices, we empower
            middle-className individuals, like you, to achieve homeownership!
          </p>
          <div className='grid grid-cols-2 font-bold gap-x-2 gap-y-2 mt-5'>
            <div id='dropdown-card' className=''>
              <div
                onClick={handleWork}
                className='flex space-x-3 mb-3 cursor-pointer'
              >
                <img
                  src='https://giddaa.com/assets/icons/drop-down.svg'
                  alt=''
                  className={`w-4 h-4 transform ${
                    work ? 'rotate-180' : 'rotate-0'
                  }`}
                />
                <p className='text-primary capitalize text-[12px]'>
                  Work From “Your Own Home”
                </p>
              </div>
              <p
                className={` ${
                  work ? 'block' : 'hidden'
                } z-10 absolute border bg-white text-[12px] max-w-[20rem] p-4 font-normal rounded-md`}
              >
                Buying a home is one of the most secure and time proof
                investments you can make. Your home appreciates in value every
                year — you don’t even need to try. Future proof yourself and
                your net worth with a continuously growing asset.
              </p>
            </div>
            <div id='dropdown-card' className=''>
              <div
                onClick={handleLent}
                className='flex space-x-3 mb-3 cursor-pointer'
              >
                <img
                  src='https://giddaa.com/assets/icons/drop-down.svg'
                  alt=''
                  className={`w-4 h-4 transform ${
                    lent ? 'rotate-180' : 'rotate-0'
                  }`}
                />
                <p className='text-primary capitalize text-[12px]'>
                  Don’t Let Rent Go Up On You, Again!!
                </p>
              </div>
              <p
                className={` ${
                  lent ? 'block' : 'hidden'
                } z-10 absolute border bg-white text-[12px] max-w-[20rem] p-4 font-normal rounded-md`}
              >
                Escape the cycle of unpredictable rent hikes from your landlord
                by becoming a homeowner. Take control of your housing costs and
                secure your financial future with the stability of
                homeownership.
              </p>
            </div>
            <div id='dropdown-card' className=''>
              <div
                onClick={handleBuild}
                className='flex space-x-3 mb-3 cursor-pointer'
              >
                <img
                  src='https://giddaa.com/assets/icons/drop-down.svg'
                  alt=''
                  className={`w-4 h-4 transform ${
                    build ? 'rotate-180' : 'rotate-0'
                  }`}
                />
                <p className='text-primary capitalize text-[12px]'>
                  Build a Solid Foundation for your Family
                </p>
              </div>
              <p
                className={` ${
                  build ? 'block' : 'hidden'
                } z-10 absolute border bg-white text-[12px] max-w-[20rem] p-4 font-normal rounded-md`}
              >
                Every family starts at home. Homeownership, offers a sanctuary
                of safety and comfort for you and your loved ones. With Giddaa,
                you can bring the sense of security to your family that comes
                with homeownership.
              </p>
            </div>
            <div id='dropdown-card' className=''>
              <div
                onClick={handleFree}
                className='flex space-x-3 mb-3 cursor-pointer'
              >
                <img
                  src='https://giddaa.com/assets/icons/drop-down.svg'
                  alt=''
                  className={`w-4 h-4 transform ${
                    free ? 'rotate-180' : 'rotate-0'
                  }`}
                />
                <p className='text-primary capitalize text-[12px]'>
                  No Agency Fees. Giddaa is Free!
                </p>
              </div>
              <p
                className={`${
                  free ? 'block' : 'hidden'
                } z-10 absolute border bg-white text-[12px] max-w-[20rem] p-4 font-normal rounded-md`}
              >
                We don’t charge you agency fees or commissions. It is a
                self-service platform that is totally free. However, depending
                on the plan you want to use to buy your property, our partners,
                usually banks, may charge fees.
              </p>
            </div>
          </div>
        </div>

        <div className='p-4'>
          <img
            src='https://giddaa.com/assets/icons/private-workers.png'
            alt=''
            className='w-full mx-auto'
          />
        </div>
      </div>
    </div>
  )
}
