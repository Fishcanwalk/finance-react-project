import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  ApiOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { Breadcrumb, Flex, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <Link to="/">
      <HomeOutlined style={{ marginRight: "10px" }} />
      Home
    </Link>
  ),
  getItem(
    <Link to="/Profile">
      <UserOutlined style={{ marginRight: "10px" }} />
      Profile
    </Link>
  ),
  getItem(
    <Link to="#DashBoard">
      <DesktopOutlined style={{ marginRight: "10px" }} />
      Dashboard
    </Link>,
    <FileOutlined />
  ),
  getItem(
    <Link to="/ShowFinance">
      <ReconciliationOutlined style={{ marginRight: "10px" }} />
      Show Finance
    </Link>
  ),

  getItem(
    <Link to="#Logout">
      <ApiOutlined style={{ marginRight: "10px" }} />
      Logout
    </Link>
  ),
];
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ minHeight: "100vh" }}
      >
        <div
          className="demo-logo-vertical"
          // style={{ display: "flex", flexDirection: "row" }}
        />

        <Menu
          style={{ paddingTop: "20px" }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      {/* <Header
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
      </Header> */}
    </Layout>
  );
};

export default Navbar;
