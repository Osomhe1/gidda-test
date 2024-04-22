/* eslint-disable react/prop-types */
import { PiWarningCircle } from 'react-icons/pi'

const Card = ({ title, text }) => {
  return (
    <div className='wsm w-full w60 rounded-md overflow-hidden shadow-md relative p-4 bg-white'>
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
