import React, { useEffect, useState } from "react"
import { fetchData, updateData } from "../api"
import { ListBulletIcon, PencilIcon } from "@heroicons/react/24/outline"
import { toast } from 'react-toastify'
import { BallTriangle } from 'react-loading-icons'
import VisionMisionForm from "../components/VisionMisionForm"

const AdminProfil = () => {
    const [products, setProducts] = useState( [] )
    const [loading, setLoading] = useState( true )
    const [btnLoading, setBtnLoading] = useState( false )
    const [error, setError] = useState( null )
    const [selectedProduct, setSelectedProduct] = useState( null )
    const [newData, setNewData] = useState( { name: "", description: "", picture: null } )
    const [nameError, setNameError] = useState( "" )
    const [descError, setDescError] = useState( "" )
    const [pictError, setPictError] = useState( "" )

    const loadProducts = async () => {
        setLoading( true )
        try
        {
            const response = await fetchData( "product" )
            setProducts( response.map( product => ( {
                ...product,
                description: product.description || "", // Default to empty string
            } ) ) )
            setLoading( false )
        } catch ( err )
        {
            setError( err.message )
            setLoading( false )
        }
    }

    const handleUpdate = async ( id ) => {
        let isValid = true
        setNameError( "" )
        setDescError( "" )
        setPictError( "" )
        if ( !newData.name.trim() )
        {
            setNameError( "Nama tidak boleh kosong." )
            isValid = false
        }

        if ( !newData.description.trim() )
        {
            setDescError( "Deskripsi tidak boleh kosong." )
            isValid = false
        }

        if ( !newData.picture )
        {
            setPictError( "Gambar tidak boleh kosong." )
            isValid = false
        }
        if ( !isValid ) return


        try
        {
            const formData = new FormData()
            formData.append( "name", newData.name )
            formData.append( "description", newData.description )
            if ( newData.picture )
            {
                formData.append( "picture", newData.picture )
            }
            setBtnLoading( true )
            const updatedProduct = await updateData( "product", id, formData )
            toast.dismiss()
            toast.success( `Profil ${updatedProduct.name} berhasil diupdate!` )
            setSelectedProduct( null )
            setNewData( { name: "", description: "", picture: null } )
            loadProducts()
            setBtnLoading( false )
        } catch ( err )
        {
            toast.dismiss()
            toast.error( "Gagal mengupdate profil: " + ( err.response?.data?.message || err.message ) )
            setBtnLoading( false )
        }
    }

    const handleFileChange = ( e ) => {
        const file = e.target.files[0]
        if ( file && file.size > 5 * 1024 * 1024 )
        {
            e.target.value = ""
            setPictError( "Ukuran file maksimal 5MB." )
            return
        }
        if ( file )
        {
            setPictError( "" )
            setNewData( { ...newData, picture: file } )
        }
    }

    const handleBulletPoint = () => {
        const selectedText = window.getSelection().toString()

        if ( selectedText.trim() )
        {
            const bulletText = `<span class='bg-emerald-100 font-semibold text-custom-black'>• ${selectedText}</span>`
            document.execCommand( "insertHTML", false, bulletText )
        } else
        {
            document.execCommand(
                "insertHTML",
                false,
                `<span class='bg-emerald-100 font-semibold text-custom-black'>• </span>`
            )
        }
    }

    const handleHighlight = () => {
        const selectedText = window.getSelection().toString()
        if ( !selectedText )
        {
            alert( "Pilih teks yang ingin di-highlight." )
            return
        }

        const highlightedText = `[[highlight]]${selectedText}[[/highlight]]`
        const updatedDescription = newData.description.replace( selectedText, highlightedText )
        setNewData( { ...newData, description: updatedDescription } )
    }

    const renderFormattedDescription = ( description ) => {
        if ( !description ) return { __html: "" }

        let formattedText = description.replace( /\n/g, "<span class='block mb-2'></span>" )

        formattedText = formattedText.replace(
            /\[\[highlight\]\](.*?)\[\[\/highlight\]\]/g,
            '<span class="bg-emerald-100 font-semibold text-custom-black p-2 inline-block rounded-custom-br">$1</span>'
        )

        formattedText = formattedText.replace( /•/g, '<span class="font-bold">•</span>' )

        return { __html: formattedText }
    }

    const resetForm = () => {
        setNewData( {
            name: "",
            description: "",
            picture: null,
        } )
        setNameError( "" )
        setDescError( "" )
        setPictError( "" )
        setSelectedProduct( null )
    }

    useEffect( () => {
        loadProducts()
    }, [] )

    if ( loading ) return <p className="flex justify-center items-center">Loading...</p>
    if ( error ) return <p className="flex justify-center items-center">Error: {error}</p>

    return (
        <div className="mx-auto p-4">
            <VisionMisionForm />
            <h1 className="text-2xl font-bold mb-4">Profil Sumod</h1>
            <div className="flex justify-center md:justify-start lg:justify-start xl:justify-start">
                {Array.isArray( products ) &&
                    products
                        .filter( ( product ) => product.id === 1 )
                        .map( ( product ) => (
                            <div
                                key={product.id}
                                className="p-4 rounded-custom-br overflow-hidden bg-slate-50 shadow-lg w-[250px] h-auto"
                            >
                                <img src={product.picture} alt={product.name} className="rounded-custom-br object-cover mb-2 mx-auto" />
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

            <div className="w-full my-10">
                <div className="border-t-2 border-black mb-2"></div>
                <div className="border-t-2 border-black mt-2"></div>
            </div>

            <h1 className="text-4xl font-bold mb-6">Kenapa harus di Sumod?</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {Array.isArray( products ) &&
                        products
                            .filter( ( product ) => product.id !== 1 )
                            .map( ( product ) => (
                                <div
                                    key={product.id}
                                    className={`p-4 rounded-custom-br overflow-hidden shadow-lg w-[250px] h-auto ${product.id >= 2 && product.id <= 7 ? "bg-white" : "bg-red-200"
                                        }`}
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

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 m-2 md:m-0">
          <div className="flex flex-col lg:flex-row gap-2">

            <div className="bg-white border p-2 md:p-3 lg:p-5 xl:p-6 rounded-lg shadow-lg w-full max-w-md">

                            <h2 className="font-semibold mb-4">Update Profil: "{selectedProduct.name}"</h2>
                            <p className="text-custom-black/40 font-bold">Judul</p>
                            <input
                                type="text"
                                placeholder="Judul Baru"
                                value={newData.name}
                                onChange={( e ) => {
                                    setNewData( { ...newData, name: e.target.value } )
                                    if ( nameError ) setNameError( "" )
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
                                onChange={( e ) => {
                                    setNewData( { ...newData, description: e.target.value } )
                                    if ( descError ) setDescError( "" )
                                }}
                                className="border p-2 w-full h-40"
                            ></textarea>
                            {descError && (
                                <div className="text-red-500 font-semibold text-sm mb-4">
                                    {descError}
                                </div>
                            )}
                            <div className="mb-3 flex justify-center">
                                <button onClick={handleBulletPoint} className="border border-gray-300 p-2 rounded mr-2">
                                    <ListBulletIcon className="h-5 w-5 text-custom-black" />
                                </button>

                                <button onClick={handleHighlight} className="border border-gray-300 p-2 rounded ">
                                    <PencilIcon className="h-5 w-5 text-emerald-600" />
                                </button>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="border p-2 w-full mt-2"
                            />
                            {pictError && <div className="text-red-500 font-semibold text-sm mb-4">{pictError}</div>}
                            <div className="flex justify-end space-x-2 mt-4">
                                <button
                                    className="bg-sidebar text-white px-4 py-2 rounded"
                                    onClick={() => handleUpdate( selectedProduct.id )}
                                    disabled={btnLoading} // Menonaktifkan tombol saat loading
                                >
                                    {btnLoading ? <BallTriangle className="h-7 w-7" /> : "Simpan Perubahan"}
                                </button>

                                <button className="bg-red-400 text-white px-4 py-2 rounded" onClick={resetForm}>
                                    Batal
                                </button>
                            </div>
                        </div>
                        <div className="bg-white border p-2 md:p-3 lg:p-5 xl:p-6 rounded-lg shadow-lg w-full max-w-md">
                            <h3 className="font-semibold">Preview Deskripsi:</h3>
                            <div
                                className="border p-2 w-full mt-2 h-auto bg-slate-50 max-h-[100px] md:max-h-[450px] overflow-y-auto"
                                dangerouslySetInnerHTML={renderFormattedDescription( newData.description )}
                            ></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminProfil
