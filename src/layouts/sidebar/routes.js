import { BiBarChart } from 'react-icons/bi'
export const defaultMenu = [
  // {
  //   title: '',
  //   name: 'Home',
  //   route: '/dashboard',
  //   // icon: HomeIcon,
  //   icon: RiHome2Line,
  //   withSubMenu: false,
  // },

  {
    title: '',
    name: 'Transactions',
    // routeMerge: true,
    // icon: TransIcon,
    icon: BiBarChart,
    withSubMenu: false,
    route: '/dashboard/transactions',
  },
]
