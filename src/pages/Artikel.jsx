import React, { useState } from "react"
import BlogList from "../components/Blog"
import { useEffect } from "react"
import LoadingIndicator from "../components/LoadingIndicator"

const Artikel = () => {
  const [ loading , setLoading ] = useState( true )
  const [posts, setPosts] = useState( [] )
  const postsContent = [
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
  ]

  useEffect( () => {
    const fetchPosts = async () => {
      setLoading( true );
        try
        {
          setPosts( postsContent )
          setLoading( false )
        } catch ( error )
        {
          console.error( "Error fetching posts:", error )
          setLoading( false )
        }
    }

    fetchPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] )

  if (loading) return <LoadingIndicator/>

  return (
    <div className="container mx-auto">
      <div className="max-w-full">
        <div className="py-10 h-[200px] md:h-[280px] lg:h-[400px] flex lg:justify-center lg:items-center bg-gradient-to-l from-blue-50 via-blue-400 to-custom-blue mt-3 sm:mt-5 lg:mt-15 rounded-custom-br lg:mx-1">
          <div className="max-w-full mx-auto px-4 sm:px-8 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="title-content space-y-4 my-auto text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest">ARTIKEL SUMOD</h1>
              <h2 className="font-normal text-xs sm:text-xl lg:text-2xl leading-3 tracking-widest">
                Solusi Sehat untuk hidup yang Lebih Baik
              </h2>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="overflow-hidden md:block hidden">
                <img
                  src="https://res.cloudinary.com/dwaopoeya/image/upload/v1736190549/assets/h8ecnlccaezfcxfm1q6b.png"
                  alt="Profile"
                  className="w-1/2 h-auto object-cover mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 px-4 sm:px-6 lg:px-8 py-8">
          <BlogList posts={posts} />
        </div>
      </div>
    </div>
  )
}

export default Artikel
