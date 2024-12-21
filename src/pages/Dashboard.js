import { useState, useEffect } from "react";
import { Spin, Typography } from "antd";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Chart from "react-apexcharts";
import axios from "axios";
import "./Dashboard.css";

const URL_TXACTIONS = "/api/txactions";
const Dashboard = () => {
  const [summaryAmount, setSummaryAmount] = useState(0);
  const [summaryIncome, setSummaryIncome] = useState(0);
  const [summaryExpense, setSummaryExpense] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [transactionData, setTransactionData] = useState([]);

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(URL_TXACTIONS);
      console.log(response.data.data);
      setTransactionData(
        response.data.data.map((row) => ({
          id: row.id,
          key: row.id,
          ...row.attributes,
        }))
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    setSummaryAmount(
      transactionData.reduce(
        (sum, transaction) =>
          transaction.type === "Income"
            ? sum + transaction.amount
            : sum - transaction.amount,
        0
      )
    );
  }, [transactionData]);

  useEffect(() => {
    setSummaryIncome(
      transactionData.reduce(
        (sum, transaction) =>
          transaction.type === "Income" && sum + transaction.amount,
        0
      )
    );
  }, [transactionData]);

  useEffect(() => {
    setSummaryExpense(summaryIncome - summaryAmount);
  }, [transactionData]);
  return (
    <Layout>
      <Sider>
        <Navbar />
      </Sider>
      <Content>
        <div className="App-header">
          <Typography.Title style={{ textAlign: "center" }}>
            จำนวนเงินปัจจุบัน {summaryAmount} บาท
            <h2 style={{ color: "#52ffb3" }}>
              จำนวนเงินที่ได้รับ {summaryIncome} บาท
            </h2>
            <h2 style={{ color: " #FF5733 " }}>
              จำนวนเงินใช้จ่าย {summaryExpense} บาท
            </h2>
          </Typography.Title>
          <Chart
            className="chart"
            type="donut"
            width={600}
            height={600}
            series={[summaryIncome, summaryExpense]}
            options={{
              labels: ["Income", "Expense"],
              tooltip: {
                y: {
                  formatter: (val) => {
                    return `${val}฿`;
                  },
                },
              },
              colors: ["#52ffb3", " #FF5733 "],
            }}
          ></Chart>
        </div>
      </Content>
    </Layout>
  );
};

export default Dashboard;
