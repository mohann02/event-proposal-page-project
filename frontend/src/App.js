import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import DashBoard from './components/dashboard';
// // import ProposalsForm from './components/VenderProposals/ProposalsForm';
// import ProposalsData from "./components/VenderProposals/ProposalsData"
// import ProposalsForm from './components/VenderProposals/ProposalsForm';

import VendorSignIn from './components/vendorsignin';
import Home from './components/Home'
import Venue from './components/Venue';

// import Header from './components/header/header';
function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
          {/* <Route path="/" element={<ProposalsForm/>}/> */}
          {/* <Route path="/proposals" element={<ProposalsData/>}/> */}
       
          <Route path="/" element={<VendorSignIn/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/venue" element={<Venue/>}/>


      </Routes>
    </BrowserRouter>
   {/* <ProposalsData/> */}
  </div>
  );
}

export default App;
