import React from 'react';
import {Routes,Route,useRoutes} from "react-router-dom";
import Dashboard from "./dashboard";

import LoginPage from './login';
import SignupPage from "./SignupPage"
import Welcome from './welcome';
import Management from './management';
import Setting from './setting';
import Support from './support';
import ProtectedRoute from './files/protectedRoute';

// React, JS
function App() {
 
  const routes = useRoutes([
    {path:'/',element:<Welcome/>},
    {path:'/login',element:<LoginPage/>},
    {path:'/signup',element:<SignupPage/>},
    {path:'/dashboard',element:< ProtectedRoute page = { <Dashboard/> } />,children : [
    {path: 'management', element: <Management/> },
    {path: 'settings', element: <Setting/>},
    {path: 'support', element: <Support/>}]
  },
  //   {path:'/login',element:<LoginPage/>},
  //   {path:'/signup',element:<SignupPage/>}
   ])
//  HTML
//  return (<>
//   {/* <Routes>
//       * <Route path='dashboard' element={<Welcome/>}/>
//       <Route path='' element={<Dashboard/>}  />
//       <Route path='/login' element={<LoginPage/>}  />
//       <Route path='/signup' element={<SignupPage/>}  />
      
  
      
//    </Routes>
//    */}
//   </>);
// ----------------------------------------------------
  return routes;
}

export default App;