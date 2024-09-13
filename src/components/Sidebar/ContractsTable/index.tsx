/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { Button, Card, Modal, Form, Input, Dropdown, Select, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { deleteContract, editContract } from "../store/slices/contractsSlice";
import { EditOutlined, DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import "./css..css";

interface Contract {
  id: number;
  name: string;
  desc: string;
  technologies: string;
  location: string;
  ishhaqi: any;
  phone: string;
  email: string;
  telegram?: string;
  instagram: string;
}

interface ContractsPageProps {
  searchText: string;
}

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
`;

const cardStyle = css`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  outline: 2px solid blueviolet;
  outline-offset: 2px;
  color: white !important;

  &:hover {
    transform: scale(1.05);
  }
  .ant-card-body {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  span {
    color: blue;
    fontweight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.3s ease;
    &:hover {
      color: blueviolet;
    }
  }
`;

const ContractsPage: React.FC<ContractsPageProps> = ({ searchText }) => {
  const dispatch = useDispatch();
  const contracts = useSelector(
    (state: RootState) => state.contracts.contracts
  );

  const [editingContract, setEditingContract] = useState<Contract | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [selectedtechnologies, setSelectedtechnologies] = useState<
    string | undefined
  >(undefined);

  const filteredContracts = contracts.filter((contract) =>
    contract.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleEdit = (record: Contract) => {
    setEditingContract(record);
    setIsModalVisible(true);
    form.setFieldsValue(record);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteContract(id));
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setEditingContract(null);
  };

  const handleSubmit = (values: any) => {
    if (editingContract) {
      dispatch(editContract({ ...editingContract, ...values }));
      handleCloseModal();
    }
  };

  const handletechnologiesChange = (value: string) => {
    setSelectedtechnologies(value);
  };

  const menu = (contract: Contract) => (
    <Menu>
      <Menu.Item
        key="edit"
        icon={<EditOutlined />}
        onClick={() => handleEdit(contract)}
      >
        Edit
      </Menu.Item>
      <Menu.Item
        key="delete"
        icon={<DeleteOutlined />}
        onClick={() => handleDelete(contract.id)}
      >
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div css={gridStyle}>
        {filteredContracts.map((contract) => (
          <Card
            className="cardItem"
            key={contract.id}
            cover={contract.desc}
            css={cardStyle}
          >
            <div
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                zIndex: "100",
                cursor: "pointer",
                borderRadius: "5px",
                padding: "5px",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
              }}
              className="actions-container"
            >
              <Dropdown overlay={menu(contract)} trigger={["click"]}>
                <Button icon={<MoreOutlined />} />
              </Dropdown>
            </div>
            <p>
              <span>Name:</span> {contract.name}
            </p>
            <p>
              <span>technologies:</span> {contract.technologies}
            </p>
            <p>
              <span>location:</span> {contract.location}
            </p>
            <p>
              <span>ishhaqi:</span> {contract.ishhaqi}
            </p>
            <p>
              <span>phone:</span> {contract.phone}
            </p>
            <p>
              <span>email:</span> {contract.email}
            </p>
            <p>
              <span>telegram:</span> {contract.telegram}
            </p>
            <p>
              <span>instagram:</span> {contract.instagram}
            </p>
          </Card>
        ))}
      </div>

      <Modal
        visible={isModalVisible}
        title="Edit Contract"
        okText="Save"
        cancelText="Cancel"
        onCancel={handleCloseModal}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: "Please input the customer name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="desc"
            label="desc"
            rules={[
              { required: true, message: "Please input the order desc!" },
            ]}
          >
            <Input type="desc" />
          </Form.Item>
          <Form.Item
            name="technologies"
            label="technologies"
            rules={[
              { required: true, message: "Please select the technologies!" },
            ]}
          ></Form.Item>
          <Form.Item
            name="location"
            label="location"
            rules={[{ required: true, message: "Please input the  location!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ishhaqi"
            label="ishhaqi"
            rules={[{ required: true, message: "Please input the  ishhaqi!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="phone"
            rules={[{ required: true, message: "Please input the  phone!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="email"
            rules={[{ required: true, message: "Please input the  email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="telegram"
            label="telegram"
            rules={[{ required: true, message: "Please input the  telegram!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="instagram"
            label="instagram"
            rules={[
              { required: true, message: "Please input the  instagram!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ContractsPage;
