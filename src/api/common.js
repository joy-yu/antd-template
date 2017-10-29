import axios from 'axios'

const common = {
    areaList: params => axios.get(`/api/v1/citys`, {params:params})
}

export default common
