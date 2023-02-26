import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { postNewRegistries } from "../../services/Services";
import { IoArrowUndoSharp } from "react-icons/io5";
export default function NewEnter() {
  const [form, setForm] = useState({ value: "", description: "" });

  const { userData } = useContext(UserContext);

  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const body = {
      ...form,
      value: Number(form.value),
      type: "credit",
    };
    try {
      await postNewRegistries(body, config);

      alert("Sucesso ao cadastrar nova entrada");
      navigate("/registros");
    } catch (err) {
      alert(err.response.data.message);
    }
  }
  return (
    <Main>
      <Header>
        <Icon
          color="#FFFFFF"
          size="25px"
          onClick={() => navigate("/registros")}
        />
        <Title>Nova entrada</Title>
      </Header>
      <Form onSubmit={handleSubmit}>
        <input
          name="value"
          value={form.value}
          onChange={handleForm}
          type="number"
          placeholder="Valor"
          required
        />
        <input
          name="description"
          value={form.description}
          onChange={handleForm}
          type="text"
          placeholder="Descrição"
          required
        />
        <button type="submit">Salvar entrada</button>
      </Form>
    </Main>
  );
}
const Main = styled.div`
  height: 100vh;
  overflow: hidden;
  background-color: #8c11be;
`;
const Header = styled.div`
  display: flex;
`;
const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 26px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 10%;
`;
const Icon = styled(IoArrowUndoSharp)`
  margin-top: 10%;
  margin-right: 5%;
  margin-left: 6.5%;
`;
const Form = styled.form`
  position: fixed;
  left: 17%;
  margin-top: 80px;
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
  button {
    margin-bottom: 15%;
    width: 38vh;
    padding: 15px;
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
    background-color: #a328d6;
    border-radius: 5px;
    border: none;
  }
  @media (max-width: 375px) {
    position: fixed;
    left: 18%;
    margin-top: 80px;
    input {
      margin-bottom: 4%;
      width: 36vh;
      padding: 15px;
      border: 1px solid #d4d4d4;
      border-radius: 5px;
      &::placeholder {
        font-family: "Raleway", sans-serif;
        font-size: 16px;
        color: #000000;
      }
    }
    button {
      margin-bottom: 15%;
      width: 36vh;
      padding: 15px;
      font-weight: 600;
      font-size: 15px;
      color: #ffffff;
      background-color: #a328d6;
      border-radius: 5px;
      border: none;
    }
  }
  @media (max-width: 444px) {
    position: fixed;
    left: 11%;
    margin-top: 80px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    input {
      margin-bottom: 4%;
      width: 36vh;
      padding: 15px;
      border: 1px solid #d4d4d4;
      border-radius: 5px;
      &::placeholder {
        font-family: "Raleway", sans-serif;
        font-size: 16px;
        color: #000000;
      }
    }
    button {
      margin-bottom: 15%;
      width: 36vh;
      padding: 15px;
      font-weight: 600;
      font-size: 15px;
      color: #ffffff;
      background-color: #a328d6;
      border-radius: 5px;
      border: none;
    }
  }
`;
