import React from "react";
import { ListBulletIcon, PencilIcon } from "@heroicons/react/24/outline"
import { BallTriangle } from 'react-loading-icons'
  
export default function TabProfile({
  selectedProduct,
  newData,
  setNewData,
  nameError,
  setNameError,
  descError,
  setDescError,
  pictError,
  handleBulletPoint,
  handleHighlight,
  handleFileChange,
  handleUpdate,
  btnLoading,
  resetForm,
  renderFormattedDescription,
}){
  return (
    selectedProduct && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 m-2 md:m-0">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="bg-white border p-2 md:p-3 lg:p-5 xl:p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="font-semibold mb-4">
              Update Profil: "{selectedProduct.name}"
            </h2>
            <p className="text-custom-black/40 font-bold">Judul</p>
            <input
              type="text"
              placeholder="Judul Baru"
              value={newData.name}
              onChange={(e) => {
                setNewData({ ...newData, name: e.target.value });
                if (nameError) setNameError("");
              }}
              className="border p-2 w-full"
            />
            {nameError && (
              <div className="text-red-500 font-semibold text-sm mb-4">
                {nameError}
              </div>
            )}
            <p className="text-custom-black/40 font-bold mt-2">Deskripsi</p>
            <textarea
              id="description"
              placeholder="Deskripsi Baru (tambahkan keunggulan di sini)"
              value={newData.description}
              onChange={(e) => {
                setNewData({ ...newData, description: e.target.value });
                if (descError) setDescError("");
              }}
              className="border p-2 w-full h-40"
            ></textarea>
            {descError && (
              <div className="text-red-500 font-semibold text-sm mb-4">
                {descError}
              </div>
            )}
            <div className="mb-3 flex justify-center">
              <button
                onClick={handleBulletPoint}
                className="border border-gray-300 p-2 rounded mr-2"
              >
                <ListBulletIcon className="h-5 w-5 text-custom-black" />
              </button>
              <button
                onClick={handleHighlight}
                className="border border-gray-300 p-2 rounded"
              >
                <PencilIcon className="h-5 w-5 text-emerald-600" />
              </button>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border p-2 w-full mt-2"
            />
            {pictError && (
              <div className="text-red-500 font-semibold text-sm mb-4">
                {pictError}
              </div>
            )}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="bg-sidebar text-white px-4 py-2 rounded"
                onClick={() => handleUpdate(selectedProduct.id)}
                disabled={btnLoading}
              >
                {btnLoading ? (
                  <BallTriangle className="h-7 w-7" />
                ) : (
                  "Simpan Perubahan"
                )}
              </button>

              <button
                className="bg-red-400 text-white px-4 py-2 rounded"
                onClick={resetForm}
              >
                Batal
              </button>
            </div>
          </div>
          <div className="bg-white border p-2 md:p-3 lg:p-5 xl:p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="font-semibold">Preview Deskripsi:</h3>
            <div
              className="border p-2 w-full mt-2 h-auto bg-slate-50 max-h-[100px] md:max-h-[450px] overflow-y-auto"
              dangerouslySetInnerHTML={renderFormattedDescription(newData.description)}
            ></div>
          </div>
        </div>
      </div>
    )
  );
};

