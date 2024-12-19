//About.js
import React from "react";
import Navbar from "../components/Navbar";
import { Layout } from "antd";
const { Header, Content, Footer, Sider } = Layout;
function About() {
  return (
    <Layout>
      <Sider>
        <Navbar />
      </Sider>
      <Content>
        <h1>This is a multi-page React App</h1>
      </Content>
    </Layout>
  );
}

export default About;
