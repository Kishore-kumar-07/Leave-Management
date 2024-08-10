import './App.css';
import EmployeeHomePage from './pages/Employee/EmployeeHome';
import AdminHome from './pages/Admin/AdminHome';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './pages/User/Login'
import Signup from './pages/User/Signup';



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
      path:'/Employee',
      element:<EmployeeHomePage/>
    }
  ])

  return (
    <>
      <RouterProvider router={route}/>
      
    </>
  );
}
 
export default App;
