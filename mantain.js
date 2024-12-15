// import "./App.css";
// import TransactionList from "./components/TransactionList";
// import { useState, useEffect } from "react";

// function App() {
//   const [transactionData, setTransactionData] = useState([
//     {
//       id: 1,
//       created: "01/02/2021 - 08:30",
//       type: "income",
//       amount: 20000,
//       note: "allowance",
//     },
//     {
//       id: 2,
//       created: "01/02/2021 - 10:30",
//       type: "expense",
//       amount: 150,
//       note: "อาหารเที่ยง",
//     },
//   ]);
//   const [amount, setAmount] = useState(calculateCurrentAmount(transactionData));
//   const [inputValue, setInputValue] = useState("");
//   const [type, setType] = useState("");
//   const [newAmount, setnewAmount] = useState("");
//   const [note, setNote] = useState("");

//   function calculateCurrentAmount(trxData) {
//     return trxData.reduce(
//       (sum, transaction) =>
//         transaction.type === "income"
//           ? (sum += transaction.amount)
//           : (sum -= transaction.amount),
//       0
//     );
//   }

//   // const generateTransaction = () => {
//   //   return {
//   //     id: transactionData.length + 1,
//   //     created: new Date().toLocaleString(),
//   //     type: ["income", "expense"][Math.floor(Math.random() * 2)],
//   //     amount: Math.floor(Math.floor(Math.random() * 1000) + 1),
//   //     note: "",
//   //   };
//   // };
//   const generateTransaction = (type, amt, note) => {
//     return {
//       id: transactionData.length + 1,
//       created: new Date().toLocaleString(),
//       type: type,
//       newAmount: amt,
//       note: note,
//     };
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         {amount >= 10000 && (
//           <p style={{ color: "green" }}>Wow you're so rich - {amount}</p>
//         )}
//         {amount < 10000 && (
//           <p style={{ color: "red" }}>So Poor... - {amount}</p>
//         )}
//         {/* <button
//           onClick={() => {
//             const data = [...transactionData, generateTransaction()];
//             setTransactionData(data);
//             setAmount(calculateCurrentAmount(data));
//           }}
//         >
//           Add Transaction
//         </button> */}
//         <select value={type} onChange={(evt) => setType(evt.target.value)}>
//           <option value="income">income</option>
//           <option value="expense">expense</option>
//         </select>
//         <input
//           value={newAmount}
//           onChange={(evt) => setnewAmount(evt.target.value)}
//         />
//         <input value={note} onChange={(evt) => setNote(evt.target.value)} />
//         <button
//           onClick={() => {
//             const data = [
//               ...transactionData,
//               generateTransaction(type, newAmount, note),
//             ];
//             setTransactionData(data);
//             setAmount(calculateCurrentAmount(data));
//           }}
//         >
//           Add Transaction
//         </button>
//         <TransactionList data={transactionData} />
//       </header>
//     </div>
//   );
// }

// export default App;
// ---------------------------------------------------------
// import "./App.css";
// import TransactionList from "./components/TransactionList";
// import { useState, useEffect } from "react";
// import dayjs from "dayjs";

// function App() {
//   const [transactionData, setTransactionData] = useState([
//     {
//       id: 1,
//       created: "01/02/2021 - 08:30",
//       type: "income",
//       amount: 20000,
//       note: "allowance",
//     },
//     {
//       id: 2,
//       created: "01/02/2021 - 10:30",
//       type: "expense",
//       amount: 150,
//       note: "อาหารเที่ยง",
//     },
//   ]);
//   const [amount, setAmount] = useState(calculateCurrentAmount(transactionData));
//   const [type, setType] = useState("income");
//   const [newAmount, setNewAmount] = useState("");
//   const [note, setNote] = useState("");

//   useEffect(() => {
//     console.log(transactionData);
//     setAmount(
//       transactionData.reduce(
//         (sum, transaction) =>
//           transaction.type === "income"
//             ? (sum += transaction.amount)
//             : (sum -= transaction.amount),
//         0
//       )
//     );
//   }, [transactionData]);

//   const generateTransaction = (type, amt, note) => {
//     return {
//       id: transactionData.length + 1,
//       created: dayjs().format("DD/MM/YYYY - HH:MM"),
//       type: type,
//       amount: amt,
//       note: note,
//     };
//   };

//   const handleNoteChanged = (id, note) => {
//     setTransactionData(
//       transactionData.map((transaction) => {
//         transaction.note = transaction.id === id ? note : transaction.note;
//         return transaction;
//       })
//     );
//   };

//   const deleteRow = (id) => {
//     setTransactionData(
//       transactionData.filter((transaction) => transaction.id !== id)
//     );
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         {amount >= 10000 && (
//           <p style={{ color: "green" }}>Wow you're so rich - {amount}</p>
//         )}
//         {amount < 10000 && (
//           <p style={{ color: "red" }}>So Poor... - {amount}</p>
//         )}
//         <select value={type} onChange={(evt) => setType(evt.target.value)}>
//           <option value="income">รายรับ</option>
//           <option value="expense">รายจ่าย</option>
//         </select>
//         <input
//           type="number"
//           value={newAmount}
//           onChange={(evt) => setNewAmount(parseInt(evt.target.value))}
//         />
//         <input value={note} onChange={(evt) => setNote(evt.target.value)} />
//         <button
//           onClick={() => {
//             const data = [
//               ...transactionData,
//               generateTransaction(type, newAmount, note),
//             ];
//             setTransactionData(data);
//           }}
//         >
//           Add Transaction
//         </button>
//         <TransactionList
//           data={transactionData}
//           onNoteChanged={handleNoteChanged}
//           onDelete={deleteRow}
//         />
//       </header>
//     </div>
//   );
// }

// export default App;
// ----------------------------------------------------------
// add item on backend
// import "./App.css";
// import TransactionList from "./components/TransactionList";
// import { useState, useEffect } from "react";
// import dayjs from "dayjs";
// import AddItem from "./components/Additem";
// import { Spin } from "antd";
// import axios from "axios";

// axios.defaults.baseURL =
//   process.env.REACT_APP_BASE_URL || "http://localhost:1337";
// const URL_TXACTIONS = "/api/txactions";
// function App() {
//   // const [transactionData, setTransactionData] = useState([
//   //   {
//   //     id: 1,
//   //     created: "01/02/2021 - 08:30",
//   //     type: "income",
//   //     amount: 20000,
//   //     note: "allowance",
//   //   },
//   //   {
//   //     id: 2,
//   //     created: "01/02/2021 - 10:30",
//   //     type: "expense",
//   //     amount: 150,
//   //     note: "อาหารเที่ยง",
//   //   },
//   // ]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [transactionData, setTransactionData] = useState([]);
//   const [amount, setAmount] = useState(0);

//   const fetchItems = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(URL_TXACTIONS);
//       //................ Add Code Here ...................
//       setTransactionData(
//         response.data.data.map((row) => ({
//           id: row.id,
//           key: row.id,
//           ...row.attributes,
//         }))
//       );
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchItems();
//   }, []);
//   const addItem = async (item) => {
//     try {
//       setIsLoading(true);
//       const params = { ...item, action_datetime: dayjs() };
//       console.log(params);
//       const response = await axios.post(URL_TXACTIONS, { data: params });
//       const { id, attributes } = response.data.data;
//       setTransactionData([
//         ...transactionData,
//         { id: id, ket: id, ...attributes },
//       ]);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     setAmount(
//       transactionData.reduce(
//         (sum, transaction) =>
//           transaction.type === "income"
//             ? (sum += transaction.amount)
//             : (sum -= transaction.amount),
//         0
//       )
//     );
//   }, [transactionData]);

//   const handleAddItem = (itemData) => {
//     setTransactionData([
//       ...transactionData,
//       {
//         id: transactionData.length + 1,
//         created: dayjs().format("DD/MM/YYYY - HH:mm"),
//         ...itemData,
//       },
//     ]);
//   };
//   const handleNoteChanged = (id, note) => {
//     setTransactionData(
//       transactionData.map((transaction) => {
//         transaction.note = transaction.id === id ? note : transaction.note;
//         return transaction;
//       })
//     );
//   };

//   const handleRowDeleted = (id) => {
//     setTransactionData(transactionData.filter((trx) => trx.id !== id));
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         {amount >= 10000 && (
//           <p style={{ color: "green" }}>Wow you're so rich - {amount}</p>
//         )}
//         {amount < 10000 && (
//           <p style={{ color: "red" }}>So Poor... - {amount}</p>
//         )}
//         <AddItem onItemAdded={handleAddItem} />
//         <TransactionList
//           data={transactionData}
//           onNoteChanged={handleNoteChanged}
//           onRowDeleted={handleRowDeleted}
//         />
//       </header>
//     </div>
//   );
// }

// export default App;
