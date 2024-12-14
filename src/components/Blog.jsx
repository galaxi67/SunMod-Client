import React from 'react'

const Blog = ({posts}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
            <a
              href={`/blog/${post.id}`}
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read more →
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blog