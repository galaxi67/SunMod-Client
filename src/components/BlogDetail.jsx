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
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-3">
          <div className="flex gap-2">
            <div className="flex-1 px-0 md:px-2 lg:px-3 xl:px-4">
              <div className="flex-shrink-0 mb-4 md:mb-0 lg:mb-5 xl:mb-0 mr-0 md:mr-6 flex justify-center">
                <div className="w-full sm:h-[50px] md:h-[300px] lg:h-[350px] xl:h-[650px]">
                  <img
                    src={post.picture || "/path/to/default-image.jpg"}
                    alt={post.name || "Default Image"}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mt-3">{post.name}</h1>
              <p className="text-base text-gray-500">
                {new Date(post.createdAt)
                  .toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                  .replace(/\s/g, " ")}
              </p>
              <p className="text-gray-600 mt-6 whitespace-pre-wrap font-medium text-justify leading-7">
                {post.description}
              </p>
            </div>

            <div className="flex-initial w-0 md:w-52 lg:w-64 xl:w-72 hidden sm:block">
              <h2 className="md:text-lg lg:text-xl xl:text-2xl font-semibold mb-2 text-sumod-bl3 text-center bg-sumod-wt p-2 rounded-custom-br">
                Artikel Lainnya
              </h2>
              <div className="grid grid-rows-2">
                {article && article.length > 0 ? (
                  article
                    .filter((art) => art.id !== post.id)
                    .slice(0, 5)
                    .map((art, index) => (
                      <button
                        key={index}
                        onClick={() => (window.location.href = `/artikel/detail/${art.id}`)}
                        className="p-3 rounded-custom-br w-full flex flex-col text-left hover:bg-gray-100"
                      >
                        <img
                          src={art.picture || "/path/to/default-image.jpg"}
                          alt={art.name || "Default Image"}
                          className="rounded-lg object-cover w-0 md:w-52 lg:w-64 xl:w-72 md:h-36 lg:h-40 xl:h-44"
                        />
                        <div className="mt-2">
                          <p className="text-xs text-gray-500">
                            {new Date(post.createdAt)
                              .toLocaleDateString("id-ID", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              })
                              .replace(/\s/g, " ")}
                          </p>
                          <h3 className="md:text-sm lg:text-base xl:text-lg font-bold text-gray-800">{art.name}</h3>
                        </div>
                      </button>
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
