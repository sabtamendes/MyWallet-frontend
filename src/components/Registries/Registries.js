import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { getRegistries } from "../../services/Services";
import Registrie from "./Registrie";
import Loading from "../Loading/Loading";


export default function Registries() {

    const [registries, setRegistries] = useState("");
    const [loading, setLoading] = useState(true);
    const { userData } = useContext(UserContext);

    useEffect(() => {
        async function listRegistries() {
            const config = {
                headers: {
                    Authorization: `Bearer ${userData.token}`
                }
            }
            try {
                const { data } = await getRegistries(config)
                setRegistries(data);
                setLoading(false);
            } catch (err) {
                console.log(err.response.data.message);
            }
        }
        listRegistries();
    }, [userData.token])

    if (loading || registries === null) {
        return <Loading />
    }
    return (
        <>
            <Navbar />
            <Container>

                {registries.length === 0
                    ?
                    <ListTransactionsEmpty>
                        <span>
                            Não há registros de
                            <br>
                            </br>
                            entrada ou saída
                        </span>
                    </ListTransactionsEmpty>
                    :
                    <ListTransactions>
                        <Registrie registries={registries} />
                    </ListTransactions>
                }

                <Rodape>
                    <Link to="/novaentrada">
                        <EnterBox>
                            <IoAddCircleOutline color="#ffffff" size="30px" />

                            <p>Nova entrada</p>
                        </EnterBox>
                    </Link>
                    <Link to="/novasaida">
                        <OutBox>
                            <IoRemoveCircleOutline color="#ffffff" size="30px" />
                            <p>Nova saída</p>
                        </OutBox>
                    </Link>
                </Rodape>

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
const ListTransactionsEmpty = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 62vh;
padding: 10%;
// word-break: break-all;
// max-width:40vw;
margin-top: 120px;
margin-right: 25px;
margin-left: 25px;
margin-bottom: 50px;
border-radius: 5px;
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
const ListTransactions = styled.div`
height: 62vh;
padding-top:18px;
padding-left: 32px;
margin-top: 120px;
margin-right: 25px;
margin-left: 25px;
margin-bottom: 50px;
border-radius: 5px;
background-color: #ffffff;
color: #868686;
font-family: Raleway;
`
const Rodape = styled.div`
width:100%;
background-color: #8C11BE;
position:fixed;
z-index: 1;
bottom: 0;
right:0;
display: flex;
justify-content: space-between;
`
const EnterBox = styled.button`
background-color: #A328D6;
border-radius: 5px;
border: none;
position: fixed;
bottom:0;
margin-left: 3vh;
margin-bottom: 15px;
width: 20vh;
height: 18vh;
display:flex;
flex-direction: column;
justify-content:space-between;
padding: 10px;
p{
    font-size: 15px;
    font-weight: bold;
    font-family: Raleway;
    color: #ffffff;
    line-break:strict;
    word-break: break-all;
    width: 55px;
            overflow-wrap: break-word;
            word-wrap: break-word;
            word-break: break-word;
}
`
const OutBox = styled.button`
background-color: #A328D6;
border-radius: 5px;
border: none;
margin-bottom: 15px;
margin-right: 3.5vh;
width: 20vh;
height: 18vh;
position:fixed;
bottom: 0;
right: 0;
display:flex;
flex-direction: column;
justify-content:space-between;
padding: 10px;
p{
    font-size: 15px;
    font-weight: bold;
    font-family: Raleway;
    color: #ffffff;
    line-break:strict;
    word-break: break-all;
    width: 55px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
}
`