import _axios from '../core/axios'
import endpoint from '../constants/endpoints'


export async function searchApi(trem) {
    const response = await _axios.get(`${endpoint.YELP_BASE_URL}/search`, {
        params: {
            limit: 50,
            trem,
            location: 'NYC'
        }
    })
    return response.data
}

export async function getSearchApiById(id) {
    const response = await _axios.get(`${endpoint.YELP_BASE_URL}/${id}`)
    return response.data
}

export default { searchApi, getSearchApiById }