import { useMutation, useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'
import APIFormData from '../services/AxiosInstanceFormdata'
// import { formatError, showSuccess } from "../utilities/messagePopup";

export const useUserProfile = () => {
  return useMutation({
    mutationFn: (formData) => {
      return APIFormData.post(`/profile/edit`, formData)
    },
  })
}

export const useGetSummery = () => {
  return useQuery({
    queryKey: ['get-summary'],
    queryFn: async () => {
      const res = await API.get(`/get-summary`)
      return res?.data?.value
    },
  })
}

export const useGetSuccessFulTransaction = () => {
  return useQuery({
    queryKey: ['get-succesful-payments'],
    queryFn: async () => {
      const res = await API.get(`/get-succesful-payments`)
      console.log(res?.data?.value?.data, 'resss')
      return res?.data?.value?.data
    },
  })
}
