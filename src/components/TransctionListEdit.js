import { Table, Space, Tag, Button } from "antd";
import dayjs from "dayjs";

export default function TransactionListEdit(props) {
  const columns = [
    {
      title: "Date-time",
      dataIndex: "action_datetime",
      key: "action_datetime",
      render: (_, record) =>
        dayjs(record.action_datetime).format("DD/MM/YYYY - HH:mm"),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type) => (
        <Tag color={type === "Income" ? "green" : "red"}>{type}</Tag>
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
      hidden: false,
      render: (transaction) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              props.onRowEdit(transaction);
            }}
          >
            edit
          </Button>
          <Button
            type="primary"
            onClick={() => {
              props.onRowDeleted(transaction.id);
            }}
            danger
          >
            delete
          </Button>
        </Space>
      ),
    },
  ];
  return <Table dataSource={props.data} columns={columns} />;
}
