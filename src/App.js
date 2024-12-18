import "./App.css";
import axios from "axios";
import LoginScreen from "./LoginScreen";
import FinanceScreen from "./FinanceScreen";
import { useState } from "react";
import Navbar from "./components/Navbar";

axios.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "http://localhost:1337";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {isAuthenticated ? (
        <FinanceScreen />
      ) : (
        <div className="App">
          <Navbar />
          <body className="App-header">
            <LoginScreen onLoginSuccess={handleLoginSuccess} />
          </body>
        </div>
      )}
    </>
  );
}
export default App;
