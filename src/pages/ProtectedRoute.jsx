/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom'
import { useGetSummery } from '../api/profileApis'
import LoadingState from '../components/auth/LoadingState'
import toast from 'react-hot-toast'

const ProtectedRoute = ({ children }) => {
  const { data: getSummery, isPending, error } = useGetSummery()

  if (getSummery) {
    return children
  }
  if (error?.response?.status === '401') {
    toast.error('Unauthorized, Please Login!!')
    return <Navigate to='/login' />
  }
  if (isPending) {
    return <LoadingState />
  }

  return <Navigate to='/login' />
}

export default ProtectedRoute
