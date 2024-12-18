import "./App.css";
import axios from "axios";
import LoginScreen from "./LoginScreen";
import ShowFinance from "./pages/ShowFinance";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Layout } from "antd";
import { Link, useNavigate, Redirect, Navigate } from "react-router-dom";
import FinanceScreen from "./pages/EditFinancePage";
const { Header, Content, Footer, Sider } = Layout;

axios.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "http://localhost:1337";

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {isAuthenticated ? (
        // <FinanceScreen />
        <Navigate to="/ShowFinance" />
      ) : (
        <div>
          <Layout>
            <Sider>
              <Navbar />
            </Sider>
            <Content>
              <body className="App-header App">
                <LoginScreen onLoginSuccess={handleLoginSuccess} />
              </body>
            </Content>
            <Footer></Footer>
          </Layout>
        </div>
      )}
    </>
  );
}
export default App;
