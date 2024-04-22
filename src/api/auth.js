import { useMutation } from '@tanstack/react-query'
import { API_LOGIN } from '../services/AxiosInstance'

export const useLoginUser = () => {
  return useMutation({
    mutationFn: ({ data }) => {
      return API_LOGIN.post(`/login`, data)
    },
  })
}
