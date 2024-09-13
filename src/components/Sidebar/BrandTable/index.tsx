/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { Table, Button, Space, Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { deleteBrand, editBrand } from "../store/slices/brandsSlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface Brand {
  id: number;
  name: string;
  image: string;
  desc?: string;
  website?: string;
}

interface BrandTableProps {
  searchText: string;
}

const tableStyle = css`
  background-color: #f0f2f5;
  color: #000;
  border-radius: 10px;
  padding: 20px;

  .ant-table-thead > tr > th {
    background-color: #e6f7ff;
    color: #000;
  }

  .ant-table-tbody > tr > td {
    color: #000;
  }
`;

const BrandTable: React.FC<BrandTableProps> = ({ searchText }) => {
  const dispatch = useDispatch();
  const brands = useSelector((state: RootState) => state.brands.brands);
  const [editingBrand, setEditingBrand] = useState<Brand | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleEdit = (record: Brand) => {
    setEditingBrand(record);
    setIsModalVisible(true);
    form.setFieldsValue({
      name: record.name,
      image: record.image,
      desc: record.desc,
      website: record.website,
    });
  };

  const handleDelete = (id: number) => {
    dispatch(deleteBrand(id));
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setEditingBrand(null);
  };

  const handleSubmit = (values: any) => {
    if (editingBrand) {
      dispatch(editBrand({ ...editingBrand, ...values }));
      handleCloseModal();
    }
  };

  const columns = [
    {
      title: "Rasmi",
      dataIndex: "image",
      render: (text: string) => (
        <img
          src={text}
          alt="car"
          style={{ width: "80px", borderRadius: "10px" }}
        />
      ),
    },
    {
      title: "Nomi",
      dataIndex: "name",
      sorter: (a: Brand, b: Brand) => a.name.localeCompare(b.name),
    },
    {
      title: "website",
      dataIndex: "website",
      sorter: (a: Brand, b: Brand) => a.name.localeCompare(b.name),
    },
    {
      title: "desc",
      dataIndex: "desc",
      sorter: (a: Brand, b: Brand) => a.name.localeCompare(b.name),
    },
    {
      title: "Edit / Delete",
      render: (record: Brand) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            danger
          />
        </Space>
      ),
    },
  ];

  return (
    <div css={tableStyle}>
      <Table
        columns={columns}
        dataSource={filteredBrands}
        rowKey="id"
        pagination={false}
      />
      <Modal
        visible={isModalVisible}
        title="Edit Brand"
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
              { required: true, message: "Please input the brand name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="Image URL"
            rules={[{ required: true, message: "Please input the image URL!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="desc"
            label="desc "
            rules={[{ required: true, message: "Please input the desc " }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="website"
            label="website "
            rules={[{ required: true, message: "Please input the website " }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BrandTable;
