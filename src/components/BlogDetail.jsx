// pages/blog/[id].jsx
import { useRouter } from "next/router";

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  const post = {
    id,
    title: "Getting Started with Next.js",
    content:
      "Next.js is a React framework that provides building blocks to create web applications...",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
      <p className="text-gray-600 mt-4">{post.content}</p>
    </div>
  );
}
