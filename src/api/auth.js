import axios from 'axios'

let base = '/api/v1'

const auth = {
    login   : params => axios.post(`${base}/login`, params),
    logout  : params => axios.get(`${base}/logout`),
    register: params => axios.post(`${base}/register`, params),
}
export default auth
