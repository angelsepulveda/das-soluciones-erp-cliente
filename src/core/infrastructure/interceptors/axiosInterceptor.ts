import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getVallidationError } from '@/core/infrastructure/utils'

const baseURL = 'YOUR_BASE_URL'

export const AxiosInterceptor = () => {
  const updateHeader = (request: InternalAxiosRequestConfig) => {
    request.headers['Content-Type'] = 'application/json'

    return request
  }

  axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    request.baseURL = `${baseURL}${request.url}`
    return updateHeader(request)
  })

  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      console.log('error', getVallidationError(error.code))
      console.log(error)
    },
  )
}
