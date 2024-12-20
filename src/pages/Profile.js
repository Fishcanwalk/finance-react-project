//About.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import dayjs from "dayjs";
import axios from "axios";
import { Layout } from "antd";
import { StepForwardOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Button, Flex } from "antd";
import { Link } from "react-router-dom";
import EditProfile from "../components/EditProfile";
import create from "@ant-design/icons/lib/components/IconFont";
const { Header, Content, Footer, Sider } = Layout;
const Profile = () => {
  const [user, setUser] = useState({});
  const [openEdit, setOpenEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openForm = () => {
    setOpenEdit(true);
  };

  const closeForm = () => {
    setOpenEdit(false);
  };

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("api/users/me");
      setUser(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleEditItem = async (item) => {
    try {
      setIsLoading(true);
      const response = await axios.put("/api/user/me", item);
      fetchItems();
      const { id, firstname, lastname, username, email } = response.data;
      console.log("respone", response.data);
      setUser([
        {
          id: id,
          key: id,
          firstname: firstname,
          lastname: lastname,
          username: username,
          email: email,
        },
      ]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(user);
  if (!user) return <div>Loading...</div>;
  return (
    <Layout>
      <Sider>
        <Navbar />
      </Sider>
      <Content>
        <div
          style={{ padding: "20px", margin: "50px" }}
          className="profile-page"
        >
          <center>
            <div>
              <Avatar size={128} icon={<UserOutlined />} />
              <p>Profile</p>
            </div>
          </center>

          <div style={{ paddingLeft: "50px" }}>
            <p>Firstname : {user.firstname}</p>
            <p>Lastname : {user.lastname}</p>
            <p>username : {user.username}</p>
            <p>Email : {user.email}</p>
            <p>Create : {dayjs(user.createdAt).format("DD/MM/YYYY")}</p>
            <Flex justify="flex-end">
              <Button onClick={openForm}>Edit</Button>
            </Flex>
          </div>
          {openEdit && (
            <EditProfile
              defaultValue={user}
              closeForm={closeForm}
              onSubmit={handleEditItem}
            />
          )}
        </div>
      </Content>
      <Space direction="vertical" size={16}></Space>
    </Layout>
  );
};

export default Profile;
