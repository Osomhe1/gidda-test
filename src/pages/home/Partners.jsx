export default function Partners() {
  const underlinImg = `https://giddaa.com/assets/icons/underline.svg`
  const underlinImg2 = `https://giddaa.com/assets/icons/hands-shake.svg`
  return (
    <>
      <div>
        <div id='our-partners' className='relative'>
          <div className='p-10 bg-[#F5F5DE] py-8'>
            <div className='w-[320px] flex flex-col items-center pr-20'>
              <h2 className='text-4xl font-bold  text-[#335f32]'>Trusted By</h2>
              <img src={underlinImg} alt='' className='w-28 my-2' />
            </div>
            <div className='carousel-container'>
              <div
                className='carousel-track px-16 mt-10 flex space-x-20'
                //   className='width: 1000px;'
              >
                <span aria-live='polite' aria-busy='true'>
                  <span
                    className='react-loading-skeleton'
                    //   className='width: 80px; height: 80px; border-radius: 50%;'
                  >
                    ‌
                  </span>
                  <br />
                </span>
                <span aria-live='polite' aria-busy='true'>
                  <span
                    className='react-loading-skeleton'
                    //   className='width: 80px; height: 80px; border-radius: 50%;'
                  >
                    ‌
                  </span>
                  <br />
                </span>
                <span aria-live='polite' aria-busy='true'>
                  <span
                    className='react-loading-skeleton'
                    //   className='width: 80px; height: 80px; border-radius: 50%;'
                  >
                    ‌
                  </span>
                  <br />
                </span>
                <span aria-live='polite' aria-busy='true'>
                  <span
                    className='react-loading-skeleton'
                    //   className='width: 80px; height: 80px; border-radius: 50%;'
                  >
                    ‌
                  </span>
                  <br />
                </span>
                <span aria-live='polite' aria-busy='true'>
                  <span
                    className='react-loading-skeleton'
                    //   className='width: 80px; height: 80px; border-radius: 50%;'
                  >
                    ‌
                  </span>
                  <br />
                </span>
              </div>
            </div>
          </div>
          <div className='w-64 bg-white shadow-lg h-12 absolute flex origin-bottom -rotate-6 drop-shadow-xl items-center justify-center gap-x-3 ml-[45%] rounded-[2.5rem] border-2 border-[#335f32]'>
            <img src={underlinImg2} alt='' className='w-10 h-10' />
            <h1 className='text-primary font-title text-[12px]'>
              If They Trust Us, So Can You
            </h1>
          </div>
          <div id='interviews' className='bg-[#F3FAF2] px-24 pb-40 pt-16'>
            <div className='flex space-x-16'>
              <div className='w-[300px] mt-12 px-12 rounded-[3.5rem] h-[350px]'>
                <span aria-live='polite' aria-busy='true'>
                  <span
                    className='react-loading-skeleton rounded-[3.5rem]'
                    //   className='border-radius: 3.5rem; width: 300px; height: 350px;'
                  >
                    ‌
                  </span>
                  <br />
                </span>
              </div>
              <div className='w-[300px] mt-12 px-12 rounded-[3.5rem] h-[350px]'>
                <span aria-live='polite' aria-busy='true'>
                  <span
                    className='react-loading-skeleton rounded-[3.5rem]'
                    //   className='border-radius: 3.5rem; width: 300px; height: 350px;'
                  >
                    ‌
                  </span>
                  <br />
                </span>
              </div>
              <div className='w-[300px] mt-12 px-12 rounded-[3.5rem] h-[350px]'>
                <span aria-live='polite' aria-busy='true'>
                  <span
                    className='react-loading-skeleton rounded-[3.5rem]'
                    //   className='border-radius: 3.5rem; width: 300px; height: 350px;'
                  >
                    ‌
                  </span>
                  <br />
                </span>
              </div>
              <div className='w-[300px] mt-12 px-12 rounded-[3.5rem] h-[350px]'>
                <span aria-live='polite' aria-busy='true'>
                  <span
                    className='react-loading-skeleton rounded-[3.5rem]'
                    //   className='border-radius: 3.5rem; width: 300px; height: 350px;'
                  >
                    ‌
                  </span>
                  <br />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
