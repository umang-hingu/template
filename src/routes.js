import Dashboard from 'views/Dashboard/Dashboard.js';
import SignIn from 'views/Pages/SignIn.js';
import SignUp from 'views/Pages/SignUp.js';

import { HomeIcon, DocumentIcon, RocketIcon } from 'components/Icons/Icons';
import AboutUs from 'views/Dashboard/AboutUs';

var dashRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    rtlName: 'لوحة القيادة',
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: '/admin'
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    icon: <HomeIcon color="inherit" />,
    component: AboutUs,
    layout: '/admin'
  },
  {
    name: 'ACCOUNT PAGES',
    category: 'account',
    rtlName: 'صفحات',
    state: 'pageCollapse',
    views: [
      {
        path: '/signin',
        name: 'Sign In',
        rtlName: 'لوحة القيادة',
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: '/auth'
      },
      {
        path: '/signup',
        name: 'Sign Up',
        rtlName: 'لوحة القيادة',
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: '/auth'
      }
    ]
  }
];
export default dashRoutes;
