import axios from 'axios'

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