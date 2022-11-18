import axios from "axios";

function postSignUp(body) {
    return axios.post("http://localhost:5000/sign-up", body);
}
function postSignIn(body) {
    return axios.post("http://localhost:5000/sign-in", body);
}
function getRegistries(config) {
    return axios.get("http://localhost:5000/transactions", config);
}
function postNewRegistries(body, config) {
    return axios.post("http://localhost:5000/credit", body, config);
}
function postOutRegistries(body, config){
    return axios.post("http://localhost:5000/debit", body, config)
}
export {
    postSignUp,
    postSignIn,
    getRegistries,
    postNewRegistries,
    postOutRegistries
}