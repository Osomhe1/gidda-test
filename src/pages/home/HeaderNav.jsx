import { useState } from 'react'

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <nav className='bg-[#f2f2f2] fixed left-0 top-0 flex justify-center items-center md:gap-[3rem] w-full h-[79px] border-b-0 py-2 md:px-[8rem] z-[90]'>
        <div className=' md:flex justify-center items-center'>
          <div className='lg:h-[64px] lg:w-[69px] h-[40px] w-[40px]'>
            <a href='/' className='h-full'>
              <img
                src='https://s3.amazonaws.com/appforest_uf/f1675031132769x885606220423525500/GiddaaLogoGreen.svg'
                alt=''
              />
            </a>
          </div>
        </div>
        <div className='flex items-center w-full justify-between md:hidden px-2'>
          <h2 className='font-title text-[#335f32] text-2xl text-center'></h2>
          <button
            className='text-[#335f32] text-xl focus:outline-none'
            onClick={toggleMenu}
            aria-label='Toggle Menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={
                  isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'
                }
              />
            </svg>
          </button>
        </div>
        <ul
          id='navmenu'
          className={`w-full md:w-64 md:flex ${
            isMenuOpen ? 'flex justify-center' : 'hidden'
          } mx-auto`}
        >
          <li className='px-3'>
            <a
              aria-current='page'
              className='text-[14px] font-medium nav-link'
              href='/'
            >
              <span className='relative text-[#335f32] inline-block'>
                Home
                <span className='absolute bottom-0 left-4 w-1 h-1 rounded-full bg-[#335f32]'></span>
              </span>
            </a>
          </li>
          <li className='px-3'>
            <a className='text-[14px] font-medium nav-link' href='#/'>
              Properties
            </a>
          </li>
          <li className='px-3'>
            <a className='text-[14px] font-medium nav-link' href='#/'>
              Developers
            </a>
          </li>
          <li className='px-3'>
            <a className='text-[14px] font-medium nav-link' href='#/'>
              Banks
            </a>
          </li>
        </ul>

        <div
          className={`${
            isMenuOpen ? 'hidden' : ''
          } flex justify-center lg:justify-end`}
        >
          <a
            className='text-base bg-[#335f32] flex  rounded-full py-2 md:py-3 px-2 md:px-5 text-white items-center hover:bg-[#1f3d1e]'
            href='/login'
          >
            Login
            <span>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
                height='18'
                width='18'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m13 16 5-4-5-4v3H4v2h9z'></path>
                <path d='M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z'></path>
              </svg>
            </span>
          </a>
        </div>
      </nav>
    </div>
  )
}
