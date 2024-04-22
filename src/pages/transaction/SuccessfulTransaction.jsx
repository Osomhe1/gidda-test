import { useGetSuccessFulTransaction } from '../../api/transactionApi'
import Card from './components/Card'
import SuccessTable from './components/SuccessTable'

export default function SuccessfulTransaction() {
  const { data: successTransaction } = useGetSuccessFulTransaction()

  return (
    <div>
      <div className='py-2 grid w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <Card
          title={successTransaction?.length}
          text='Successful Transactions'
        />
      </div>
      <div className='w-[98%]'>
        <SuccessTable />
      </div>
    </div>
  )
}
