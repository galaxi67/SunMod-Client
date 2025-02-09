import React from "react";
import { Tabs } from "antd";
import AdminMetode from "../components/method/MethodContent";
import CreateMetode from "../components/method/CreateMethod";

const ServiceTabs = () => {

  const items = [
    {
      key: "1",
      label: "Kelola Metode",
      children: <AdminMetode />,
    },
    {
      key: "2",
      label: "Buat Metode Baru",
      children: <CreateMetode />,
    },
  ];

  return (
    <div className="mx-auto p-4 mt-5">
      <Tabs defaultActiveKey="1" items={items} centered/>
    </div>
  );
};

export default ServiceTabs;
