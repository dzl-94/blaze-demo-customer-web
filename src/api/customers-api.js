import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_ENDPOINT;

export function getCustomersAPI(data) {
    return axios.get(`${baseUrl}/api/v1/customers/`);
}

export function createCustomersAPI(data){
    return axios.post(`${baseUrl}/api/v1/customers/`,data);
}

export function editCustomerAPI(customerId, data){
    return axios.post(`${baseUrl}/api/v1/customers/${customerId}`,data);
}

export function deleteCustomerAPI(customerId){
    return axios.post(`${baseUrl}/api/v1/customers/${customerId}/delete`);
}

export function getCustomersPageAPI(data) {
    return axios.get(`${baseUrl}/api/v1/customers/?size=${data.size}&page=${data.page}`);
}