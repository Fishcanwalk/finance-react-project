import "./App.css";
import axios from "axios";
import LoginScreen from "./LoginScreen";
import FinanceScreen from "./pages/FinanceScreen";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Layout } from "antd";
const { Header, Content, Footer, Sider } = Layout;

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
          </Layout>
        </div>
      )}
    </>
  );
}
export default App;
