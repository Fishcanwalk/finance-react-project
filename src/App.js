import "./App.css";
import axios from "axios";
import LoginScreen from "./LoginScreen";
import FinanceScreen from "./FinanceScreen";
import { useState } from "react";

axios.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "http://localhost:1337";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      </header>
    </div>
  );
}
export default App;
