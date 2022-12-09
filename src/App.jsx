import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import CreateRoadmap from "./Pages/CreateRoadmap/CreateRoadmap";
import Navbar from "./LargeComponents/Navbar/Navbar";
import Explore from "./Pages/Explore/Explore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Homepage />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CreateRoadmap" element={<CreateRoadmap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
