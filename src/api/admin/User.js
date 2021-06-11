import http from '../httpRequest'

const get = () => {
    return http.get(`user`)
}


// eslint-disable-next-line
export default {
    get
}