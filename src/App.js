import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import UserContext from "./contexts/UserContext";
import SignIn from "./components/Sign-in/SignIn";
import SignUp from "./components/Sign-up/SignUp";
import Registries from "./components/Registries/Registries";
import NewEnter from "./components/Registries/NewEnter";
import { useState } from "react";

function App() {
  const [loginResponse, setLoginResponse] = useState(undefined);
  return (
    <UserContext.Provider value={{ loginResponse, setLoginResponse }} >
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn loginResponse={loginResponse} setLoginResponse={setLoginResponse}/>} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/registros" element={<Registries />} />
        <Route path="/novaentrada" element={<NewEnter />} />
      </Routes>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
