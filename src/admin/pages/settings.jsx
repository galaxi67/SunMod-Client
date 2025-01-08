import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { getUserProfile } from "../api/apiService"
import { Button } from "antd"
import { toast } from "react-toastify"

function Settings() {
  const { logoutUser } = useAuth()
  const [user, setUser] = useState( { name: "N/A", email: "N/A" } )
  const [isLoading, setIsLoading] = useState( true )
  const [loading, setLoading] = useState( false )
  const navigate = useNavigate()

  useEffect( () => {
    const loadProfileData = async () => {
      try
      {
          const userData = await getUserProfile()
          setUser( userData )
        } catch ( error )
      {
        console.error( "Error loading user data:", error )
      } finally
      {
        setIsLoading( false )
      }
    }

    loadProfileData()
  }, [navigate] )

  const handleLogout = () => {
    setLoading( true )
    logoutUser()
    toast.success( "Berhasil keluar" )
    setLoading( false )
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-full flex justify-center items-center min-h-screen">
        <div className="relative flex flex-col break-words h-auto w-[250px] lg:w-[450px] bg-white mb-6 shadow-xl rounded-custom-br">
          <div className="w-full p-10 flex justify-center">
            <img
              alt="User avatar"
              src="https://res.cloudinary.com/dtpxp4yjv/image/upload/v1734639559/products/jg5remlsiqixehj38tp0.png"
              className="shadow-xl p-2 rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 w-24 lg:w-28"
            />
          </div>
          <div className="text-center mt-2 lg:mt-4">
            {isLoading ? (
              <p>Loading data pengguna...</p>
            ) : user.name === "N/A" && user.email === "N/A" ? (
              <p>Data pengguna tidak tersedia</p>
            ) : (
              <>
                <h3 className="text-xl lg:text-3xl font-normal leading-normal text-custom-black">
                  {user.name}
                </h3>
                <div className="text-xs lg:text-sm leading-normal mb-2 lg:mb-8 mt-0 lg:mt-2 text-slate-400 font-bold uppercase">
                  {user.email}
                </div>
              </>
            )}
          </div>
          <div className="text-center mt-4 mb-6">
            <Button
              className="bg-red-500"
              type="primary"
              onClick={handleLogout}
              loading={loading}
              disabled={loading}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
