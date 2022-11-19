import axios from "axios";

function postSignUp(body) {
    return axios.post("http://localhost:5000/sign-up", body);
}
function postSignIn(body) {
    return axios.post("http://localhost:5000/sign-in", body);
}
function postSignOut(config){
    return axios.post("http://localhost:5000/sign-out", config);
}
function getRegistries(config) {
    return axios.get("http://localhost:5000/transactions", config);
}
function postNewRegistries(body, config) {
    return axios.post("http://localhost:5000/credit", body, config);
}
function postOutRegistries(body, config){
    return axios.post("http://localhost:5000/debit", body, config);
}
function deleteTransactionsCredit(id, config){
    return axios.post(`http://localhost:5000/credit/${id}`, config);
}
function deleteTransactionsDebit(id, config){
    return axios.post(`http://localhost:5000/debit/${id}`, config);
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