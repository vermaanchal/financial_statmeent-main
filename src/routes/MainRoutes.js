
// project import
import MainLayout from 'layout/MainLayout';
import Login from 'pages/authentication/Login';
import TableComponent from 'pages/extra-pages/Cutomer/customerDetail';
import FinancialDetail from 'pages/extra-pages/Cutomer/customerDetail';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    // {
    //   path: '/',
    //   element: <Login />
    // },
    {
      path: '/',
      element: < TableComponent />
    },
   
  
  ]
};

export default MainRoutes;
