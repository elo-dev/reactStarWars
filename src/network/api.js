import axios from 'axios'
import { HTTP, HTTPS } from '@constants/api'

export const changeHTTP = url => {
  return url ? url.replace(HTTP, HTTPS) : url
}

export const getApiResource = async (url) => {
  const res = axios.get(url)
    .then((res) => {

      if(!res.status === 200){
        console.error('Could not fetch.', res.status)
        return false
      }

      return res.data
    })
    .catch((error) => {
      console.error(error)
      return false
    })
  return res
}

export const makeConcurrentRequest = async (url) => {
  const films = await Promise.all(url.map(res => {
    return axios.get(res).then(res => res.data)
  }))

  return films
}