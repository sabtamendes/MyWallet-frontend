import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
//import { postSignOut } from "../../services/Services";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();

    // async function signOut() {
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${userData.token}`
    //         }
    //     }
    //     try {

    //         await postSignOut(config)

    //         navigate("/")

    //     } catch (err) { console.log(err.response) }
    // }

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/");
        }
    })

    return (
        <Header>
            <span>Olá, {userData.name}</span>
            <IoExitOutline color="#ffffff" size="37px" onClick={() => { localStorage.removeItem("token") }} />
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