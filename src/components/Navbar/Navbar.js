import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Navbar() {
    const { userData } = useContext(UserContext);
    return (
        <Header>
            <span>Olá, {userData.name}</span>
            <IoExitOutline color="#ffffff" size="37px" />
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