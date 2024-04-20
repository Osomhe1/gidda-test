/* eslint-disable react/prop-types */
import { PiWarningCircle } from 'react-icons/pi'

const Card = ({ title, text }) => {
  return (
    <div className='max-wsm wfull w-64 rounded-md overflow-hidden shadow-lg relative p-4 bg-white'>
      {/* <div className='absolute top-2 right-2 text-gray-500 text-xl'>{Icon}</div> */}
      <div className=' flex justify-end text-black text-xl'>
        <PiWarningCircle />
      </div>
      <div className='px-6 py-2'>
        <div className='font-bold text-xl mb-1 text-center'>{title}</div>

        <p className='text-gray-700 text-[12px] capitalize text-center'>
          {text}
        </p>
      </div>
    </div>
  )
}

export default Card
