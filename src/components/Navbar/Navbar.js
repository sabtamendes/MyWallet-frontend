import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { deleteSignOut } from "../../services/Services";

export default function Navbar() {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
         if (!localStorage.getItem("token")) {
             navigate("/");
         }
     })
    
async function logginOut(){

    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }
  await  deleteSignOut(config)
    .then(res => {
        console.log(res.status, res.data, "aquii")
        localStorage.removeItem("token");
       setTimeout(navigate("/"), 0);
    })
    .catch(err => {
        console.error(err)
       
    })
}
    return (
        <Header>
            <span>Olá, {userData.name.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())}</span>
            <IoExitOutline color="#ffffff" size="37px"  onClick={logginOut}/>
        </Header>
    )
}

const Header = styled.div`
position: fixed;
top: 0;
left:0;
z-index: 2;
width: 100%;
height: 10vh;
background-color: #8C11BE;
display: flex;
justify-content: space-between;
padding-top: 40px;
padding-left: 25px;
padding-right: 25px;
span{
    font-family: Raleway;
    font-size: 26px;
    color: #ffffff;
    font-weight: bold;
    padding-top:10px;
}
`