//About.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import dayjs from "dayjs";
import axios from "axios";
import { Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);
  console.log(user);
  if (!user) return <div>Loading...</div>;
  return (
    <Layout>
      <Sider>
        <Navbar />
      </Sider>
      <Content>
        <div style={{ display: "flex", padding: "20px" }}>
          <div>
            <Avatar size={128} icon={<UserOutlined />} />
            <center>
              <p>Profile</p>
            </center>
          </div>

          <div style={{ paddingLeft: "50px", paddingTop: "20px" }}>
            <p>Name : {user.username}</p>
            <p>Email : {user.email}</p>
            <p>Create : {dayjs(user.createdAt).format("DD/MM/YYYY")}</p>
          </div>
        </div>
      </Content>
      <Space direction="vertical" size={16}></Space>
    </Layout>
  );
};

export default Profile;
