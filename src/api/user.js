import axios from 'axios'

let base = '/api/v1/users'

const user = {
    getList  : params => axios.get(`${base}`, {params:params}),
    getDetail: id     => axios.get(`${base}/${id}`),
    delete   : id     => axios.delete(`${base}/${id}`),
    add      : params => axios.post(`${base}`, params),
    update   : params => axios.put(`${base}/${params.id}`, params),
}

export default user
