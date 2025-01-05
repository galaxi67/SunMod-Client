import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const accessToken =
    "IGAAN5xqYgGi5BZAE5Gd2s2OHRqN0daVGRJbGFxZAU5uRHhQVkNsVC1sM3lYVGt2OXJhb01HR2sxWEdnUUFKZAmEybUtCY2puSW10UUNrb2thYVNqN19SajE5SlpuZAmpzUndfSjRPak9uOEczOEg3Q2hfU210bW1mTG1HdTEyQmxnQQZDZD";

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,thumbnail_url,media_type&access_token=${accessToken}`
        );
        setPosts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) {
    return <p>Loading Instagram posts...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-lg overflow-hidden shadow-md"
        >
          {post.media_type === "VIDEO" ? (
            <video src={post.media_url} controls className="w-full h-96 object-cover group-hover:opacity-75" />
          ) : (
            <img
              src={post.media_url}
              alt={post.caption || "Instagram post"}
              className="w-full h-80 object-cover group-hover:opacity-75"
            />
          )}
          <p className="mt-2 p-3 text-sm text-gray-600 font-normal">
            {post.caption ? post.caption.slice(0, 100) + "..." : "No caption"}
          </p>
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
