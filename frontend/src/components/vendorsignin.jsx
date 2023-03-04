import React, { useState } from "react";
import UserSignIn from "./userSignIn";
import "./vendorsign.css";
import VendorSignUp from "./vendorSignUp";
import axios from "axios";
import { useNavigate,} from "react-router-dom";

const VendorSignIn = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate()
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const [msg,setErrormsg]=useState("");
  const [msg2,setMsg2]=useState("");
  const handleCreateAccount = () => {
    setShowCreateAccountForm(true);
  };
  const handleSignUpSuccess = () => {
    setShowCreateAccountForm(false);
  };
  function handleSubmit(e) {
    e.preventDefault();

    if (!data.contact || !data.password) {
      setErrormsg("Kindly Fill all the details");
    }
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    axios.post("http://localhost:8080/login", data, config).then((res) => {
      console.log(res.data);
      if(res.data.message===201){
        setErrormsg("Contact does not exists kindly register")
        
      }
      
      // localStorage.setItem('token', res.data.jwt_token);

      if (res.data.jwt_token !== undefined) {
        navigate("/board")
      }


    }).catch((e)=>{
      if(e.response.data.status==="failed"){
        setMsg2("Password is incorrect");
      }
      
    })

  }
  return (
   <div className="main">
    <div id="div-main">
      <h2 id="main-logo">LOGO</h2>
      <div id="container">
        <div id="sub-container-1">
          <h1 id="side-heading">EVENT PROPOSAL PAGE</h1>
        </div>
        <div id="sub-container-2">
          <div className="container">
            <div className={`box ${showCreateAccountForm ? "expanded" : ""}`}>
              <input
                type="radio"
                class="tab-toggle"
                name="tab-toggle"
                id="tab1"
                checked
              />
              <input
                type="radio"
                className="tab-toggle"
                name="tab-toggle"
                id="tab2"
              />
              <ul className="tab-list">
                <li className="tab-item">
                  <label className="tab-trigger" for="tab1">
                    Vendor
                  </label>
                </li>
                <li className="tab-item">
                  <label className="tab-trigger" for="tab2">
                    User
                  </label>
                </li>
              </ul>
              <div className="tab-container">
                <div className="tab-content">
                  {showCreateAccountForm ? (
                    <VendorSignUp onSignUpSuccess={handleSignUpSuccess} />
                  ) : (
                    <form id="form-container">
                      <h4 id="form-heading">Sign in your Account</h4>
                      <span id="errMsg">{msg}</span>
                      <input
                        type="text"
                        placeholder="Phone"
                        id="vendor-contact"
                        onChange={(e) => setData({ ...data, contact: e.target.value },setErrormsg(""))}
                      />
                      <br />
                      <input
                        type="password"
                        placeholder="Password"
                        id="vendor-password"
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                      />
                      <br />
                      <span id="error-msg-2">{msg2}</span>
                      <span id="forget-password">Forget Password?</span>
                      <span id="create-account" onClick={handleCreateAccount}>
                        Create Account
                      </span>
                      <button type="submit" id="vendor-btn" onClick={handleSubmit}>
                        SIGN IN
                      </button>
                    </form>
                  )}
                </div>
                <div class="tab-content">
                  <UserSignIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> 
  );
};

export default VendorSignIn;
