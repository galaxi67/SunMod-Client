import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/instagram-token");
        setAccessToken(response.data.accessToken);
      } catch (error) {
        console.error("Error fetching Instagram token:", error);
        setError("Failed to load Instagram access token.");
        setLoading(false);
      }
    };
    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (!accessToken) return;

    const fetchAllInstagramPosts = async () => {
      let allPosts = [];
      let nextPageUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&access_token=${accessToken}`;
      
      try {
        while (nextPageUrl) {
          const response = await axios.get(nextPageUrl);
          allPosts = [...allPosts, ...response.data.data];
          nextPageUrl = response.data.paging?.next || null;
        }
        
        setPosts(allPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        setError("Failed to load Instagram posts.");
        setLoading(false);
      }
    };

    fetchAllInstagramPosts();
  }, [accessToken]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
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
          title={post.caption || "Instagram Post"}
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
            {post.caption ? post.caption.slice(0, 100) + "..." : "No caption"}
          </p>
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
