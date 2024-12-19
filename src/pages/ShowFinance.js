import "../App.css";
import TransactionList from "../components/TransactionList";
import dayjs from "dayjs";
import axios from "axios";
import AddItem from "../components/Additem";
import Navbar from "../components/Navbar";
import EditItem from "../components/EditItem";
import { useState, useEffect } from "react";
import { Button, Divider, Layout } from "antd";
import { Spin, Typography } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const URL_TXACTIONS = "/api/txactions";

function ShowFinance() {
  const [summaryAmount, setSummaryAmount] = useState(0);
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

  return (
    <Layout>
      <Sider>
        <Navbar />
      </Sider>
      <Content>
        <div className="App">
          <body className="App-header">
            <Spin spinning={isLoading}>
              <Typography.Title>
                จำนวนเงินปัจจุบัน {summaryAmount} บาท
              </Typography.Title>

              <Divider>บันทึก รายรับ - รายจ่าย</Divider>
              <TransactionList data={transactionData} />
              <Button style={{ marginBottom: "5rem" }}>
                <Link to="Edit">Edit</Link>
              </Button>
            </Spin>
          </body>
        </div>
      </Content>
    </Layout>
  );
}

export default ShowFinance;
