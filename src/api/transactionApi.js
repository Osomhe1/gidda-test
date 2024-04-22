import { useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'

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
      return res?.data?.value?.data
    },
  })
}

export const useGetExpectedTransaction = () => {
  return useQuery({
    queryKey: ['get-expected-payments'],
    queryFn: async () => {
      const res = await API.get(`/get-expected-payments`)
      return res?.data?.value?.data
    },
  })
}

export const useGetDefaultTransaction = () => {
  return useQuery({
    queryKey: ['get-missed-payments'],
    queryFn: async () => {
      const res = await API.get(`/get-missed-payments`)
      return res?.data?.value?.data
    },
  })
}
