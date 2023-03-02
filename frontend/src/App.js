import './App.css';
import VendorSignIn from './components/vendorsignin';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import DashBoard from './components/dashboard';

function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<VendorSignIn/>}/>
          <Route path="/board" element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
