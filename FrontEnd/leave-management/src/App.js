import './App.css';
import EmployeeHomePage from './pages/Employee/EmployeeHome';
import AdminHome from './pages/Admin/AdminHome';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


function App() {

  const route = createBrowserRouter([
   
   
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
      {/* <AdminHomePage/> */}
    </>
  );
}
 
export default App;
