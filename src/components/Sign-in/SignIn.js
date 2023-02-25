import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { postSignIn } from "../../services/Services";
import styled from "styled-components";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import swal from "sweetalert2";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    const body = {
      email,
      password,
    };

    postSignIn(body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUserData(res.data);
        navigate("/registros");
        setDisabled(false);
        if (userData === undefined) {
          return setDisabled(true);
        }
      })
      .catch((err) => {
        console.error(err);
        return swal.fire({
          title: "Verifique se o seu email ou senha estão corretos!",
          icon: "error",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      });
  }
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Title>MyWallet</Title>

      <Form onSubmit={handleSubmit}>
        <Box>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-mail"
            disabled={disabled}
            required
          />
        </Box>
        <Box>
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Senha"
            disabled={disabled}
            required
          />
          <Icon onClick={handleShow}>
            {show ? (
              <IoEyeOutline color="#000000" size="20px" />
            ) : (
              <IoEyeOffOutline color="#000000" size="20px" />
            )}
          </Icon>
        </Box>
        <Box>
          <button type="submit" disabled={disabled}>
            Entrar
          </button>
        </Box>
      </Form>

      <StyledLink to={"/cadastro"}>Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 10px;
  height: 100vh;
  background-color: #8c11be;
`;
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
`;
const Form = styled.form`
  @media (max-width: 900px) {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
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
  }
  span {
    position: fixed;
    top: 43%;
    right: 16%;
    z-index: 3;
    padding-top: 30px;
  }
}
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
  span {
    position: fixed;
    top: 43%;
    right: 16%;
    z-index: 3;
    padding-top: 30px;
  }
`;
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
`;
const Icon = styled.i`
  position: absolute;
  top: 25%;
  right: 6%;
  cursor: pointer;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  text-decoration: none;
`;

