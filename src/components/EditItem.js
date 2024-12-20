import { useEffect } from "react";
import { Button, Form, Select, Input, InputNumber, Modal } from "antd";

const EditItem = ({ defaultValue, onSubmit, closeModal }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      id: defaultValue.id,
      type: defaultValue.type,
      amount: defaultValue.amount,
      note: defaultValue.note,
    });
  }, [defaultValue]);

  const handleSumbit = () => {
    form.validateFields().then((values) => {
      const updatedValue = {
        ...defaultValue,
        ...values,
      };
      console.log("Updated Record:", updatedValue);
      onSubmit(updatedValue);
      closeModal();
    });
  };

  return (
    <Modal
      title="Edit transaction"
      open={true}
      onCancel={closeModal}
      footer={[
        <Button key="cancel" onClick={closeModal}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSumbit}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="horizon">
        <Form.Item name="type" label="ชนิด" rules={[{ required: true }]}>
          <Select
            allowClear
            style={{ width: "100px" }}
            options={[
              {
                value: "Income",
                label: "รายรับ",
              },
              {
                value: "Expense",
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

export default EditItem;
