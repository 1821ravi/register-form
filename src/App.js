import Home from "./Components/Pages/Home";
import Navbar from "./Components/Pages/Navbar";
import AddUser from "./Components/User/AddUser";
import EditUser from "./Components/User/EditUser";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/users/adduser" element={<AddUser />} />
          <Route  path="/users/edituser/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
