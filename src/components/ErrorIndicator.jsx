import React from 'react'

export default function ErrorIndicator( { error } ) {
  return (
    <div className="flex items-center justify-center fixed inset-0">
        <div className="flex flex-col items-center">
          <p className="text-center ">Error: {error}</p>
        </div>
      </div>
  )
}
