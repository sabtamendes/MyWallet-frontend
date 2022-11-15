import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { postSignIn } from "../../services/Services";
import styled from "styled-components";

export default function SignIn({ loginResponse, setLoginResponse }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();

    function userLogin(e) {
        e.preventDefault();
        const body = {
            email,
            password
        }

        postSignIn(body)
            .then(res => {
                setLoginResponse(res.data)
                navigate("/cadastro");
            })
            .catch(err => {
                alert("Verifique se os dados foram digitados corretamente");
                setDisabled(false);
            })

        if (loginResponse === undefined) {
            return setDisabled(true);
        }
    }
        return (
            <Container>
                <Title>MyWallet</Title>

                <Form onSubmit={userLogin}>

                    <input
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="E-mail"
                        disabled={disabled}
                        required
                    />
                    <input
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Senha"
                        disabled={disabled}
                        required
                    />

                    <button type="submit">Entrar</button>
                </Form>

                <StyledLink to={"/cadastro"}>Primeira vez? Cadastre-se!</StyledLink>

            </Container>
        )
    }

    const Container = styled.div`
    height: 200vw;
    padding:15%;
    background-color: #8C11BE;
`
    const Title = styled.h1`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:130px;
    font-size:35px;
    color: #FFFFFF;
    font-family: 'Saira Stencil One', cursive;
`
    const Form = styled.div`
   margin-top: 8vh;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -5%;
    margin-bottom:15%;
    width: 76vw;
    height: 6vh;
    font-weight:600;
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    color: #FFFFFF;
    background-color:#A328D6;
    border-radius: 5px;
    border:none;
}
`
    const StyledLink = styled(Link)`
    margin-top:5%;
    margin-left:20%;
    font-size:15px;
    font-weight: bold;
    color: #ffffff;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
`