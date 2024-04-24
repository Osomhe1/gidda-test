// import { useState } from 'react'
// import { Image } from '@nextui-org/react'

// export default function WhoWeServe() {
//

//   return (
//     <div>
//       <div id='whoWeServe' className='p-5 bg-black '>
//         <div className='w-fit ml-[2.5%] flex flex-col items-center my-10'>
//           <h2 className='text-4xl font-bold text-primary capitalize'>
//             Who we serve
//           </h2>
//           <img
//             src='https://giddaa.com/assets/icons/underline.svg'
//             alt=''
//             className='w-40 my-2'
//           />
//         </div>
//         <div className='bg-white px-8 grid md:grid-cols-2'>
//           <div className='flex[55%] bg-green-500 pr16'>
//             <div className='w-24 h-24 bg-[#F5F5DE] rounded-full flex justify-center items-center'>
//               <img
//                 src='https://giddaa.com/assets/icons/diaspora.svg'
//                 alt=''
//                 className='w-16 h-16'
//               />
//             </div>
//             <div className='w-[700px] flex flex-col items-start my-8 justify-start'>
//               <h3 className='text-[50px] font-bold text-[#0A7E32] opacity-[30%] capitalize'>
//                 The Diaspora
//               </h3>
//             </div>
//             <p className='pr-52 text-[14px] -mt-5'>
//               Living outside Nigeria? Thinking about buying a place Back Home
//               for viists (No need for hotels, Airbnbs, or your parent’s house),
//               Investment, or is it a personal goal of yours? Or maybe you see
//               yourself spending more time back home . If any of those sounds
//               like you, we can help you along your home purchase journey.
//             </p>
//             <div className='grid grid-cols-2 font-bold pr-40 gap-y-5 mt-10'>
//               <div id='dropdown-card' className=''>
//                 <div
//                   onClick={handleFree}
//                   className='flex space-x-3 mb-3 cursor-pointer'
//                 >
//                   <img
//                     src='https://giddaa.com/assets/icons/drop-down.svg'
//                     alt=''
//                     className={`w-4 h-4 transform ${
//                       free ? 'rotate-180' : 'rotate-0'
//                     }`}
//                   />
//                   <p className='text-primary capitalize text-[12px]'>
//                     No Agency Fees. Giddaa is Free!
//                   </p>
//                 </div>
//                 <p
//                   className={` ${
//                     free ? 'block' : 'hidden'
//                   } z-10 absolute border bg-white text-[12px] w-[20rem] p-4 font-normal rounded-md`}
//                 >
//                   We don’t charge you agency fees or commissions. It is a
//                   self-service platform that is totally free. However, depending
//                   on the plan you want to use to buy your property, our
//                   partners, usually banks, may charge fees.
//                 </p>
//               </div>
//               <div id='dropdown-card' className=''>
//                 <div
//                   onClick={handleBuild}
//                   className='flex space-x-3 mb-3 cursor-pointer'
//                 >
//                   <img
//                     src='https://giddaa.com/assets/icons/drop-down.svg'
//                     alt=''
//                     className={`w-4 h-4 transform ${
//                       build ? 'rotate-180' : 'rotate-0'
//                     }`}
//                   />
//                   <p className='text-primary capitalize text-[12px]'>
//                     We Eliminate Price Discrimination
//                   </p>
//                 </div>
//                 <p
//                   className={` ${
//                     build ? 'block' : 'hidden'
//                   } z-10 absolute border bg-white text-[12px] w-[20rem] p-4 font-normal rounded-md`}
//                 >
//                   Every property listed on our platform has the same price
//                   whethere you’re abroad or not. You are buying at exactly the
//                   same price with those in the country!
//                 </p>
//               </div>
//               <div id='dropdown-card' className=''>
//                 <div
//                   onClick={handleLent}
//                   className='flex space-x-3 mb-3 cursor-pointer'
//                 >
//                   <img
//                     src='https://giddaa.com/assets/icons/drop-down.svg'
//                     alt=''
//                     className={`w-4 h-4 transform ${
//                       lent ? 'rotate-180' : 'rotate-0'
//                     }`}
//                   />
//                   <p className='text-primary capitalize text-[12px]'>
//                     Giddaa is Scam Proof!
//                   </p>
//                 </div>
//                 <p
//                   className={` ${
//                     lent ? 'block' : 'hidden'
//                   } z-10 absolute border bg-white text-[12px] w-[20rem] p-4 font-normal rounded-md`}
//                 >
//                   We work directly with banks and developers so you know you are
//                   buying from people with legal titles — organizations who have
//                   something to lose, not individuals.
//                 </p>
//               </div>
//               <div id='dropdown-card' className=''>
//                 <div
//                   onClick={handleWork}
//                   className='flex space-x-3 mb-3 cursor-pointer'
//                 >
//                   <img
//                     src='https://giddaa.com/assets/icons/drop-down.svg'
//                     alt=''
//                     className={`w-4 h-4 transform ${
//                       work ? 'rotate-180' : 'rotate-0'
//                     }`}
//                   />
//                   <p className='text-primary capitalize text-[12px]'>
//                     Relevant Information to Boost Your Confidence!
//                   </p>
//                 </div>
//                 <p
//                   className={` ${
//                     work ? 'block' : 'hidden'
//                   } z-10 absolute border bg-white text-[12px] w-[20rem] p-4 font-normal rounded-md`}
//                 >
//                   We reduce the information gap between you and those in
//                   Nigeria. You have all the information on properties and plans
//                   you need to make informed decisions.
//                 </p>
//               </div>
//               <div id='dropdown-card' className=''>
//                 <div
//                   onClick={handleResponsive}
//                   className='flex space-x-3 mb-3 cursor-pointer'
//                 >
//                   <img
//                     src='https://giddaa.com/assets/icons/drop-down.svg'
//                     alt=''
//                     className={`w-4 h-4 transform ${
//                       responsive ? 'rotate-180' : 'rotate-0'
//                     }`}
//                   />
//                   <p className='text-primary capitalize text-[12px]'>
//                     We are Responsive!
//                   </p>
//                 </div>
//                 <p
//                   className={` ${
//                     responsive ? 'block' : 'hidden'
//                   } z-10 absolute border bg-white text-[12px] w-[20rem] p-4 font-normal rounded-md`}
//                 >
//                   Though Giddaa is a self-service platform, you can reach out to
//                   someone from our team; we have people in Canadaand Nigeria who
//                   will happily jump in a virtual meeting with you.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className='flex[45%] bg-red-500'>
//             <div className='w-96 mxauto'>
//               <Image
//                 src='https://giddaa.com/assets/icons/we-serve.png'
//                 alt=''
//                 className='w-full h1/2 mr52'
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import { useState } from 'react'
import { Image } from '@nextui-org/react'

