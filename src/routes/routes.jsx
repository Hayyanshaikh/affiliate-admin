// ========= ADMIN FILES IMOPORT ============ //
import Tools from '../admin/pages/tools/Tools.jsx';
import AdminLayout from '../admin/layout/AdminLayout.jsx';
import Coupons from '../admin/pages/creatives/Coupons.jsx';
import Payments from '../admin/pages/payments/Payments.jsx';
import Login from '../admin/pages/authentication/Login.jsx';
import TextLinks from '../admin/pages/creatives/TextLinks.jsx';
import DeepLinks from '../admin/pages/creatives/DeepLinks.jsx';
import Dashboard from '../admin/pages/dashboard/Dashboard.jsx';
import Performance from '../admin/pages/reports/Performance.jsx';
import Transactions from '../admin/pages/reports/Transactions.jsx';
import Advertisers from '../admin/pages/advertisers/Advertisers.jsx';
import AdvertisersDetail from '../admin/pages/advertisers/AdvertisersDetail.jsx';

import Company from '../admin/pages/profile/Company.jsx';
import Website from '../admin/pages/profile/Website.jsx';
import LoginInfo from '../admin/pages/profile/LoginInfo.jsx';
import BasicInfo from '../admin/pages/profile/BasicInfo.jsx';
import BillingInfo from '../admin/pages/profile/BillingInfo.jsx';
import LoginHistory from '../admin/pages/profile/LoginHistory.jsx';
import ProfileLayout from '../admin/pages/profile/ProfileLayout.jsx';
import PaymentSettings from '../admin/pages/profile/PaymentSettings.jsx';

// ========= THEME FILES IMOPORT ============ //
import Home from '../theme/pages/Home.jsx';
import About from '../theme/pages/About.jsx';
import Contact from '../theme/pages/Contact.jsx';
import Services from '../theme/pages/Services.jsx';
import ThemeLayout from '../theme/layout/ThemeLayout.jsx';

// SET ROUTING
const routes = [
  // THEME ROUTES
  {
    path: "/",
    element: <ThemeLayout/>,
    children:[
      {
        index: true,
        element: <Home/>   
      },
      {
        path:"about",
        element: <About/>   
      },
      {
        path:"contact",
        element: <Contact/>   
      },
      {
        path:"services",
        element: <Services/>   
      }
    ]
  },
  // ADMIN ROUTES
  {
    path:"admin",
    element: <AdminLayout/>,
    children:[
      {
        index: true,
        path:"dashboard",
        element: <Dashboard/>   
      },
      {
        path:"login",
        element: <Login/>,
      },
      {
        path:"advertisers",
        children:[
          {
            path:":advertiser",
            element: <Advertisers/>
          },
          {
            path:":advertiser/:advertiserId",
            element: <AdvertisersDetail/>
          }
        ]
      },
      {
        path:"creatives",
        children:[
          {
            path:"coupons",
            element: <Coupons/>
          },
          {
            path:"text-links",
            element: <TextLinks/>
          },
          {
            path:"deep-links",
            element: <DeepLinks/>
          },
        ]
      },
      {
        path:"reports",
        children:[
          {
            path:"performance",
            element: <Performance/>
          },
          {
            path:"transactions",
            element: <Transactions/>
          },
        ]
      },
      {
        path:"tools",
        element: <Tools/>
      },
      {
        path:"payments",
        element: <Payments/>
      },
      {
        path: "profile",
        element: <ProfileLayout/>,
        children: [
          {
            index: true,
            path: "basic-information",
            element: <BasicInfo/>,
          },
          {
            path: "company",
            element: <Company/>,
          },
          {
            path: "website",
            element: <Website/>,
          },
          {
            path: "login-info",
            element: <LoginInfo/>,
          },
          {
            path: "billing-information",
            element: <BillingInfo/>,
          },
          {
            path: "payment-settings",
            element: <PaymentSettings/>,
          },
          {
            path: "login-history",
            element: <LoginHistory/>,
          },
        ],
      },
    ]
  },
  // ADMIN LOGIN
];

export default routes;
