import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Roadmap from "./Pages/Roadmap/Roadmap";
import Navbar from "./LargeComponents/Navbar/Navbar";
import Explore from "./Pages/Explore/Explore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen overflow-auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Roadmap/:id" element={<Roadmap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
