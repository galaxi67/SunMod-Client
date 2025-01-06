import axiosInstance from './axiosInstance'

export const fetchVisionMission = async () => {
  try
  {
    const response = await axiosInstance.get( '/vision-mission' )
    return response.data.data
  } catch ( error )
  {
    console.error( 'Error fetching vision and mission:', error )
    throw error
  }
}

export const updateVisionMission = async ( formData  ) => {
  try
  {
    const response = await axiosInstance.put( '/vision-mission', formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data
  } catch ( error )
  {
    console.error( 'Error updating vision and mission:', error )
    throw error
  }
}

export const getUserProfile = async () => {
  try
  {
    const response = await axiosInstance.get( '/auth/profile' )
    return response.data.data
  } catch ( error )
  {
    console.error( 'Error fetching user profile:', error )
    throw error
  }
}

export const fetchUserData = async () => {
  try
  {
    const userData = await getUserProfile()
    return userData
  } catch ( error )
  {
    console.error( 'Error fetching user data:', error )
    throw error
  }
}
