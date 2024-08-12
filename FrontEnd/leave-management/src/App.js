import './App.css';
import EmployeeHomePage from './pages/Employee/EmployeeHome';
import AdminHome from './pages/Admin/AdminHome';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './pages/User/Login'
import Signup from './pages/User/Signup';
import Profile from './pages/Employee/Profile';
import AdmProfile from './pages/Admin/AdmProfile';



function App() {

  const route = createBrowserRouter([
   
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/Signup',
      element:<Signup/>
    },
    {
      path:'/Admin',
      element:<AdminHome/>
    },
    {
      path:'/Employee/:username',
      element:<EmployeeHomePage/>
    },
    {
      path:'/EmpProfile/:username',
      element:<Profile />
    },
    {
      path:'/AdProfile/:username',
      element:<AdmProfile />
    },
  ])

  return (
    <>
      <RouterProvider router={route}/>
      
    </>
  );
}
 
export default App;
