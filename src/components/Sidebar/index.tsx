import React from "react";
import { Menu } from "antd";

interface SidebarProps {
  onSelect: (key: string) => void;
  selectedKey: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect, selectedKey }) => {
  return (
    <Menu
      style={{
        width: "200px",
        height: "100vh",
        overflow: "auto",
        backgroundImage: `url("https://mfiles.alphacoders.com/985/985967.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        color: "rgba(255, 255, 255,",
      }}
      mode="inline"
      selectedKeys={[selectedKey]}
      onClick={({ key }) => onSelect(key)}
      className="sidebar"
    >
      <Menu.Item
        key="1"
        className={`py-4 px-6 text-lg ${
          selectedKey === "1" ? "bg-blue-500 text-white" : " text-white"
        }`}
      >
        Company
      </Menu.Item>
      <Menu.Item
        key="2"
        className={`py-4 px-6 text-lg ${
          selectedKey === "2" ? "bg-blue-500 text-white" : " text-white"
        }`}
      >
        Job
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
