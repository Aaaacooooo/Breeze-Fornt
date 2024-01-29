import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://acoray.informaticamajada.es',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true
})

export default axios
