import axios from 'axios'

// *** API SETUP ***/

const API = axios.create({
  baseURL: `https://dev-api.giddaa.com/developer/transaction`,
})

API.interceptors.request.use((req) => {
  const token = JSON.parse(localStorage.getItem('signup_token'))?.state?.token
  const access_token = JSON.parse(localStorage.getItem('access_token'))?.state
    ?.token
  req.headers['signup_token'] = token
  req.headers['access_token'] = access_token
  req.headers['Authorization'] = `Bearer ${access_token}`
  req.headers['Content-type'] = 'application/json'
  req.headers['Accept'] = 'application/json'
  req.headers['CALLBACK-URL'] = window.location.origin + `/dashboard/payment`
  return req
})

export default API

export const API_LOGIN = axios.create({
  baseURL: ` https://dev-api.giddaa.com/account`,
})

API_LOGIN.interceptors.request.use((req) => {
  const access_token = JSON.parse(localStorage.getItem('access_token'))?.state
    ?.token
  req.headers['access_token'] = access_token
  req.headers['Authorization'] = `Bearer ${access_token}`
  req.headers['Content-type'] = 'application/json'
  req.headers['Accept'] = 'application/json'
  return req
})
