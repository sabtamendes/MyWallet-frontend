import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import UserContext from "./contexts/UserContext";
import SignIn from "./components/Sign-in/SignIn";
import SignUp from "./components/Sign-up/SignUp";
import Registries from "./components/Registries/Registries";
import NewEnter from "./components/Registries/NewEnter";
import NewOut from "./components/Registries/NewOut";
import EditEnter from "./components/Registries/EditEnter";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(undefined);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/registros" element={<Registries />} />
          <Route path="/novaentrada" element={<NewEnter />} />
          <Route path="/novasaida" element={<NewOut />} />
          <Route path="/editarentrada" element={<EditEnter />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
