import { useState } from 'react'

/* eslint-disable react/no-unescaped-entities */
export default function PurcheasePower() {
  const [build, setBuild] = useState(false)
  const [free, setFree] = useState(false)
  const [responsive, setResponsive] = useState(false)
  const handleFree = () => {
    setFree(!free)
  }
  const handleResponsive = () => {
    setResponsive(!responsive)
  }
  const handleBuild = () => {
    setBuild(!build)
  }

  return (
    <div>
      <div id='purchaseOptions' className='p-10 py-8'>
        <div className='flex flex-col items-start itemscenter my-4 pr-40'>
          <h2 className='text-2xl lg:text-4xl font-bold text-primary capitalize'>
            Your purchase options
          </h2>
          <div className='w-32 lg:w-40 mx-auto md:mx-28'>
            <img
              src='https://giddaa.com/assets/icons/underline.svg'
              alt=''
              className='w-full'
            />
          </div>
        </div>
        <p className='text-center text-[14px] font-black'>
          Buying a home isn't a one-size fits all kind of purchase — we know!.
          So…we give you <br />
          all the options the market has to offer to choose from!
        </p>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3  md:px-14 mt-10'>
          <div className='bg-[#F3FAF2] px-8 rounded-[2.5rem] py-8 hover:border-2 border-primary  '>
            <div className='flex py-4 items-center'>
              <img
                src='https://giddaa.com/assets/icons/slow-turtle.svg'
                alt=''
              />
              <div
                className='text-center 
                  ml-[19%] space-y-2'
              >
                <h1 className='font-bold text-2xl text-primary'>Mortgages</h1>
                <small className='uppercase text-[9px] '>the slow turtle</small>
              </div>
            </div>
            <p className='text-[12px]'>
              Imagine you want to buy a house, but you don’t have all the money
              upfront. A mortgage is like a loan from a bank or a lender that
              helps you buy the house now, and you pay back the loan over time,
              usually with interest. It’s a way to spread out the cost of buying
              a house over several years instead of paying for it all at once.
              Once you pay off the mortgage, you own the house outright.
            </p>
            <div id='anotherExplanation'>
              <div
                onClick={handleBuild}
                className='flex space-x-3 text-[14px] cursor-pointer mt-7 items-center'
              >
                <img
                  src='https://giddaa.com/assets/icons/drop-down.svg'
                  alt=''
                  className={`w-4 h-4 transform ${
                    build ? 'rotate-180' : 'rotate-0'
                  }`}
                />
                <p className='text-primary font-bold'>
                  View Another Explanation
                </p>
                <img
                  src='https://giddaa.com/assets/icons/light-bulb.svg'
                  alt=''
                  className='w-3 h-3'
                />
              </div>
              <p
                className={`${
                  build ? 'block' : 'hidden'
                } z-10 absolute border text-[12px] bg-white w-[370px] p-4 font-normal rounded-xl`}
              >
                Picture getting a mortgage as a turtle competing against a
                rabbit: though the rabbit may dash ahead initially, reflecting
                short-term plans, the turtle’s steady but gradual pace, similar
                to mortgage payments, ensures stability and the ability to own a
                home without stressing your finances by coughing a large amount
                of money at once to buy a home.
              </p>
            </div>
            <div id='features' className='mt-[5%] py6'>
              <h1 className='font-bold text-primary text-lg text-center'>
                Features of Mortgages
              </h1>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>
                  For budget conscious people without the money to make large
                  payments.
                </p>
              </div>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>
                  Mostly offered by banks &amp; financial institutions
                </p>
              </div>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>Typically attracts payment of interest</p>
              </div>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>
                  Payment periods are usually long term (Typically between 10 -
                  30 years)
                </p>
              </div>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>
                  Monthly Payments are fixed, meaning it remains the same
                  throughout the payment period. For example, you pay N150,000
                  in Month 1, you’ll pay N150,000 in Month 70. The payment
                  remains the same over time.
                </p>
              </div>
            </div>
            <div className='w-60 md:w-52 lg:w-60 cursor-pointer mt-12 py-2 px-1 bg-white  mx-auto flex items-center justify-center gap-x-3 m rounded-[2.5rem] border-2 border-primary'>
              <img
                src='https://giddaa.com/assets/icons/play-small.svg'
                alt=''
                className='w-6 h-6 md:w-3  lg:w-6 lg:h-6'
              />
              <h1 className='text-primary text-[10px] md:text-[8px] lg:text-[10px]'>
                WATCH THE VIDEO TO LEARN MORE
              </h1>
            </div>
          </div>
          <div className='bg-[#F5F5DE] px-8 rounded-[2.5rem] hover:border-2 border-primary  '>
            <div className='flex py-4 items-center'>
              <img
                src='https://giddaa.com/assets/icons/galloping-horse.svg'
                alt=''
                className='w-6 h-6'
              />
              <div
                className='text-center 
                  ml-[11%] space-y-2'
              >
                <h1 className='font-bold text-2xl text-primary'>
                  Payment Plans
                </h1>
                <p className='uppercase text-[9px]'>the galloping horse</p>
              </div>
            </div>
            <p className='text-[12px]'>
              Imagine you’re looking to buy your dream house, but you don’t have
              all the money saved up. A payment plan is a structured arrangement
              where you agree to pay for your home over a period of time instead
              of all at once. It allows you to split the cost into smaller,
              manageable payments spread out over months, or years until the
              full amount is paid off. This makes the purchase of your dream
              home more affordable and accessible by breaking down the total
              cost into more managable payments, usually monthly.
            </p>
            <div id='anotherExplanation'>
              <div
                onClick={handleFree}
                className='flex space-x-3 text-[14px] cursor-pointer mt-7 items-center'
              >
                <img
                  src='https://giddaa.com/assets/icons/drop-down.svg'
                  alt=''
                  className={`w-4 h-4 transform ${
                    free ? 'rotate-180' : 'rotate-0'
                  }`}
                />
                <p className='text-primary font-bold'>
                  View Another Explanation
                </p>
                <img
                  src='https://giddaa.com/assets/icons/light-bulb.svg'
                  alt=''
                  className='w-3 h-3'
                />
              </div>
              <p
                className={`${
                  free ? 'block' : 'hidden'
                } z-10 absolute border text-[12px] bg-white w-[370px] p-4 font-normal rounded-xl`}
              >
                Picture a horse galloping with a rabbit and a turtle. It is not
                quite as fast as the rabbit, but not nearly as slow as the
                turtle. It wants to get to the finish line quickly, but won’t
                beat the rabbit, but will beat the turtle, Similarly, a payment
                plan allows you to purchase a property over a short period of
                time, but not as short as an outright purchase, but not as long
                as mortgage. You make periodic payments over a short period of
                time.
              </p>
            </div>
            <div id='features' className='mt-[5%]'>
              <h1 className='font-bold text-primary text-lg  text-center'>
                Features of Payment Plans
              </h1>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>
                  For people who want pocket friendly options, but don’t want to
                  pay interest
                </p>
              </div>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>Mostly offered by property Developers</p>
              </div>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>
                  Usually zero (0%) interest. Payment plans usally don’t attract
                  interest.
                </p>
              </div>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>
                  Payment periods are usually short term (6 Months - 3 Years)
                </p>
              </div>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>
                  Like ,mortgages, monthly payments are also fixed, but may
                  change if the property developer experiences issues during
                  development. If periodic payments are subject to change, the
                  developer usually states it in your offer letter.
                </p>
              </div>
            </div>
            <div className='w-60 md:w-52 lg:w-60 cursor-pointer mb-6 md:mb-0 mt-12 py-2 px-1 bg-white  mx-auto flex items-center justify-center gap-x-3 rounded-[2.5rem] border-2 border-primary'>
              <img
                src='https://giddaa.com/assets/icons/play-small.svg'
                alt=''
                className='w-6 h-6 md:w-3  lg:w-6 lg:h-6'
              />
              <h1 className='text-primary text-[10px] md:text-[8px] lg:text-[10px]'>
                WATCH THE VIDEO TO LEARN MORE
              </h1>
            </div>
          </div>
          <div className='bg-[#F0F0F0] px-8 rounded-[2.5rem] hover:border-2 border-primary  '>
            <div className='flex py-4 items-center'>
              <img
                src='https://giddaa.com/assets/icons/swift-rabbit.svg'
                alt=''
                className='w-6 h-6'
              />
              <div
                className='text-center 
                  ml-[5%] space-y-2'
              >
                <h1 className='font-bold text-2xl text-primary'>
                  Ouright Purchase
                </h1>
                <p className='uppercase text-[9px]'>THE SWIFT RABBIT</p>
              </div>
            </div>
            <p className='text-[12px]'>
              The outright purchase of a house refers to buying a home directly
              without the need for financing through a mortgage or creation of
              flexible payment plans by developers. In this scenario, you pay
              the entire purchase price upfront using your own funds or savings,
              without relying on a loan from a bank or flexible payment options
              from developers. This means that once the transaction is complete,
              the you own the property outright, without any debt or ongoing
              payments to a lender or property developer.
            </p>
            <div id='anotherExplanation'>
              <div
                onClick={handleResponsive}
                className='flex space-x-3 text-[14px] cursor-pointer mt-7 items-center'
              >
                <img
                  src='https://giddaa.com/assets/icons/drop-down.svg'
                  alt=''
                  className={`w-4 h-4 transform ${
                    responsive ? 'rotate-180' : 'rotate-0'
                  }`}
                />
                <p className='text-primary font-bold'>
                  View Another Explanation
                </p>
                <img
                  src='https://giddaa.com/assets/icons/light-bulb.svg'
                  alt=''
                  className='w-3 h-3'
                />
              </div>
              <p
                className={`${
                  responsive ? 'block' : 'hidden'
                } z-10 absolute border text-[12px] bg-white w-[370px] p-4 font-normal rounded-xl`}
              >
                Picture a rabbit running with a turtle or a horse. It wants to
                get to its destination quickly an knows it has the pace to get
                there without needing to stop or receivie assistance from
                anyone. It can go all the way, by itself. Similarly, with
                outright purchases, you don’t need anyone to help you. You can
                and are able to buy the property by yourself 100%. After you
                pay, the house is your, no repayments needed. Go Rabbit, go!
              </p>
            </div>
            <div id='features' className='mt-[3%]'>
              <h1 className='font-bold text-primary text-lg text-center'>
                Features of Outright Purchase
              </h1>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>
                  For people who have the ability to make large purchases at
                  once.
                </p>
              </div>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>Mostly offered by property Developers</p>
              </div>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>
                  Usually zero (0%) interest. Payment plans usally don’t attract
                  interest.
                </p>
              </div>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>
                  There are no payment periods. This requires a one-time
                  payment.
                </p>
              </div>
              <div className='flex space-x-2 text-[12px] my-1 items-start'>
                <img
                  src='https://giddaa.com/assets/icons/caret-right.svg'
                  alt=''
                  className='w-3 h-3'
                />
                <p className=''>
                  This requires one lump sum payment, upon which the property is
                  fully yours.
                </p>
              </div>
            </div>
            <div className='w-60 md:w-52 lg:w-60 cursor-pointer mb-6 md:mb-0 mt-20 py-2 px-1 bg-white  mx-auto flex items-center justify-center gap-x-3 rounded-[2.5rem] border-2 border-primary'>
              <img
                src='https://giddaa.com/assets/icons/play-small.svg'
                alt=''
                className='w-6 h-6 md:w-3  lg:w-6 lg:h-6'
              />
              <h1 className='text-primary text-[10px] md:text-[8px] lg:text-[10px]'>
                WATCH THE VIDEO TO LEARN MORE
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
