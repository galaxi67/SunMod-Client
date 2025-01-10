import React from "react";
import { Tabs } from "antd";
import AdminArtikel from "../components/ArticleContent"; // Kode AdminArtikel dipindahkan ke file terpisah
import CreateArtikel from "../components/CreateArticle"; // Halaman Buat Artikel

const ArtikelTabs = () => {

  const items = [
    {
      key: "1",
      label: "Kelola Artikel",
      children: <AdminArtikel />,
    },
    {
      key: "2",
      label: "Buat Artikel Baru",
      children: <CreateArtikel />,
    },
  ];

  return (
    <div className="mx-auto p-4 mt-5">
      <Tabs defaultActiveKey="1" items={items} centered/>
    </div>
  );
};

export default ArtikelTabs;
