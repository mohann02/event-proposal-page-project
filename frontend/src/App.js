import React from 'react';
// import UserSignin from './signin/UserSignin';
// import UserSignUp from './signup/UserSignup';
// import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import VendorSignIn from './components/Vendorsignin';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<VendorSignIn/>}/>
        {/* <Route path="/board" element={<DashBoard/>}/> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App

