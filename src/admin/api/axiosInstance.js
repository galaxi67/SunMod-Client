import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify"

const baseURL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";
const axiosInstance = axios.create({ baseURL, timeout: 10000 });

let isRefreshing = false;
let refreshSubscribers = [];

const isTokenExpired = (token) => {
    try {
        return jwtDecode(token).exp < Date.now() / 1000;
    } catch {
        return true;
    }
};

const refreshAuthToken = async (navigate) => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
        return null;
    }

    try {
        const { data } = await axios.post(`${baseURL}/auth/refresh-token`, { refreshToken });

        localStorage.setItem("accessToken", data.accessToken);
        return data.accessToken;
    } catch (error) {
				toast.dismiss()
				toast.info( "Sesi kadaluwarsa. Silahkan masuk kembali." )
        localStorage.clear();
				navigate("/signin")
        throw error;
    }
};


export const setupAxiosInterceptors = (navigate) => {
	
    axiosInstance.interceptors.request.use(async (config) => {
        if (config.url === "/auth/refresh-token") return config;

        let accessToken = localStorage.getItem("accessToken");

        if (!accessToken || isTokenExpired(accessToken)) {
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    accessToken = await refreshAuthToken(navigate);
                    isRefreshing = false;
                } catch {
                    return Promise.reject();
                }
            } else {
                return new Promise((resolve) => {									
                    refreshSubscribers.push((token) => {
                        config.headers.Authorization = `Bearer ${token}`;
                        resolve(config);
                    });
                });
            }
        }

        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
    });

    axiosInstance.interceptors.request.use((config) => {
			const accessToken = localStorage.getItem("accessToken");
			
			if (!accessToken && config.url !== "/auth/login" && config.url !== "/auth/refresh-token") {
					return Promise.reject({ message: "No access token available" });
			}

			if (accessToken) {
					config.headers.Authorization = `Bearer ${accessToken}`;
			}
			return config;
		});


}

setupAxiosInterceptors();

export default axiosInstance;
