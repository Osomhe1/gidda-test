/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { dashboardContext } from '../context/Dashboard'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

function RootLayout() {
  const { sidebarOpen, sidebarMinimized, isTablet } =
    useContext(dashboardContext)

  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <div className=' duration-200 ease-in-out relative  overflow-clip'>
      <div className='flex w-full '>
        <div className=''>
          {isTablet && (
            <button
              className={`lg:hidden  absolute top-2 z-[99]  ${
                showSidebar ? 'left-[27%]' : 'left-10'
              }`}
              onClick={toggleSidebar}
              aria-label='Toggle Sidebar'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d={
                    showSidebar
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16m-7 6h7'
                  }
                />
              </svg>
            </button>
          )}
        </div>

        <Sidebar show={isTablet ? showSidebar : true} />
        <motion.div
          layout
          className={`w-full min-h-[93vh] ${
            sidebarMinimized
              ? 'lg:ml-[7.5rem]'
              : sidebarOpen
              ? 'lg:ml-64'
              : !sidebarMinimized && !sidebarOpen && 'lg:ml-0'
          }`}
        >
          <main
            className={`py-4 flex-1 z-1 mx-auto w-full overflow-clip
                          ${
                            sidebarOpen && !isTablet
                              ? ' w-[100%] lg:w-[100%] '
                              : ' max-w-[100%] sm:w-[72%] md:w-[100%] lg:w-[10%] '
                          }
                        
                        `}
          >
            <Outlet />
          </main>
        </motion.div>
      </div>
    </div>
  )
}

export default RootLayout
