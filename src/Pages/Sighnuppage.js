import React, { useState } from "react";
import Header from "../Components/Common/Header/index";
import InputComponent from "../Components/Common/Input/index.js";
import Button from "../Components/Common/Button/index.js";
import SignupForm from "../Components/SighnupComponents/SighnUpForm.js/index";
import LoginForm from "../Components/SighnupComponents/Loginform";

function SignUpPage() {
  const [flag, setFlag] = useState(false);

  return (
    <div>
      <Header />
      <div className="input-wrapper">
        {!flag ? <h1>Signup</h1> : <h1>Login</h1>}
        {!flag ? <SignupForm /> : <LoginForm />}
        {!flag ? (
          <p style={{ cursor: "pointer" }} onClick={() => setFlag(!flag)}>
            Already have an Account? Click here to Login.
          </p>
        ) : (
          <p style={{ cursor: "pointer" }} onClick={() => setFlag(!flag)}>
            Don't have an account? Click here to signup.
          </p>
        )}
      </div>
    </div>
  );
}

export default SignUpPage;
