/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useContext, useEffect } from 'react'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { defaultMenu } from './routes'

import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { dashboardContext } from '../../context/Dashboard'
import { HiLogout } from 'react-icons/hi'
import Logo from '../../components/Logo'
import useAccessToken from '../../hooks/useAccessToken'
import useCurrentUser from '../../hooks/useCurrentUser'

const Sidebar = ({ show }) => {
  const { sidebarOpen, setSidebarOpen, isTablet, sidebarMinimized } =
    useContext(dashboardContext)
  const navigate = useNavigate()
  const sidebarRef = useRef()
  const { pathname } = useLocation()
  const sideMenu = defaultMenu

  useEffect(() => {
    if (isTablet) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isTablet])

  const overlayClicked = () => {
    setSidebarOpen(false)
  }
  const { removeAccessToken } = useAccessToken()
  const { removeCurrentUser } = useCurrentUser()

  useEffect(() => {
    isTablet && setSidebarOpen(false)
  }, [pathname])

  const Nav_animation = isTablet
    ? {
        open: {
          x: 0,
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -350,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
        minimize: {
          x: 0,
          width: '7.5rem',
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: '0rem',
          transition: {
            damping: 40,
          },
        },
        minimize: {
          width: '7.5rem',
          transition: {
            damping: 40,
          },
        },
      }
  const handleLogout = () => {
    localStorage.removeItem('token')
    removeAccessToken()
    removeCurrentUser()
    navigate('/')
  }

  return (
    <div className={`relative font-['Campton'] ${show ? 'block' : 'hidden'} `}>
      <div
        onClick={() => overlayClicked()}
        className={`lg:hidden fixed inset-0 max-h-screen z-20 cursor-pointer   ${
          sidebarOpen ? 'block' : 'hidden'
        } `}
      ></div>

      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        className={`${
          show ? 'block' : 'hidden'
        } shadow-sm border-r dark:border-0 min-h-full group text-black lg:z-[49] z-[91] w-[15rem] 
             fixed top-0 left-0 bg-gray-100
           h-screen  `}
      >
        {/* top bar */}

        <div className='flex flex-col z-40 h-full '>
          <ul className='whitespace-pre text-[1rem] flex flex-col overflow-x-hidden font-medium  scrollbar-thin scrollbar-thumb-transparent  group-hover:scrollbar-thumb-[#7D8084] scrollbar-track-transparent h-full px-2 pb-20'>
            {/* logo */}
            <div
              className={`flex flex-col bg-sidebarBg  ${
                sidebarMinimized && ' h-28'
              }`}
            >
              <div
                className={`w-full   flex-col gap-4 justify-center p-1 px-3 mb-16 items-center`}
              >
                <div
                  className={`mr-8 py-2  pt-4 cursor-pointer  ${
                    sidebarMinimized ? 'hidden' : 'block'
                  }`}
                >
                  <Logo />
                </div>
              </div>
            </div>
            {/* logo */}

            {sideMenu?.map((route, i) => (
              <Fragment key={i}>
                <div className='p-0'>
                  {!sidebarMinimized && route?.title && (
                    <small
                      className={`mx-[1.2rem]  font-light capitalize text-sm inline-block px-2 mb-2 font-['Campton'] ${
                        i === 0 ? 'pt-3' : 'pt-7'
                      }`}
                    >
                      {route.title}
                    </small>
                  )}

                  <li
                    className={` ${
                      sidebarMinimized &&
                      'border-b border-gray-800 py-0   hover:text-white '
                    }`}
                  >
                    <NavLink
                      to={route.route}
                      className={`group/navitem ${
                        sidebarMinimized
                          ? 'flex flex-col text-center uppercase justify-center hover:no-underline gap-1 cursor-pointer duration-300 font-medium text-gray-400'
                          : ' p-3 link flex gap-2'
                      }`}
                    >
                      <route.icon
                        size={sidebarMinimized ? 30 : 20}
                        className={`min-w-max group-hover/navitem:text-menuItemColor ${
                          sidebarMinimized && 'mx-auto'
                        }
    ${
      pathname === route.route?.toLocaleLowerCase()
        ? 'text-[#335f32]'
        : 'text-menuItemIcon'
    }`}
                      />
                      <span
                        className={`
    ${
      pathname === route.route?.toLocaleLowerCase()
        ? 'text-[#335f32]'
        : 'text-menuItemIcon'
    }`}
                      >
                        {route.name}
                      </span>
                    </NavLink>
                  </li>
                </div>
              </Fragment>
            ))}
          </ul>

          <div className='flex flex-col  gap-4 justify-center p-1 px-3 mb-16 items-center'>
            <div
              className={`py-2 uppercase flex gap-2 items-center w-full pl-8 text-red-500 text-tiny border-t cursor-pointer `}
              onClick={handleLogout}
            >
              <p className='text-[10px] font-bold'>Log out</p>

              <HiLogout className='text-red-500' />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar
