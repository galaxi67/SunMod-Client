import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Upload, message, Button, Modal } from 'antd'
import { fetchVisionMission, updateVisionMission } from '../api/apiService'
import { AreaChartOutlined, EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const VisionMisionForm = () => {
	const [newData, setNewData] = useState( {
		vision: '',
		mission: '',
		name: '',
		description: '',
		picture: null,
	} )
	const [previewOpen, setPreviewOpen] = useState( false )
	const [previewImage, setPreviewImage] = useState( '' )
	const [file, setFile] = useState( null )
	const [loading, setLoading] = useState( false ) // Add loading state
	const navigate = useNavigate()

	useEffect( () => {
		const loadVisionMission = async () => {
			try
			{
				const data = await fetchVisionMission()
				setNewData( {
					vision: data.vision,
					mission: data.mission,
					name: data.name,
					description: data.description,
					picture: data.picture || '',
				} )
			} catch ( error )
			{
				console.error( 'Error loading vision and mission data:', error )
			}
		}

		loadVisionMission()
	}, [navigate] )

	const handleSubmit = async ( e ) => {
		e.preventDefault()

		if ( !newData.vision || !newData.mission || !newData.name || !newData.description )
		{
			toast.error( 'Harap lengkapi semua field.' )
			return
		}

		const formData = new FormData()
		formData.append( 'vision', newData.vision )
		formData.append( 'mission', newData.mission )
		formData.append( 'name', newData.name )
		formData.append( 'description', newData.description )

		if ( file )
		{
			formData.append( 'picture', file )
		}

		try
		{
			setLoading( true ) // Start loading
			await updateVisionMission( formData )
			toast.success( 'Visi dan Misi berhasil diperbarui' )
			setTimeout( () => {
				navigate( 0 )
			}, 2000 )
		} catch ( error )
		{
			console.log( 'Terjadi kesalahan saat menyimpan data', error )
			toast.error( 'Terjadi kesalahan saat menyimpan data' )
		} finally
		{
			setLoading( false ) // Stop loading after the request is done
		}
	}

	const handlePreview = ( file ) => {
		setPreviewImage( file.url || file.preview || '' )
		setPreviewOpen( true )
	}

	const handleChange = ( { fileList } ) => {
		if ( fileList && fileList.length > 0 )
		{
			// Get the last file from the file list (the most recent one)
			const newFile = fileList[fileList.length - 1]

			// Check if the file is either uploading or already uploaded
			if ( newFile.status === 'done' || newFile.status === 'uploading' )
			{
				// Create a preview URL if it doesn't exist
				if ( !newFile.preview )
				{
					newFile.preview = URL.createObjectURL( newFile.originFileObj )
				}

				// Update the file state with the selected file
				setFile( newFile.originFileObj )

				// Set the preview image to the new file's preview
				setPreviewImage( newFile.preview )

				// Open the preview modal with the new image
				setPreviewOpen( true )

				// Update the picture in the form data
				setNewData( ( prevData ) => ( {
					...prevData,
					picture: newFile.preview, // Set picture to preview URL
				} ) )
			}
		}
	}




	const beforeUpload = ( file ) => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
		if ( !isJpgOrPng )
		{
			message.error( 'You can only upload JPG/PNG file!' )
		}
		const isLt2M = file.size / 1024 / 1024 < 2
		if ( !isLt2M )
		{
			message.error( 'Image must be smaller than 2MB!' )
		}
		return isJpgOrPng && isLt2M
	}

	return (
		<div>
			<h1 className="text-4xl font-bold mb-4">Profil Sumod</h1>
			<div className="my-4 px-5">
				<div className="bg-white border p-2 md:p-3 lg:p-5 xl:p-6 rounded-lg shadow-lg w-full">
					<p className="font-bold mt-2">Visi</p>
					<textarea
						placeholder="Silahkan input visi"
						value={newData.vision}
						onChange={( e ) => setNewData( { ...newData, vision: e.target.value } )}
						className="border p-2 w-full h-40"
					></textarea>

					<p className="font-bold mt-2">Misi</p>
					<textarea
						placeholder="Silahkan input misi"
						value={newData.mission}
						onChange={( e ) => setNewData( { ...newData, mission: e.target.value } )}
						className="border p-2 w-full h-40"
					></textarea>

					<p className="font-bold mt-2">Nama</p>
					<input
						type="text"
						placeholder="Silahkan input nama"
						value={newData.name}
						onChange={( e ) => setNewData( { ...newData, name: e.target.value } )}
						className="border p-2 w-full"
					/>

					<p className="font-bold mt-2">Deskripsi</p>
					<textarea
						placeholder="Silahkan input deskripsi"
						value={newData.description}
						onChange={( e ) => setNewData( { ...newData, description: e.target.value } )}
						className="border p-2 w-full h-40"
					></textarea>

					<p className="font-bold mb-1">Upload Image</p>
					<Upload
						name="avatar"
						listType="picture-card"
						showUploadList={false}
						beforeUpload={beforeUpload}
						onChange={handleChange}
						onPreview={handlePreview}
						customRequest={( { file, onSuccess } ) => onSuccess( 'ok' )}
					>
						<div className="relative w-full h-full group">
							{newData.picture ? (
								<>
									{/* When a file is uploaded */}
									<img
										src={newData.picture}
										alt="avatar"
										style={{
											height: '100%',
											borderRadius: '8px',
										}}
									/>
									<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-sm font-medium transition-opacity duration-300 group-hover:bg-opacity-70">
										<AreaChartOutlined  />
										Edit
									</div>
								</>
							) : (
								<>
									{/* When no file is uploaded */}
									<div className="absolute top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm font-medium transition-opacity duration-300 group-hover:text-gray-700">
										<AreaChartOutlined />
										Upload
									</div>
								</>
							)}
						</div>
					</Upload>









					<Modal
						visible={previewOpen}  // Modal visibility is controlled by previewOpen state
						footer={null}  // No footer is needed for the preview
						onCancel={() => setPreviewOpen( false )}  // Close modal when the user clicks 'Cancel'
					>
						<img
							alt="preview"
							style={{
								height: '100%',
								borderRadius: '8px',
							}}
							src={previewImage}  // Display the preview image from state
						/>
					</Modal>

					<div className="flex justify-end space-x-2 mt-4">
						<Button
							type="primary"
							loading={loading}
							onClick={handleSubmit}
							disabled={loading}
							className="bg-sidebar"
						>
							Simpan
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VisionMisionForm
