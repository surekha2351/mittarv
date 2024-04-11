import { useState } from "react";

import "../styles/register.css"; 

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    window.location.href = "/Login";

    // Basic validation: check if email and password are provided
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Pass registered user's details to parent component
    onRegister({ email, password });
  };

  return (
    <div>
         <div className="center-box-container">
        <div className="center-box">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="confirm">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
      </div>
      </div>
    </div>
  );
};

export default Register;
