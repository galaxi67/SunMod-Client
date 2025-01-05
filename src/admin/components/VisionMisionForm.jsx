import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { fetchVisionMission, updateVisionMission } from '../api/apiService'
import { useNavigate } from "react-router-dom"

export default function VisionMisionForm() {
	const [vision, setVision] = useState( '' )
	const [mission, setMission] = useState( '' )
	const navigate = useNavigate()


	useEffect( () => {
		const loadVisionMission = async () => {
			try
			{
				const { vision, mission } = await fetchVisionMission()
				setVision( vision )
				setMission( mission )
			} catch ( error )
			{
				console.error( "Error loading user data:", error )
			}
		}

		loadVisionMission()
	}, [navigate] )

	const handleSubmit = async ( e ) => {
		e.preventDefault()
		try
		{
			await updateVisionMission( vision, mission )
			toast.success( 'Visi dan Misi berhasil diperbarui' )
		} catch ( error )
		{
			console.log( 'Terjadi kesalahan saat menyimpan data', error )
		}
	}


	return (
		<div>
			<h1 className="text-4xl font-bold mb-4">Visi Misi</h1>
			<div className="my-10 px-5">
				<div className="bg-white border p-2 md:p-3 lg:p-5 xl:p-6 rounded-lg shadow-lg w-full">
					<p className="text-custom-black/40 font-bold">Visi</p>
					<textarea
						type="text"
						placeholder="Silahkan input visi"
						value={vision}
						onChange={( e ) => setVision( e.target.value )}
						className="border p-2 w-full h-40"
					></textarea>
					<p className="text-custom-black/40 font-bold mt-2">Misi</p>
					<textarea
						id="description"
						placeholder="Silahkan input misi"
						className="border p-2 w-full h-40"
						value={mission}
						onChange={( e ) => setMission( e.target.value )}
					></textarea>
					<div className="flex justify-end space-x-2 mt-4">
						<button
							className="bg-sidebar text-white px-4 py-2 rounded"
							onClick={handleSubmit}
						>
							Simpan
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
