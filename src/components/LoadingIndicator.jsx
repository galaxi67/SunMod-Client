import React from 'react'

export default function LoadingIndicator() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-70 border-solid"></div>
      <div className="mt-4 flex items-center text-blue-500 font-medium text-lg">
        <span>Loading</span>
        <div className="ml-2 flex">
          <span
            className="text-3xl font-bold animate-[bounce_1.5s_infinite]"
            style={{ lineHeight: "1" }}
          >
            .
          </span>
          <span
            className="text-3xl font-bold animate-[bounce_1.5s_infinite_0.3s]"
            style={{ lineHeight: "1" }}
          >
            .
          </span>
          <span
            className="text-3xl font-bold animate-[bounce_1.5s_infinite_0.6s]"
            style={{ lineHeight: "1" }}
          >
            .
          </span>
        </div>
      </div>
    </div>
  )
}
