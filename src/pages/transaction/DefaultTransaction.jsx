/* eslint-disable react/prop-types */
import { useGetSummery } from '../../api/transactionApi'
import Card from './components/Card'
import DefaultTable from './components/DefaultTable'

export default function DefaultTransaction() {
  const { data: showSummary } = useGetSummery()

  const formattedTitle = (
    <>
      <span style={{ color: 'red' }}>
        {showSummary?.totalApplicationsWithMissedTransactions?.toLocaleString()}
      </span>
      {' of '}
      {showSummary?.totalApplicationsInTransactions}
    </>
  )

  return (
    <div>
      <div className='grid w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <Card
          title={<EarningsDisplay earnings={showSummary?.expectedEarnings} />}
          text='expected earnings'
        />
        <Card
          title={
            <EarningsDisplay
              earnings={showSummary?.totalMissedTransactionsAmount}
            />
          }
          text='Total default amount'
        />
        <Card
          title={showSummary?.totalMissedTransactions}
          text='missed payment'
        />
        <Card
          title={formattedTitle}
          text='totalApplications With Missed Transactions'
        />
      </div>
      <div className='w-[98%] '>
        <DefaultTable />
      </div>
    </div>
  )
}

const EarningsDisplay = ({ earnings }) => {
  const formatEarnings = (value) => {
    return Math.round(value).toLocaleString('en-US')
  }

  return (
    <div>
      <p>N{formatEarnings(earnings)}</p>
    </div>
  )
}
