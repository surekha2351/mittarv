import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Home } from "./pages/Home";

const App = () => {
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleRegister = (user) => {
    setRegisteredUser(user);
  };

  return (
    <Router>
      <Navbar />
      <div className="body">
        <Routes>
          <Route path="/Login" element={<Login registeredUser={registeredUser} />} />
          <Route path="/Register" element={<Register onRegister={handleRegister} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Recipes" element={<Recipes />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
