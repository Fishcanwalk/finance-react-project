import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/">Home</Link>, <PieChartOutlined />),
  getItem(<Link to="/FinanceScreen">Finance Screen</Link>, <FileOutlined />),
  getItem(<Link to="/Blog">Blogs</Link>, <DesktopOutlined />),
  getItem(<Link to="/About">Contact</Link>, <FileOutlined />),
];
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // return (
  //   <>
  //     <nav>
  //       <div>
  //         <div>
  //           <Link to="/">Home</Link>
  //         </div>
  //         <div>
  //           <Link to="/Blog">Blogs</Link>
  //         </div>
  //         <div>
  //           <Link to="/About">Contact</Link>
  //         </div>
  //         <div>
  //           <Link to="/About">About</Link>
  //         </div>
  //       </div>
  //     </nav>
  //     <Outlet />
  //   </>
  // );
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            position: "100px",
          }}
        />
      </Header>
    </Layout>
  );
};

export default Navbar;
