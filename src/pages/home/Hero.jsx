/* eslint-disable react/no-unescaped-entities */

export default function Hero() {
  return (
    <div>
      <section className=' md:px-0 grid grid-cols-1 md:grid-cols-2 '>
        <div id='text' className='w-full px-4 mt-20 lg:pe-32 lg:ps-[5rem]'>
          <div className=' mt-10 lg:px-0'>
            <h1 className=' font-bold lg:text-4xl text-2xl lg:leading-tight capitalize'>
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
            <div className='mt-10 py-6 flex'>
              <button className='flex bg-[#335f32] text-white w-fit cursor-pointer  justify-between rounded-full px-3 py-2 md:px-6 text-sm md:py-4 font-bold gap-4 items-center  '>
                Find a Home
              </button>
              <button className='ml-5 border-2 flex items-center justify-center rounded-md text-base md:w-[70%] border-[#335f32] lg:px-10 cursor-default font-bold'>
                <p className='px-2'> 198 Person Have Seen This</p>
              </button>
            </div>
          </div>
        </div>
        <div id='heroImage' className='lg:mt-20'>
          <img
            src={`https://giddaa.com/assets/img/hero.jpg`}
            alt='hero_image'
            className='w-full h-full mx-auto'
          />
        </div>
      </section>
    </div>
  )
}
