import Login from "../login/Login";
import Register from "../register/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Dashboard from "../Api/Dashboard"

function App() {
  return (
    <div className="App" id="light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
           <Route path="/register" element={<Register />} /> 
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
