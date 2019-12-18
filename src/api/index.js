import axios from 'axios'

// axios.defaults.withCredentials = true

const request = ({ method, url, data }) => {
  return axios({
    method,
    url,
    data,
  })
}

export const eventApi = {
  fetch() {
    return request({
      method: 'get',
      url: './static-web/event.json',
    }).then(result => result.data)
    // throw Error('dfdf')
  },
}
