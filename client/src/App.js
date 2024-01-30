import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat";
import Logo from './img/LogoName.png';
import NavIcons from "./components/NavIcons/NavIcons";
function App() {
  const user = useSelector((state) => state.authReducer.authData);
 
  
  return (
    <div
      className="App"
      style={{
        height:
          window.location.href === "chatsphere.com"
            ? "calc(100vh - 2rem)"
            : "auto",
      }}
    >
      {user && (
        <div className="Navbar">
          <img className="Logoicon" src={Logo} alt="Logo" />
          <ul className="NavIcon-cont">
            <NavIcons />
          </ul>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
