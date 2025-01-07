import React, { useState, useEffect } from "react";
import { fetchVisionMission } from "../api/apiService"

const ProfilSumod = ({ renderFormattedDescription, setSelectedProduct, setNewData }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchVisionMission();
        setProduct( data )
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No data found</div>;
  }

  return (
     <div>
      <h1 className="text-4xl font-bold mb-4">Profil Sumod</h1>
      <div className="flex justify-center md:justify-start lg:justify-start xl:justify-start">
        <div
          key={product.id}
          className="p-4 rounded-custom-br overflow-hidden bg-slate-50 shadow-lg w-[250px] h-auto"
        >
          <img
            src={product.picture}
            alt={product.name}
            className="rounded-custom-br object-cover mb-2 mx-auto"
          />
          <div>
            <h2 className="text-xl font-semibold text-center mb-2">{product.name}</h2>
            <p
              className="text-gray-700 text-center"
              dangerouslySetInnerHTML={renderFormattedDescription(product.description)}
            ></p>
            <div className="text-center mt-4">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-custom-br tracking-wider"
                onClick={() => {
                  setSelectedProduct(product);
                  setNewData({
                    name: product.name,
                    description: product.description,
                    picture: null,
                  });
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilSumod;
