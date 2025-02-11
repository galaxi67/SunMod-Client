import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramFeed = ({ maxPosts = 3, maxPosts1 = 1 }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const accessToken =
    "";

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
        setError("There was an issue loading the Instagram posts.");
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  const postsToDisplay = posts.slice(0, maxPosts);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {postsToDisplay.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-lg overflow-hidden shadow-md"
          title={post.caption || "sumod.sunatmodern"}
        >
          {post.media_type === "VIDEO" ? (
            <video src={post.media_url} controls className="w-full h-48 md:h-56 lg:h-80 object-cover group-hover:opacity-75" />
          ) : (
            <img
              src={post.media_url}
              alt={post.caption || "Instagram post"}
              className="w-full h-48 md:h-56 lg:h-80 object-cover group-hover:opacity-75"
            />
          )}
          <p className="mt-2 p-3 text-sm text-gray-600 font-normal">
            {post.caption ? post.caption.slice(0, 200) + "..." : "No caption"}
          </p>
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
