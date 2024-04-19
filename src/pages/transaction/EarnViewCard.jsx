import { Button } from '@nextui-org/button'
import { ExternalLinkIcon } from 'lucide-react'
import { IoAdd } from 'react-icons/io5'
import SelectPaymentmodal from './components/SelectPaymentmodal'
import { useDisclosure } from '@nextui-org/react'
import { useFetchBallance } from '../../api/walletApi'
import { useGetSummery } from '../../api/profileApis'

export default function EarnViewCard() {
  const { data: showSummary } = useGetSummery()

  console.log(showSummary, 'showSummary')

  return (
    <div>
      <div className='self-stretch  p-6 flex-col justify-center items-start gap-6 flex'>
        <div className='self-stretch  flex-col justify-start items-start gap-[18px] flex'>
          <div className='self-stretch flex-col justify-start items-center gap-3 flex'></div>
        </div>
      </div>
    </div>
  )
}
