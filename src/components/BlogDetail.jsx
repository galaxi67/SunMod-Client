import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../admin/api/apiService";

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const [response1, response2] = await Promise.all([fetchData(`article/${id}`), fetchData("article")]);
        setPost(response1);
        setArticle(response2);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching article");
        console.error("Fetch article error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-full">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2">

            <div className="flex-1">
              <div className="flex-shrink-0 mb-4 md:mb-0 lg:mb-5 xl:mb-0 mr-0 md:mr-6 mt-0 md:mt-10 lg:mt-0 xl:mt-8">
                <img
                  src={post.picture || "/path/to/default-image.jpg"}
                  alt={post.name || "Default Image"}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mt-3">{post.name}</h1>
              <p className="text-base text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
              <p className="text-gray-600 mt-6 whitespace-pre-wrap font-medium text-justify leading-7">
                {post.description}
              </p>
            </div>

            <div className="flex-initial w-72" >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Article Preview</h2>
              <div className="grid grid-rows-2">
                {article && article.length > 0 ? (
                  article.slice(0, 5).map((art, index) => (
                    <div key={index} className="p-3 rounded-custom-br w-full flex flex-col">
                      <img
                        src={art.picture || "/path/to/default-image.jpg"}
                        alt={art.name || "Default Image"}
                        className="rounded-lg object-cover w-72 h-44"
                      />
                      <div className="mt-4">
                        <p className="text-xs text-start text-gray-500">{new Date(art.createdAt).toLocaleDateString()}</p>
                        <h3 className="text-sm text-start font-bold text-gray-800">{art.name}</h3>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No preview articles available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
