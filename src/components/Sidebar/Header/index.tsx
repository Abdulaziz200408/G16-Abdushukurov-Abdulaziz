/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { Input, Button, Modal, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addBrand } from "../store/slices/brandsSlice";
import { addContract } from "../store/slices/contractsSlice";

const headerStyle = css`
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

interface HeaderProps {
  searchText: string;
  onSearch: (value: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  activeMenuKey: string;
}

const Header: React.FC<HeaderProps> = ({
  searchText,
  onSearch,
  onChange,
  onAdd,
  activeMenuKey,
}) => {
  const [isBrandModalVisible, setIsBrandModalVisible] = useState(false);
  const [isContractModalVisible, setIsContractModalVisible] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const showBrandModal = () => {
    setIsBrandModalVisible(true);
  };

  const showContractModal = () => {
    setIsContractModalVisible(true);
  };

  const handleBrandCancel = () => {
    setIsBrandModalVisible(false);
  };

  const handleContractCancel = () => {
    setIsContractModalVisible(false);
  };

  const handleAddBrand = (values: any) => {
    dispatch(
      addBrand({ id: Date.now(), name: values.name, image: values.image })
    );
    form.resetFields();
    setIsBrandModalVisible(false);
  };

  const handleAddContract = (values: any) => {
    dispatch(
      addContract({
        id: Date.now(),
        name: values.name,
        desc: values.desc,
        technologies: values.technologies,
        location: values.genre,
        ishhaqi: values.ishhaqi,
        phone: values.phone,
        email: values.email,
        telegram: values.telegram,
        instagram: values.instagram,
      })
    );
    form.resetFields();
    setIsContractModalVisible(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://mfiles.alphacoders.com/985/985967.jpg")`,
      }}
      css={headerStyle}
    >
      <h1>{activeMenuKey === "1" ? "Company" : "Job"}</h1>
      <div>
        {activeMenuKey === "1" && (
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={showBrandModal}
          >
            Add Company
          </Button>
        )}
        {activeMenuKey === "2" && (
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={showContractModal}
          >
            Add job
          </Button>
        )}
        <Input.Search
          placeholder="Search..."
          style={{ width: 200, marginLeft: 20 }}
          value={searchText}
          onChange={onChange}
          onSearch={onSearch}
        />
        <Modal
          title="Add conpany"
          visible={isBrandModalVisible}
          onCancel={handleBrandCancel}
          footer={null}
        >
          <Form form={form} onFinish={handleAddBrand} layout="vertical">
            <Form.Item
              name="name"
              label="Company Name"
              rules={[
                { required: true, message: "Please enter the brand name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="image"
              label="Image URL"
              rules={[
                { required: true, message: "Please enter the image URL!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="desc"
              label="desc "
              rules={[{ required: true, message: "Please enter the desc " }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="website"
              label="website "
              rules={[{ required: true, message: "Please enter the website " }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Brand
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="Add New Contract"
          visible={isContractModalVisible}
          onCancel={handleContractCancel}
          footer={null}
        >
          <Form form={form} onFinish={handleAddContract} layout="vertical">
            <Form.Item
              name="name"
              label="Job Name"
              rules={[
                { required: true, message: "Please enter the contract name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="desc"
              label="desc"
              rules={[
                { required: true, message: "Please enter the contract desc!" },
              ]}
            >
              <Input type="desc" />
            </Form.Item>
            <Form.Item
              name="technologies"
              label="technologies"
              rules={[
                {
                  required: true,
                  message: "Please enter the contract technologies!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="location"
              label="location"
              rules={[{ required: true, message: "Please enter the location" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="ishhaqi"
              label="ishhaqi"
              rules={[{ required: true, message: "Please enter the ishhaqi" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="phone"
              rules={[{ required: true, message: "Please enter the phone" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="email"
              rules={[{ required: true, message: "Please enter the email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="telegram"
              label="telegram"
              rules={[{ required: true, message: "Please enter the telegram" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="instagram"
              label="instagram"
              rules={[
                { required: true, message: "Please enter the instagram" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Qo'shish
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
