import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth";
import Signup from "./pages/auth/signup";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-account" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
