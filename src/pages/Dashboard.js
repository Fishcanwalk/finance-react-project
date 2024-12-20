import { Layout } from "antd";
import Navbar from "../components/Navbar";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Chart from "react-apexcharts";
const Dashboard = () => {
  return (
    <Layout>
      <Sider>
        <Navbar />
      </Sider>
      <Content>
        <h1>Dashboard</h1>
        <div className="App-header">
          <Chart
            type="bar"
            width={600}
            height={600}
            series={[
              {
                name: "aaa",
                data: [100, 200, 300, 400, 500],
              },
            ]}
            options={{
              colors: ["#ff0000"],
            }}
          ></Chart>
        </div>
      </Content>
    </Layout>
  );
};

export default Dashboard;
