import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { getRegistries } from "../../services/Services";
import Registrie from "./Registrie";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";


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
                console.error(err);
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

                <Footer />

            </Container>
        </>
    )
}

const Container = styled.div`
background-color: #8C11BE;
height: 100vh;
`
const ListTransactionsEmpty = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 62vh;
padding: 10%;
margin-top: 120px;
margin-right: 25px;
margin-left: 25px;
margin-bottom: 50px;
border-radius: 5px;
background-color: #ffffff;
color: #868686;
font-family: Raleway;
font-size:20px;
span{
    display:flex;
    justify-content: center;
    align-items:center;
}
`
const ListTransactions = styled.div`
width: 60%;
height: 50vh;
padding-top: 11%;
position:fixed;
top: 18%;
left: 20%;
border-radius: 10px;
background-color: #ffffff;
color: #868686;
font-family: Raleway;
`
