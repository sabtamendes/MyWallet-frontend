import axios from "axios";

function postSignUp(body) {
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, body);
}
function postSignIn(body) {
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, body);
}
function postSignOut(config){
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-out`, config);
}
function getRegistries(config) {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/transactions`, config);
}
function postNewRegistries(body, config) {
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/credit`, body, config);
}
function postOutRegistries(body, config){
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/debit`, body, config);
}
function deleteTransactionsCredit(id, config){
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/credit/${id}`, config);
}
function deleteTransactionsDebit(id, config){
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/debit/${id}`, config);
}
export {
    postSignUp,
    postSignIn,
    postSignOut,
    getRegistries,
    postNewRegistries,
    postOutRegistries,
    deleteTransactionsCredit,
    deleteTransactionsDebit
}