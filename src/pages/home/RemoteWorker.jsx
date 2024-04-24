import { useState } from 'react'

/* eslint-disable react/no-unescaped-entities */
export default function RemoteWorker() {
  const [work, setWork] = useState(false)
  const [lent, setLent] = useState(false)
  const [build, setBuild] = useState(false)
  const handleWork = () => {
    setWork(!work)
  }
  const handleLent = () => {
    setLent(!lent)
  }
  const handleBuild = () => {
    setBuild(!build)
  }

  return (
    <div>
      <div
        id='remoteWorker'
        className='bg-[#F3FAF2] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-4'
      >
        <div className='flex flex-col'>
          <div className='w-20 h-20 bg-white rounded-full flex justify-center items-center'>
            <img
              src='https://giddaa.com/assets/icons/remote-workers.svg'
              alt=''
              className='w-16 h-16'
            />
          </div>
          <div className='flex flex-col items-start my-6 justify-start'>
            <h3 className='text-[40px] lg:text-[60px] font-bold text-primary capitalize'>
              Naija Remote Workers
            </h3>
          </div>
          <p className='mt-2 max-w-[500px] text-[14px]'>
            Do you work from <s>home?</s> Your own Home? With Giddaa, that's
            possible. You don't need to have all the money at once to buy a
            house to become a homeowner. Leverage your job flexibility working
            remotely and your current earning capacity to build equity in a home
            of your own.
          </p>
          <div className='grid grid-cols-2 max-w-[600px] font-bold gap-x-2 gap-y-5 mt-10'>
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
                You spend most of your time at home, why don’t you make your
                home yours? Giddaa empowers you to own your own space and create
                the home office/workspace you’ve always dreamed of.
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
                  Invest In Man’s Greatest Asset ClassName
                </p>
              </div>
              <p
                className={` ${
                  build ? 'block' : 'hidden'
                } z-10 absolute border bg-white text-[12px] max-w-[20rem] p-4 font-normal rounded-md`}
              >
                Buying a home is one of the most secure and time proof
                investments you can make. Your home appreciates in value every
                year — you don’t even need to try. Future proof yourself with an
                asset that only grows.
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
                } z-10 absolute border bg-white text-[12px] w-[20rem] p-4 font-normal rounded-md`}
              >
                Escape the cycle of unpredictable rent hikes from your landlord
                by becoming a homeowner. Take control of your housing costs and
                secure your financial future with the stability of
                homeownership.
              </p>
            </div>
          </div>
        </div>

        <div className='p-4'>
          <img
            src='https://giddaa.com/assets/icons/mnaa.png'
            alt=''
            className='w-full mx-auto'
          />
        </div>
      </div>
    </div>
  )
}
