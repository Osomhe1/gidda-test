import { useGetSuccessFulTransaction } from '../../api/profileApis'
import Card from './components/Card'
import SuccessTable from './components/SuccessTable'

export default function SuccessfulTransaction() {
  const { data: showSummary } = useGetSuccessFulTransaction()


  return (
    <div>
      <div className='py-2'>
        <Card title={showSummary?.length} text='Successful Transactions' />
      </div>
      <div className='w-[80%] '>
        <SuccessTable />
      </div>
    </div>
  )
}
