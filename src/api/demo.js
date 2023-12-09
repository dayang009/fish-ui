import axios from 'axios'

export function articleGetAllService() {
  axios.get('http://localhost:8080')
    .then(result => {
      return result.data
    })
    .catch(error => {
      console.log(error)
    })
}
