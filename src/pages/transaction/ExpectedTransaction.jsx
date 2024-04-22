import { useGetSummery } from '../../api/transactionApi'
import Card from './components/Card'
import ExpectedTable from './components/ExpectedTable'

export default function ExpectedTransaction() {
  const { data: showSummary } = useGetSummery()

  return (
    <div>
      <div className='py-2 grid w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <Card
          title={showSummary?.expectedNumberOfTransactions}
          text='Expexted Transactions'
        />
      </div>
      <div className='w-[98%] '>
        <ExpectedTable />
      </div>
    </div>
  )
}
