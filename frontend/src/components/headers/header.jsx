import React,{useState} from "react";
import "./header.css";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  const [showLogout, setShowLogout] = useState(false);
  // const [vendername, setVendername] = useState('');

 

    // Send GET request to server-side API with JWT in the Authorization header
    
//   useEffect(()=>{
//   fetch("http://localhost:8080/vendorDetails")
//   .then(res=>res.json())
//   .then(data=>setVenderName(data))
//   .catch(err=>{
//       return(err)
//   })
// })
  const handleAvatarClick = () => {
    setShowLogout(!showLogout);
  };
  const handleLogoutClick = () => {
    localStorage.removeItem("token"); // Remove the token from the local storage
    window.location.href = "/"; // Redirect the user to the login page
  };



  return (
    <>
      <section className="icons-container">
        <h1>LOGO</h1>
        <section className="vender-box">
          <span>VenderName</span>
          <span>
            {" "}
            <FaUserCircle onClick={handleAvatarClick} style={{cursor:"pointer"}} size={35}/>
          </span>
          {showLogout && <button onClick={handleLogoutClick}>Logout</button>}
        </section>
      </section>
    </>
  );
};
export default Header;
