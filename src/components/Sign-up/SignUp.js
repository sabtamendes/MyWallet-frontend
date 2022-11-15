import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  postSignUp } from "../../services/Services";
import { BeatLoader } from "react-spinners";

export default function SignUp() {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [responseVerification, setResponseVerification] = useState(undefined);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function register(e) {
        e.preventDefault();

        const body = { ...form }

        postSignUp(body)
            .then(res => {
                setResponseVerification(res.data)
                navigate("/");
            })
            .catch(err => {
                //alert(err.message)
                alert("erro")
                setDisabled(false)
            })
        if (responseVerification === undefined) {
            return setDisabled(true)
        }
    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={register}>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    type="text"
                    placeholder="Nome"
                    disabled={disabled}
                    required
                />
                <input
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    type="text"
                    placeholder="E-mail"
                    disabled={disabled}
                    required
                />
                <input
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                    type="text"
                    placeholder="Senha"
                    disabled={disabled}
                    required
                />
                <input
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleForm}
                    type="text"
                    placeholder="Confirme a senha"
                    disabled={disabled}
                    required
                />
                    <button type="submit" disabled={disabled}>
                    {disabled ?
                        <BeatLoader
                            size={12}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            color="#ffffff"
                            timeout={3000}
                        />
                        : 'Cadastrar'}
                </button>
                <StyledLink to={"/"}>Já tem uma conta? Entre agora!</StyledLink>
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
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:50px;
    font-size:35px;
    color: #FFFFFF;
    font-family: 'Saira Stencil One', cursive;
`
const StyledLink = styled(Link)`
    margin-top:5%;
    margin-left:12%;
    font-size:15px;
    font-weight: bold;
    color: #FFFFFF;
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
`