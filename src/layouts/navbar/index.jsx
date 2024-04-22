/* eslint-disable react/prop-types */
import { useContext } from 'react'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react'
import { MdMenu } from 'react-icons/md'
import { dashboardContext } from '../../context/Dashboard'

// import UserDropdown from '../components/UserDropdown'
import { Search } from 'lucide-react'
import { IoLogInOutline } from 'react-icons/io5'
import Logo from '../../components/Logo'

// const Navbar = ({ onNotificationClick, isOpen, showRightSidebar }) => {
const NavbarHeader = ({ onNotificationClick }) => {
  const { toggleSideBar, sidebarOpen, sidebarMinimized } =
    useContext(dashboardContext)
  // minimized sidebar was omitted for now!

  return (
    <>
      <div
        className={`right-0 left-0 p-2 shadow-md z-20 sticky top-0  bg-stone-200`}
      >
        <div className='px-3 py-1 '>
          <div className='flex items-center bg-stone-200 justify-between'>
            <Navbar
              className='bg-stone-200'
              classNames={{
                item: [
                  'flex',
                  'relative',
                  'h-full',
                  'items-center',
                  "data-[active=true]:after:content-['']",
                  'data-[active=true]:after:absolute',
                  'data-[active=true]:after:bottom-0',
                  'data-[active=true]:after:left-0',
                  'data-[active=true]:after:right-0',
                  'data-[active=true]:after:h-[2px]',
                  'data-[active=true]:after:rounded-[2px]',
                  'data-[active=true]:after:bg-primary',
                ],
              }}
            >
              <NavbarBrand>
                <Logo />
              </NavbarBrand>
            </Navbar>
            <Navbar className='bg-stone-200'>
              <NavbarContent justify='center'>
                <NavbarItem isActive aria-current='page'>
                  <Link href='/'>Home</Link>
                </NavbarItem>
                <NavbarItem>
                  <Link href='#'>Properties</Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color='foreground' href='#'>
                    Developers
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color='foreground' href='#'>
                    Banks
                  </Link>
                </NavbarItem>
              </NavbarContent>
            </Navbar>

            <Navbar className='bg-stone-200'>
              <NavbarContent justify='end'>
                <NavbarItem>
                  <Button
                    as={Link}
                    className='bg-[#335f32] rounded-full hover:bg-[#1f3d1e] text-white'
                    href='/login'
                    variant='flat'
                    endContent={<IoLogInOutline size={24} />}
                  >
                    Login
                  </Button>
                </NavbarItem>
              </NavbarContent>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarHeader
