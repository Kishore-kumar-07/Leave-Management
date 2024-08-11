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
<<<<<<< HEAD
      path:'/Employee/:username',
      element:<EmployeeHomePage/>
    }
=======
      path:'/Employee',
      element:<EmployeeHomePage/>,
    },


>>>>>>> 6b2e1dd700d576153a6bd3412ed8ab7991367c82
  ])

  return (
    <>
      <RouterProvider router={route}/>
      
    </>
  );
}
 
export default App;
