import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/Services";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import swal from "sweetalert2";
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
        if (form.password.length <= 5) {
            return alert("Senha deve ter pelo menos 6 dígitos!");
        }
        const body = { ...form }

        postSignUp(body)
            .then(res => {
                navigate("/");
            })
            .catch(err => {
                if(err.response.data.message === "Email já está em uso!" || err.response.data.includes('"email" must be a valid email')){
                    return swal.fire({
                        title: 'Digite um email válido!',
                        icon: 'error',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                }
            })
    }
    const handleShow = () => {
        return setShowOne(!showOne);
    }
    const handleShowTwo = () => {
        return setShowTwo(!showTwo);
    }
    return (
        <Container>
        <Title>MyWallet</Title>
        <Form onSubmit={handleSubmit}>

            <Box>
            <input
                name="name"
                value={form.name}
                onChange={handleForm}
                type="text"
                placeholder="Nome"
                required
            />
            </Box>

            <Box>
            <input
                name="email"
                value={form.email}
                onChange={handleForm}
                type="text"
                placeholder="E-mail"
                required
            />
           </Box>

           <Box>
            <input
                name="password"
                value={form.password}
                onChange={handleForm}
                type={showOne ? "text" : "password"}
                placeholder="Senha"
                required
            />
            <IconOne onClick={handleShow}>{showOne ? <IoEyeOutline color="#000000" size="20px" /> : <IoEyeOffOutline color="#000000" size="20px" />}</IconOne>
            </Box>

            <Box>
            <input
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleForm}
                type={showTwo ? "text" : "password"}
                placeholder="Confirme a senha"
                required
            />
            <IconTwo onClick={handleShowTwo}>{showTwo ? <IoEyeOutline color="#000000" size="20px" /> : <IoEyeOffOutline color="#000000" size="20px" />}</IconTwo>
            </Box>

            <Box>
            <button type="submit">Cadastrar</button>
            </Box>
            

            <StyledLink to={"/"}>
                Já tem uma conta? Entre agora!
            </StyledLink>
        </Form>

    </Container>
)
}
const Container = styled.div`
width: 100%;
padding: 10px;
height: 100vh;
background-color: #8C11BE;
`
const Form = styled.form`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 18vh;
  button {
    margin-top: 6%;
    width: 38vh;
    padding: 15px;
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
    background-color: #a328d6;
    border-radius: 5px;
    border: none;
    cursor:pointer;
  }
`
const Box = styled.div`
  position: relative;
  input {
    margin-bottom: 4%;
    width: 38vh;
    padding: 15px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    &::placeholder {
      font-family: "Raleway", sans-serif;
      font-size: 16px;
      color: #000000;
    }
  }
`
const Title = styled.h1`
@media (max-width: 900px) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25%;
  font-size: 35px;
  color: #ffffff;
  font-family: "Saira Stencil One", cursive;
 }
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  font-size: 35px;
  color: #ffffff;
  font-family: "Saira Stencil One", cursive;
`
const StyledLink = styled(Link)`
 display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-left: 5px;
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  text-decoration: none;
`
const IconOne = styled.i`
position:absolute;
top:22%;
right: 9%;
`
const IconTwo = styled.i`
position:absolute;
top:22%;
right: 9%;
`