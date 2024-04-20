import { Chip } from '@nextui-org/react'
import { IoIosHelpCircleOutline } from 'react-icons/io'

const FloatingChip = () => {
  return (
    <div className='fixed bottom-4 right-20 transform -translate-x1/2 py-2 px-4 rounded-full shadow-md z-10'>
      <Chip
        startContent={<IoIosHelpCircleOutline size={18} />}
        className='uppercase'
        classNames={{
          base: 'bg-white',
          content: 'drop-shadow shadow-black',
        }}
        size='sm'
      >
        help & support
      </Chip>
    </div>
  )
}

export default FloatingChip
