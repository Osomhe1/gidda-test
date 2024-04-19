/* eslint-disable react/prop-types */
import { useGetSummery } from '../../api/profileApis'
import Card from './components/Card'

export default function OverViewCard() {
  const { data: showSummary } = useGetSummery()

  console.log(showSummary, 'showSummary')
  return (
    <div>
      <div className='self-stretch  p-6 flex-col justify-center items-start gap-6 flex'>
        <div className='capitalize'>earning breakdown</div>
        <div className='flex flex-wrap gap-4'>
          <Card
            title={<EarningsDisplay earnings={showSummary?.expectedEarnings} />}
            text='expected earnings'
          />
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
