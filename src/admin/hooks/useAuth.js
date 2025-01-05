import axiosInstance from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const useAuth = () => {
  const navigate = useNavigate()

  const login = async ( email, password ) => {
    try
    {
      const response = await axiosInstance.post( '/auth/login', { email, password } )
      const { accessToken, refreshToken } = response.data
      localStorage.setItem( 'accessToken', accessToken )
      localStorage.setItem( 'refreshToken', refreshToken )
    } catch ( error )
    {
      if (error.response?.data?.message === "Invalid Credentials") throw new Error( "Email atau Password tidak valid" )
      
      throw new Error( error.response?.data?.message || "Login failed. Please check your credentials." )
    }
  }

  const logout = () => {
    localStorage.removeItem( "accessToken" )
    localStorage.removeItem( "refreshToken" )
    navigate( '/signin' )
  }

  const logoutUser = async () => {
    const refreshToken = localStorage.getItem( "refreshToken" )

    try
    {
      await axiosInstance.post( '/auth/logout', { refreshToken } )
      logout()
    } catch ( error )
    {
      toast.error( 'Error during logout:', error )
    }
  }


  return { login, logout, logoutUser }
}

export default useAuth
