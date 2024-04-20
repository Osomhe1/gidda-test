import { AnimatePresence, motion } from 'framer-motion'
import { Tab, Tabs } from '@nextui-org/tabs'
import { useState } from 'react'
import OverViewCard from './OverViewCard'
import EarnViewCard from './EarnViewCard'
import OrdersViewCard from './OrdersViewCard'
import SuccessfulTransaction from './SuccessfulTransaction'

export default function Transactions() {
  const [selected, setSelected] = useState('summary')

  return (
    <div>
      <div className='w-full p-3 flex-col justify-start items-start gap-3 inline-flex'>
        <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
          <div className='self-stretch flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch border-b  borderstone-900 justify-between items-center inline-flex'>
              <div className='justify-start items-center gap-[11px] flex'>
                <AnimatePresence mode='wait'>
                  <div className='flex flex-col w-full'>
                    <Tabs
                      fullWidth
                      size='sm'
                      aria-label='Tabs form'
                      selectedKey={selected}
                      onSelectionChange={setSelected}
                      variant='underlined'
                      classNames={{
                        tabList: '  bordered  py-2',
                        cursor: ' bg-[#335f32]',
                        selectedKey: 'text-green-400',
                        tabContent:
                          'group-data-[selected=true]:text-[#335f32] ',
                      }}
                      className="text-center text-[#335f32] text-[12.83px] font-bold font-['Campton']"
                      color='secondary'
                    >
                      <Tab
                        key='summary'
                        className=" text-zinc-200 uppercase text-[10.83px] font-bold font-['Campton']"
                        title='summary'
                      ></Tab>
                      <Tab
                        key='default'
                        className=" text-zinc-200  uppercase text-[10.83px] font-bold font-['Campton']"
                        title='default'
                      ></Tab>
                      <Tab
                        key='expected transaction'
                        title='expected transaction'
                        className=" text-zinc-200 uppercase text-[10.83px] font-bold font-['Campton']"
                      ></Tab>
                      <Tab
                        key='successful transaction'
                        title='successful transaction'
                        className=" text-zinc-200 uppercase text-[10.83px] font-bold font-['Campton']"
                      ></Tab>
                    </Tabs>
                  </div>
                </AnimatePresence>
              </div>
            </div>

            {selected === 'summary' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <OverViewCard />
              </motion.div>
            )}
            {selected === 'default' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <EarnViewCard />
              </motion.div>
            )}
            {selected === 'expected transaction' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <OrdersViewCard />
              </motion.div>
            )}
            {selected === 'successful transaction' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <SuccessfulTransaction />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
