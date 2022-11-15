import axios from "axios";

function postRegister(body) {
    return axios.post("http://localhost:5000/sign-up", body)
}


export{
    postRegister
}