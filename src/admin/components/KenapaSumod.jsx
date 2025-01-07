// KenapaSumod.jsx
import React from "react"

const KenapaSumod = ( { products, renderFormattedDescription, setSelectedProduct, setNewData } ) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Kenapa harus di Sumod?</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {products.map( ( product ) => (
            <div
              key={product.id}
              className={`p-4 rounded-custom-br overflow-hidden shadow-lg w-[250px] h-auto ${product.id >= 2 && product.id <= 7 ? "bg-white" : "bg-red-200"}`}
            >
              <div className="flex justify-center items-center h-[200px] p-4 bg-slate-100 rounded-custom-br mb-2">
                <img src={product.picture} alt={product.name} className="object-contain max-w-full max-h-full" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-center mb-2">{product.name}</h2>
                <p className="text-gray-700 text-center" dangerouslySetInnerHTML={renderFormattedDescription( product.description )}></p>
                <div className="text-center mt-4">
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-custom-br tracking-wider"
                    onClick={() => {
                      setSelectedProduct( product )
                      setNewData( {
                        name: product.name,
                        description: product.description,
                        picture: null,
                      } )
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ) )}
        </div>
      </div>
    </div>
  )
}

export default KenapaSumod
