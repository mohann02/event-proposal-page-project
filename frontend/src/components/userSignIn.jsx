import React from "react";
// import { Link } from "react-router-dom";
import "./vendorsignup.css";

const UserSignIn = (props) => {
  return (
    <div>
      <form id="form-container">
        <h4 id="form-heading">Sign in your Account</h4>
        <input type="text" placeholder="Phone" id="vendor-contact"/>
        <br />
        <input type="password" placeholder="Password" id="vendor-password" />
        <br />
        <span id="forget-password">Forget Password?</span>
        <span id="create-account">Create Account</span>
        <button type="submit" id="vendor-btn">
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default UserSignIn;
