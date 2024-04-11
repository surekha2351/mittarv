import { useState } from "react";
import "../styles/login.css"; 
const Login = ({ registeredUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = "/Home";
    // Check if the entered email and password match the registered user's details
    if (email === registeredUser.email && password === registeredUser.password) {
      console.log("Login successful");
      // Handle successful login (e.g., redirect to home page)
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
        <div className="center-box-container">
        <div className="center-box" >
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="label">
          <label >Email:</label>
          <input
            type="email"
            value={email}
            className="b"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="label">
          <label  >Password:</label>
          <input
            type="password"
            value={password}
            className="b"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      {error && <p>{error}</p>}
      </div>
    </div>
    </div>
  );
};

export default Login;
