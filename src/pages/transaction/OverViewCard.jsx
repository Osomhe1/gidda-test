/* eslint-disable react/prop-types */
import { useGetSummery } from '../../api/transactionApi'
import Card from './components/Card'

export default function OverViewCard() {
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
      <div className='self-stretch p-6 flex-col justify-center items-start gap-6 flex'>
        <div className=' w-full'>
          <div className='capitalize'>earning breakdown</div>
          <div className='grid w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <Card
              title={
                <EarningsDisplay earnings={showSummary?.expectedEarnings} />
              }
              text='expected earnings'
            />
            <Card
              title={<EarningsDisplay earnings={showSummary?.totalEarned} />}
              text='total Earned'
            />
            <Card
              title={<EarningsDisplay earnings={showSummary?.leftToEarn} />}
              text='left To Earn'
            />
            <Card
              title={
                <EarningsDisplay earnings={showSummary?.averageAmountEarned} />
              }
              text='average Amount Earned'
            />
          </div>
        </div>
        <div className='w-full'>
          <div className='capitalize'>Frequency breakdown</div>
          <div className='grid w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <Card
              title={showSummary?.expectedNumberOfTransactions}
              text='expected Number Of Transactions'
            />
            <Card
              title={showSummary?.totalTransactions}
              text='total Transactions'
            />
            <Card
              title={showSummary?.numberOfTransactionsLeft}
              text='number Of Transactions Left'
            />
            <Card
              title={showSummary?.averageMonthlyTransactions}
              text='average Monthly Transactions'
            />
          </div>
        </div>
        <div className='w-full'>
          <div className='capitalize'>default breakdown</div>
          <div className='grid w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <Card
              title={showSummary?.totalMissedTransactions}
              text='missed payment'
            />
            <Card
              title={showSummary.transactionDefaultRate?.toFixed(0) + '%'}
              text='transaction Default Rate'
            />
            <Card
              title={formattedTitle}
              text='totalApplications With Missed Transactions'
            />
          </div>
        </div>
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
