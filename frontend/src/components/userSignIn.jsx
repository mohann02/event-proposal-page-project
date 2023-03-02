import React, { useState } from "react";
import "./usersignin.css";
import UserSignUp from "./userSignUp";
import { useNavigate,} from "react-router-dom";
import axios from "axios";


const UserSignIn = () => {
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const navigate = useNavigate()
  const [data, setData] = useState({});
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
      return alert("Kindly Fill all the details");
    }
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    axios.post("http://localhost:8080/userLogin", data, config).then((res) => {
      console.log(res.data);
      
      
      localStorage.setItem('token', res.data.jwt_token);

      if (res.data.jwt_token !== undefined) {
        navigate("/board")
      }
      if(res.data.status==="failed"){
        setErrormsg("Contact does not exists kindly register");
      }  

    }).catch((e)=>{
      if(e.response.data.status==="failed"){
        setMsg2("Password is incorrect");
      }
    })
  }

  return (
    <div className={`box1 ${showCreateAccountForm ? "expanded1" : ""}`}>
        {showCreateAccountForm ? (
          <UserSignUp onSignUpSuccess={handleSignUpSuccess} />
        ) : (
          <div>
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
                        onChange={(e) => setData({ ...data, password: e.target.value },setErrormsg(""))}
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
          </div>
        )}
    </div>
  );
};

export default UserSignIn;
