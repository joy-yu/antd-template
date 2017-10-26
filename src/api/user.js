import axios from 'axios';


let base = '/api/v1/users';

const user = {
    getList: params => {return axios.get(`${base}`, {params:params});},
    getDetail: id => {return axios.get(`${base}/`+ id);},
    delete: id => {return axios.delete(`${base}/` + id);},
    add: params => {return axios.post(`${base}`, params);},
    update: params => {return axios.put(`${base}/` + params.id, params);},
    updateCurrent: params => {return axios.post(`${base}/`, params)},
    hasThisUser: phone => {return axios.post('/api/v1/users_b/checkMobile',{mobile: phone})},
    getRelateProject: id=> {return axios.get('/api/v1/relatePI/'+id);},
    submitRelate: (id) => {return axios.post('/api/v1/relatePI/'+id);}
}

export default user
