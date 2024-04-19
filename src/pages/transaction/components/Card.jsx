/* eslint-disable react/prop-types */
import { PiWarningCircle } from 'react-icons/pi'

const Card = ({ title, text }) => {
  return (
    <div className='max-wsm w-full rounded overflow-hidden shadow-lg relative p-4 bg-white'>
      {/* <div className='absolute top-2 right-2 text-gray-500 text-xl'>{Icon}</div> */}
      <div className='absolut flex justify-end top-2 right-2 text-gray-500 text-xl'>
        <PiWarningCircle />
      </div>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-1 text-center'>{title}</div>
        <p className='text-gray-700 text-[12px] text-center'>{text}</p>
      </div>
    </div>
  )
}

export default Card
