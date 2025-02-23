import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { toast } from "react-toastify"

const baseURL_api = process.env.REACT_APP_API_BASE_URL || "https://api.sunatmodern.co.id"

const axiosInstance = axios.create( {
	baseURL: baseURL_api,
	timeout: 10000,
} )

const isTokenExpired = ( token ) => {
	try
	{
		const decoded = jwtDecode( token )
		return decoded.exp < Date.now() / 1000
	} catch ( error )
	{
		return true
	}
}

export const setupAxiosInterceptors = ( navigate ) => {
	axiosInstance.interceptors.request.use(
		async ( config ) => {
			let token = localStorage.getItem( "accessToken" )
			let refreshToken = localStorage.getItem( "refreshToken" )

			if ( token && isTokenExpired( token ) )
			{
				if ( refreshToken && !isTokenExpired( refreshToken ) )
				{
					try
					{
						const response = await axios.post( `${baseURL_api}/auth/refresh-token`, { refreshToken } )
						const newAccessToken = response.data.accessToken
						localStorage.setItem( "accessToken", newAccessToken )
						config.headers.Authorization = `Bearer ${newAccessToken}`
					} catch ( error )
					{
						toast.dismiss()
						toast.warn( "Sesi kadaluwarsa. Silahkan masuk kembali." )
						localStorage.clear()
						navigate( "/signin" )
						return Promise.reject( error )
					}
				} else
				{
					toast.dismiss()
					toast.info( "Sesi berakhir. Silahkan masuk kembali." )
					localStorage.clear()
					navigate( "/signin" )
					return Promise.reject( "Refresh token expired" )
				}
			} else if ( token )
			{
				config.headers.Authorization = `Bearer ${token}`
			}

			return config
		},
		( error ) => Promise.reject( error )
	)

	axiosInstance.interceptors.response.use(
		( response ) => response,
		( error ) => {
			if ( error.response?.status === 401 )
			{
				localStorage.clear()
				navigate( "/signin" )
			}
			return Promise.reject( error )
		}
	)
}

setupAxiosInterceptors()

export default axiosInstance