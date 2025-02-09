import React from "react";
import { Tabs } from "antd";
import AdminLayanan from "../components/service/ServiceContent";
import CreateLayanan from "../components/service/CreateService";

const ServiceTabs = () => {

  const items = [
    {
      key: "1",
      label: "Kelola Layanan",
      children: <AdminLayanan />,
    },
    {
      key: "2",
      label: "Buat Layanan Baru",
      children: <CreateLayanan />,
    },
  ];

  return (
    <div className="mx-auto p-4 mt-5">
      <Tabs defaultActiveKey="1" items={items} centered/>
    </div>
  );
};

export default ServiceTabs;
