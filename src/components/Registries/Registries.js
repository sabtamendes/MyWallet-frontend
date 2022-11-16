import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

export default function Registries() {
    return (
        <>
            <Navbar />
            <Container>
                <ListTransactions>
                    <span>Não há registros de 
                        <br>
                    </br> entrada ou saída</span>
                </ListTransactions>
            </Container>
        </>
    )
}

const Container = styled.div`
background-color: #8C11BE;
height: 120vh;
position: fixed;
right:0;
left:0;
top: 0;
`
const ListTransactions = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 62vh;
padding: 10%;
margin-top: 120px;
margin-right: 25px;
margin-left: 25px;
margin-bottom: 50px;
border-radius: 10px;
background-color: #ffffff;
color: #868686;
font-family: Raleway;
fon-size:20px;
span{
    display:flex;
    justify-content: center;
    align-items:center;
}
`