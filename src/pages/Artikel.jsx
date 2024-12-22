import React from "react";
import BlogList from "../components/Blog"

const Artikel = () => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn how to set up your Next.js project.",
      image: "/images/blog1.jpg",
      date: "2024-12-01",
    },
    {
      id: 2,
      title: "Understanding Tailwind CSS",
      excerpt: "A beginner's guide to Tailwind CSS.",
      image: "/images/blog2.jpg",
      date: "2024-11-28",
    },
    {
      id: 3,
      title: "React vs Angular",
      excerpt: "Comparing two popular frontend frameworks.",
      image: "/images/blog2.jpg",
      date: "2024-11-25",
    },
    {
      id: 3,
      title: "React vs Angular",
      excerpt: "Comparing two popular frontend frameworks.",
      image: "/images/blog2.jpg",
      date: "2024-11-25",
    },
    {
      id: 3,
      title: "React vs Angular",
      excerpt: "Comparing two popular frontend frameworks.",
      image: "/images/blog2.jpg",
      date: "2024-11-25",
    },
    {
      id: 3,
      title: "React vs Angular",
      excerpt: "Comparing two popular frontend frameworks.",
      image: "/images/blog2.jpg",
      date: "2024-11-25",
    },
  ];

  return (
    <div>
      <main className="max-w-6xl max-w-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Artikel SuMod</h1>
        <BlogList posts={posts} />
      </main>
    </div>
  );
};

export default Artikel;
