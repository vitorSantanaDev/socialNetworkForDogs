import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import User from "./pages/User/User";
import { UserStorage } from "./context/useContext.js";
import ProtectedRoute from "./Components/Helper/ProtectedRoute/ProtectedRoute";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./pages/User/UserProfile/UserProfile"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="account/*" element={<User />} />
            <Route path="photo/:id" element={<Photo />} />
            <Route path="profile/:user" element={<UserProfile />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
