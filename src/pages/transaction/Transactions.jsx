import { AnimatePresence, motion } from 'framer-motion'
import { Tab, Tabs } from '@nextui-org/tabs'
import { useState } from 'react'
import OverViewCard from './OverViewCard'
import SuccessfulTransaction from './SuccessfulTransaction'
import ExpectedTransaction from './ExpectedTransaction'
import DefaultTransaction from './DefaultTransaction'

export default function Transactions() {
  const [selected, setSelected] = useState('summary')

  return (
    <div>
      <div className='w-full  p-3 flex-col justify-start items-start gap-3 inline-flex'>
        <div className='flex justify-between w-full items-center'>
          <div className='py-2'>
            <h1 className='font-bold text-lg md:text-4xl'>Transaction</h1>
            <p className='text-stone-500 text-sm mt-2 '>
              View all your transactions and how much you have earned from
              customers
            </p>
          </div>
          <div className='bg-[#335f32] relative w-12 h-12 justifycenter lg:px-1 rounded-full flex items-center'>
            <svg
              fill='none'
              height={24}
              viewBox='0 0 24 24'
              width={24}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                clipRule='evenodd'
                d='M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z'
                fill='#fff'
                fillRule='evenodd'
              />
            </svg>
            <span className='bg-white absolute text-center right-1 lg:right-2 top-2 text-[#335f32] rounded-full w-4 h-4 text-[10px]  '>
              2
            </span>
          </div>
        </div>
        <div className='self-stretch grow  shrink basis-0 flex-col justify-start items-start gap-4 flex'>
          <div className='self-stretch flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch border-b overflow-auto borderstone-900 justify-between items-center inline-flex'>
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
                        tabList: '  bordered  p-0',
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
                <DefaultTransaction />
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
                <ExpectedTransaction />
              </motion.div>
            )}
            {selected === 'successful transaction' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className=' w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <SuccessfulTransaction />
              </motion.div>
            )}
            <div className='pt-4 w-full'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
