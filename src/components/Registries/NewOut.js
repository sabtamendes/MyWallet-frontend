import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { postOutRegistries } from "../../services/Services";

export default function NewOut() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const { userData } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(e){
    e.preventDefault();
const config = {
    headers: {
        Authorization: `Bearer ${userData.token}`
    }
}
const body = {value: Number(value), description: description, type: "debit"}
    postOutRegistries(config, body)
    .then((res)=>{
        console.log(res) 
        navigate("/registros")
    })
    .catch(err => {console.log(err)})

    }
    console.log(value, description)
    return (
        <Container>
            <Title>Nova saída</Title>
            <Form onChange={handleSubmit}>
                <input
                    name="value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="number"
                    placeholder="Valor"
                    required
                />
                <input
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Descrição"
                    required
                />

                <StyledButton type="submit">
                    Salvar saída
                </StyledButton>
            </Form>
        </Container>
    )
}
const Container = styled.div`
    height: 200vw;
    padding:15%;
    background-color: #8C11BE;
`
const Form = styled.div`
    margin-top: 80px;
    input{
    margin-left: -5%;
    margin-bottom: 4%;
    width:38vh;
    padding: 15px; 
    border:1px solid #D4D4D4;
    border-radius: 5px;
    &::placeholder{
    font-family: 'Raleway', sans-serif;
    font-size:16px;
    color:#000000;
        }
    }
    button{
    margin-left: -5%;
    margin-bottom:15%;
    width:38vh;
    padding: 15px;
    font-weight:600;
    font-size: 15px;
    color: #FFFFFF;
    background-color:#A328D6;
    border-radius: 5px;
    border:none;
    }
`
const Title = styled.h1`
font-family: 'Raleway', sans-serif;
font-size: 26px;
color: #ffffff;
font-weight: bold;
`
const StyledButton = styled.button`
background-color: #8C11BE;
font-family: 'Raleway', sans-serif;
font-size: 26px;
color: #ffffff;
font-weight: bold;
`