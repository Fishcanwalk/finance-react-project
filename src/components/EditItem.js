import { Button, Form, Select, Input, InputNumber, Modal } from "antd";

const Edit = () => {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form layout="inline">
        <Form.Item name="type" label="ชนิด" rules={[{ required: true }]}>
          <Select
            allowClear
            style={{ width: "100px" }}
            options={[
              {
                value: "income",
                label: "รายรับ",
              },
              {
                value: "expense",
                label: "รายจ่าย",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="amount"
          label="จํานวนเงิน"
          rules={[{ required: true }]}
        >
          <InputNumber placeholder="จํานวนเงิน" />
        </Form.Item>
        <Form.Item name="note" label="หมายเหตุ" rules={[{ required: true }]}>
          <Input placeholder="Note" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Edit;
