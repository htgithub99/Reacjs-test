import http from '../httpRequest'

const get = () => {
    return http.get(`dashboard`)
}

// eslint-disable-next-line
export default {
    get
}

