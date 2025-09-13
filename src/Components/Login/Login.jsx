import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
// import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // mandar para o banco de dados os dados..
    alert("DADOS PARA O DB => \n email: " + email + "\nsenha: " + password);
  };

  return (
    <div id="site">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1 id="logo">Synapse.</h1>
          <div className="input-field">
            <FaEnvelope className="icon-env" />
            <label>
              Email
              <input
                id="email"
                type="email"
                placeholder="Enter your @email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="input-field">
            <FaLock className="icon-lock" />
            <label>
              Password
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                onChange={(p) => setPassword(p.target.value)}
              />
            </label>
          </div>
          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot my password</a>
          </div>
          <button>Login</button>
          <div className="signup-link">
            <p>
              Don't have an account? <a href="#">Register here</a>
            </p>
          </div>
        </form>
      </div>
      <div id="KYWF">
        <span>
          <p>
            Know Your World, <strong>Faster.</strong>
          </p>
        </span>
      </div>
    </div>
  );
};

export default Login;
