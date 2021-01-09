import axios from 'axios';

const API_URL = 'https://ag-sds2-dsdeliver.herokuapp.com'
export function fetchProducts() {

    return axios(`${API_URL}/products`)
    
}