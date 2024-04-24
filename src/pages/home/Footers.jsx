export default function Footers() {
  return (
    <div>
      <footer className='w-full position-absolute bottom-0'>
        <div className='flex flex-col bg-[#335f32] w-full justify-center items-center text-xl font-light text-[#d8d8d8] font-nav-bar'>
          <div className='w-80 md:w-[450px] cursor-pointer flex flex-col justify-center items-center space-y-2 py-2 md:py-4 rounded-[5.5rem] bg-[#F3FAF2] mt-4'>
            <img
              src='https://giddaa.com/assets/icons/whatsapp-community.png'
              alt='whatsapp-community'
              className='w-40 h-10'
            />
            <div className='flex items-center space-x-5 w-fit'>
              <img
                src='https://giddaa.com/assets/icons/whatsapp.svg'
                alt=''
                className='w-6 md:w-10 md:h-10'
              />
              <p className='font-bold text-[10px] md:text-base text-[#0A7E32]'>
                Join Our WhatsApp Community
              </p>
              <img
                src='https://giddaa.com/assets/icons/arrow.svg'
                alt=''
                className='w-4 md:w-6 md:h-6'
              />
            </div>
          </div>
          <div className=' lg:flex xl:w-[1280px] lg:pb-20 pb-10 pt-'>
            <div
              id='developers'
              className='lg:w-3/6 lg:items-start w-6/6 mt-10 flex flex-col justify-center items-center'
            >
              <h6 className='font-bold text-xl text-white'>Developers</h6>
              <ul>
                <li className=' text-[13px]'>Residencia Moderno</li>
                <li className=' text-[13px]'>
                  <a
                    href='https://dev-developer.giddaa.com/account/login'
                    className='font-bold'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Join as a Developer
                  </a>
                </li>
              </ul>
            </div>
            <div
              id='banks'
              className='lg:w-3/6 lg:items-start w-6/6 mt-[0.1%] flex flex-col justify-center items-center'
            >
              <h6 className='font-bold text-xl text-white'>Banks</h6>
              <ul>
                <li className=''>
                  <a
                    href='https://dev-bank.giddaa.com/account/login'
                    className='font-bold text-[13px]'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Join as a Bank
                  </a>
                </li>
              </ul>
            </div>
            <div
              id='legal'
              className='lg:w-3/6 lg:items-start w-6/6 mt-[0.5%] flex flex-col justify-center items-center'
            >
              <h6 className='font-bold text-xl text-white'>Legal</h6>
              <ul>
                <li className=''>
                  <a
                    href='#'
                    className='font-bold text-[13px]'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className=''>
                  <a
                    href='#'
                    className='font-bold text-[13px]'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div
              id='contact-us'
              className='lg:w-3/6 lg:items-start w-6/6 mt-[4.5%] flex flex-col justify-center items-center'
            >
              <h1 className='font-bold text-xl text-white'>Contact Us</h1>
              <p className=' text-[13px]'>
                <a href='mailto:info@giddaa.com'>info@giddaa.com</a>
              </p>
              <a
                href='https://wa.me/08139145416'
                className=' text-[13px]'
                rel='noopener noreferrer'
              >
                Whatsapp
              </a>
              <a
                href='#'
                className=' text-[13px] font-extrabold'
                rel='noopener noreferrer'
              >
                +234 809 762 1791
              </a>
              <a
                href='#'
                className=' font-extrabold  text-[13px]'
                rel='noopener noreferrer'
              >
                Book a Meeting
              </a>
            </div>
            <div
              id='site-navigation'
              className='lg:w-3/6 lg:items-start w-6/6 mt-10 flex flex-col justify-center items-center'
            >
              <h1 className='font-bold text-xl text-white'>Site Navigation</h1>
              <a href='/property' className=' text-[13px]'>
                Properties
              </a>
              <a
                href='/developers'
                className=' text-[13px]'
                rel='noopener noreferrer'
              >
                Developers
              </a>
              <a href='/banks' className=' text-[13px]'>
                Banks
              </a>
            </div>
          </div>
          <div className='flex mx-auto space-x-2 mb-5'>
            <img
              src='https://giddaa.com/assets/icons/linkedin.svg'
              alt=''
              className='w-10 h-10'
            />
            <img
              src='https://giddaa.com/assets/icons/twitter.svg'
              alt=''
              className='w-10 h-10'
            />
            <img
              src='https://giddaa.com/assets/icons/instagram.svg'
              alt=''
              className='w-10 h-10'
            />
            <img
              src='https://giddaa.com/assets/icons/tik-tok.svg'
              alt=''
              className='w-10 h-10'
            />
            <img
              src='https://giddaa.com/assets/icons/facebook.svg'
              alt=''
              className='w-10 h-10'
            />
          </div>
          <p className='text-[13px] text-center font-bold w-full border-t-2 p-3'>
            {' '}
            Property of Giddaa Housing Limited{' '}
          </p>
        </div>
      </footer>
    </div>
  )
}
