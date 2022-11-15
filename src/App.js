import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import UserContext from "./contexts/UserContext";
import SignIn from "./components/Sign-in/SignIn";
import SignUp from "./components/Sign-up/SignUp";
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
      </Routes>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
