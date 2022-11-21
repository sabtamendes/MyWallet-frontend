import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/Services";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function SignUp() {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
           return alert("Senhas informadas estão diferentes!");
        }
        const body = { ...form }

        postSignUp(body)
            .then(res => {
                navigate("/");
            })
            .catch(err => {
                console.log(err.message)
                alert("Deu erro ao cadastrar! Por favor tente novamente!");
            })
    }
    const handleShow = () => {
            return setShowOne(!showOne)
    }
    const handleShowTwo = ()=>{
        return setShowTwo(!showTwo)
    }
    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    type="text"
                    placeholder="Nome"
                    required
                />
                <input
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    type="text"
                    placeholder="E-mail"
                    required
                />
                <input
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                    type={showOne ? "text" : "password"}
                    placeholder="Senha"
                    required
                />
                 <IconOne onClick={handleShow}>{showOne ? <IoEyeOutline color="#000000" size="20px" /> : <IoEyeOffOutline color="#000000" size="20px" />}</IconOne>
                <input
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleForm}
                    type={showTwo ? "text" : "password"}
                    placeholder="Confirme a senha"
                    required
                />
                 <IconTwo onClick={handleShowTwo}>{showTwo ? <IoEyeOutline color="#000000" size="20px" /> : <IoEyeOffOutline color="#000000" size="20px" />}</IconTwo>
                <button type="submit">Cadastrar</button>

                <StyledLink to={"/"}>
                    Já tem uma conta? Entre agora!
                </StyledLink>
            </Form>

        </Container>
    )
}
const Container = styled.div`
    height: 210vw;
    padding:15%;
    background-color: #8C11BE;
`
const Form = styled.form`
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
const IconOne = styled.span`
    position:absolute;
    top:43%;
    right: 16%;
    z-index:3;
    padding-top:30px;
`
const IconTwo = styled.span`
    position:absolute;
    top:51.2%;
    right: 16%;
    z-index:3;
    padding-top:30px;
`