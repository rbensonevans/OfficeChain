import Login from "./components/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {

const {user} = useContext(AuthContext)

// see the video at 1:32:10 for additional login changes.
  return (
<Router>
      <Routes>
        <Route path="/login" caseSensitive={false} element={<Login />} />
        <Route path="/register" caseSensitive={false} element={<Register />} />
        <Route path="/" caseSensitive={false} 
          element={user ? <Home /> : <Register/>} />
        <Route path="/home" caseSensitive={false} element={<Home />} />
        <Route path="/profile" caseSensitive={false} element={<Profile />} />
      </Routes>
    </Router>   
  )  
}

export default App;