export default function WhoWeServe() {
  const [work, setWork] = useState(false)
  const [lent, setLent] = useState(false)
  const [build, setBuild] = useState(false)
  const [free, setFree] = useState(false)
  const [responsive, setResponsive] = useState(false)

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
  const handleResponsive = () => {
    setResponsive(!responsive)
  }

  return (
    <div>
      <div id='whoWeServe' className='p-5 '>
        <div
          className='w-fit ml-[2.5%] flex flex-col items-center my-10'
        >
          <h2 className='text-4xl font-bold text-primary capitalize'>
            Who we serve
          </h2>
          <img
            src='https://giddaa.com/assets/icons/underline.svg'
            alt=''
            className='w-40 my-2'
          />
        </div>
        <div className='bg-white px-4 md:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col p-4'>
              <div className='w-24 h-24 bg-[#F5F5DE] rounded-full flex justify-center items-center'>
                <img
                  src='https://giddaa.com/assets/icons/diaspora.svg'
                  alt=''
                  className='w-16 h-16'
                />
              </div>
              <div className='flex flex-col items-start my-4 justify-start'>
                <h3 className='text-2xl font-bold text-[#0A7E32] opacity-[30%] capitalize'>
                  The Diaspora
                </h3>
              </div>
              <p className='text-sm'>
                Living outside Nigeria? Thinking about buying a place Back Home
                for visits, investment, or as a personal goal? Or maybe you see
                yourself spending more time back home. If any of those sounds
                like you, we can help you along your home purchase journey.
              </p>
              <div className='grid md:grid-cols-2 gap-2 mt-4'>
                <div className=''>
                  <div
                    onClick={handleFree}
                    className='flex items-center cursor-pointer'
                  >
                    <img
                      src='https://giddaa.com/assets/icons/drop-down.svg'
                      alt=''
                      className={`w-4 h-4 transform ${
                        free ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                    <p className='text-primary capitalize text-sm'>
                      No Agency Fees. Giddaa is Free!
                    </p>
                  </div>
                  <p
                    className={` ${
                      free ? 'block' : 'hidden'
                    } border bg-white text-sm p-4 font-normal rounded-md`}
                  >
                    We don’t charge you agency fees or commissions. It is a
                    self-service platform that is totally free. However,
                    depending on the plan you want to use to buy your property,
                    our partners, usually banks, may charge fees.
                  </p>
                </div>

                <div className=''>
                  <div
                    onClick={handleBuild}
                    className='flex items-center cursor-pointer'
                  >
                    <img
                      src='https://giddaa.com/assets/icons/drop-down.svg'
                      alt=''
                      className={`w-4 h-4 transform ${
                        build ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                    <p className='text-primary capitalize text-sm'>
                      We Eliminate Price Discrimination
                    </p>
                  </div>
                  <p
                    className={` ${
                      build ? 'block' : 'hidden'
                    } border bg-white text-sm p-4 font-normal rounded-md`}
                  >
                    Every property listed on our platform has the same price
                    whether you’re abroad or not. You are buying at exactly the
                    same price with those in the country!
                  </p>
                </div>

                <div className=''>
                  <div
                    onClick={handleLent}
                    className='flex items-center cursor-pointer'
                  >
                    <img
                      src='https://giddaa.com/assets/icons/drop-down.svg'
                      alt=''
                      className={`w-4 h-4 transform ${
                        lent ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                    <p className='text-primary capitalize text-sm'>
                      Giddaa is Scam Proof!
                    </p>
                  </div>
                  <p
                    className={` ${
                      lent ? 'block' : 'hidden'
                    } border bg-white text-sm p-4 font-normal rounded-md`}
                  >
                    We work directly with banks and developers so you know you
                    are buying from people with legal titles — organizations who
                    have something to lose, not individuals.
                  </p>
                </div>

                <div className=''>
                  <div
                    onClick={handleWork}
                    className='flex items-center cursor-pointer'
                  >
                    <img
                      src='https://giddaa.com/assets/icons/drop-down.svg'
                      alt=''
                      className={`w-4 h-4 transform ${
                        work ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                    <p className='text-primary capitalize text-sm'>
                      Relevant Information to Boost Your Confidence!
                    </p>
                  </div>
                  <p
                    className={` ${
                      work ? 'block' : 'hidden'
                    } border bg-white text-sm p-4 font-normal rounded-md`}
                  >
                    We reduce the information gap between you and those in
                    Nigeria. You have all the information on properties and
                    plans you need to make informed decisions.
                  </p>
                </div>
                <div className=''>
                  <div
                    onClick={handleResponsive}
                    className='flex items-center cursor-pointer'
                  >
                    <img
                      src='https://giddaa.com/assets/icons/drop-down.svg'
                      alt=''
                      className={`w-4 h-4 transform ${
                        responsive ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                    <p className='text-primary capitalize text-sm'>
                      We are Responsive!
                    </p>
                  </div>
                  <p
                    className={` ${
                      responsive ? 'block' : 'hidden'
                    } border bg-white text-sm p-4 font-normal rounded-md`}
                  >
                    Though Giddaa is a self-service platform, you can reach out
                    to someone from our team; we have people in Canada and
                    Nigeria who will happily jump in a virtual meeting with you.
                  </p>
                </div>
              </div>
            </div>
            <div className='p-4'>
              <Image
                src='https://giddaa.com/assets/icons/we-serve.png'
                alt=''
                className='w-full mx-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
