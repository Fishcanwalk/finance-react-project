import "./App.css";
import TransactionList from "./components/TransactionList";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Divider } from "antd";
import AddItem from "./components/Additem";
import { Spin, Typography } from "antd";
import axios from "axios";
import EditItem from "./components/EditItem";
const URL_TXACTIONS = "/api/txactions";

function FinanceScreen() {
  const [summaryAmount, setSummaryAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [transactionData, setTransactionData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [openEditForm, setOpenEditForm] = useState(false);

  const openForm = (record) => {
    setEditData(record);
    setOpenEditForm(true);
  };

  const closeForm = () => {
    setOpenEditForm(false);
  };

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(URL_TXACTIONS);
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
  const deleteItem = async (itemId) => {
    try {
      setIsLoading(true);
      await axios.delete(`${URL_TXACTIONS}/${itemId}`);
      fetchItems();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const handleAddItem = async (item) => {
    try {
      setIsLoading(true);
      const params = { ...item, action_datetime: dayjs() };
      const response = await axios.post(URL_TXACTIONS, { data: params });
      const { id, attributes } = response.data.data;
      setTransactionData([
        ...transactionData,
        { id: id, key: id, ...attributes },
      ]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNoteChanged = (id, note) => {
    setTransactionData(
      transactionData.map((transaction) => {
        transaction.note = transaction.id === id ? note : transaction.note;
        return transaction;
      })
    );
  };

  // const handleRowDeleted = (id) => {
  //   setTransactionData(transactionData.filter((trx) => trx.id !== id));
  // };

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

  const handleEditItem = async (item) => {
    try {
      setIsLoading(true);
      const response = await axios.put(`${URL_TXACTIONS}/${item.id}`, {
        data: item,
      });
      fetchItems();
      const { id, attributes } = response.data.data;
      setTransactionData([
        ...transactionData,
        { id: id, key: id, ...attributes },
      ]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Spin spinning={isLoading}>
          <Typography.Title>
            จำนวนเงินปัจจุบัน {summaryAmount} บาท
          </Typography.Title>

          <AddItem onItemAdded={handleAddItem} />
          <Divider>บันทึก รายรับ - รายจ่าย</Divider>
          <TransactionList
            data={transactionData}
            onNoteChanged={handleNoteChanged}
            onRowDeleted={deleteItem}
            onRowEdit={openForm}
          />
        </Spin>
        {openEditForm && (
          <EditItem
            onSubmit={handleEditItem}
            closeModal={closeForm}
            defaultValue={editData}
          />
        )}
      </header>
    </div>
  );
}

export default FinanceScreen;
