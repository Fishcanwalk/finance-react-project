import { Table, Space, Tag } from "antd";
import dayjs from "dayjs";

export default function TransactionList(props) {
  const columns = [
    {
      title: "Date-time",
      dataIndex: "action_datetime",
      key: "action_datetime",
      render: (_,record) => dayjs(record.action_datetime).format("DD/MM/YYYY - HH:mm")
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type) => (
        <Tag color={type === "income" ? "green" : "red"}>{type}</Tag>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "Action",
      key: "action",
      render: (transaction) => (
        <button
          onClick={() => {
            props.onRowDeleted(transaction.id);
          }}
        >
          delete
        </button>
      ),
    },
  ];
  return <Table dataSource={props.data} columns={columns} />;
}