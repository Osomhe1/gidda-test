export default function GetStarted() {
  return (
    <div>
      <div
        id='getStarted'
        className='bg-[#F3FAF2] gap-y-4 py-12 px-6 text-center flex flex-col justify-center items-center'
      >
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-5xl font-bold text-primary capitalize'>
            Get Started
          </h2>
        </div>
        <p className='text-[12px]'>
          We are on a mission to empower income earning Nigerians to own their
          first homes before they turn
          <br />
          50 years old. Create an account and join the mission. It’s gonna be a
          long but fulfilling ride.{' '}
          <span className='text-primary font-extrabold'>Let’s Go!</span>
        </p>
        <button className='flex bg-[#335f32] text-white w-fit cursor-pointer py-5 rounded-full px-16 text-[12px] h-full gap-4 justify-center items-center'>
          Create an Account
        </button>
      </div>
    </div>
  )
}
