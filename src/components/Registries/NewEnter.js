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
        <IoArrowUndoSharp
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
        <Button type="submit">Salvar entrada</Button>
      </Form>
    </Main>
  );
}

const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #8c11be;
`;
const Header = styled.div`
position:fixed;
top: 6%;
display:flex;
margin-right: 24%;
margin-bottom: 3%;
@media (max-width: 1000px) {
position:fixed;
top: 5%;
display:flex;
margin-right: 29%;
margin-bottom: 5%;  
}
@media (max-width: 900px) {
position:fixed;
top: 5%;
display:flex;
margin-right: 39%;
margin-bottom: 5%;  
}
@media (max-width: 600px) {
position:fixed;
top: 5%;
display:flex;
margin-right: 48%;
margin-bottom: 5%;  
}
`;
const Title = styled.h1`
font-family: 'Raleway', sans-serif;
font-size: 26px;
color: #ffffff;
font-weight: bold;
margin-left: 25px;
@media (max-width: 1800px) {
font-family: 'Raleway', sans-serif;
font-size: 26px;
color: #ffffff;
font-weight: bold;
margin-left: 18px;
}
@media (max-width: 900px) {
font-family: 'Raleway', sans-serif;
font-size: 26px;
color: #ffffff;
font-weight: bold;
margin-left: 20px;
}
@media (max-width: 600px) {
font-family: 'Raleway', sans-serif;
font-size: 26px;
color: #ffffff;
font-weight: bold;
margin-left: 10px;
}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  position:fixed;
  top: 22%;
  input {
   border-radius: 5px;
   border:none;
   padding-right: 19vw;
   padding-top: 1.2vw;
   padding-bottom: 1.2vw;
   margin-top: 2%;
   margin-bottom: 5%;
    &::placeholder {
      font-family: "Raleway", sans-serif;
      font-size: 18px;
      color: #000000;
    }
  }
  @media (max-width: 1500px) {
  display: flex;
  flex-direction: column;
  position:fixed;
  top: 20%;
  input {
   border-radius: 5px;
   border:none;
   padding-right: 18vw;
   padding-top: 1.5vw;
   padding-bottom: 1.5vw;
   margin-top: 2%;
   margin-bottom: 5%;
    &::placeholder {
      font-family: "Raleway", sans-serif;
      font-size: 18px;
      color: #000000;
    }
  }
}
@media (max-width: 900px) {
  display: flex;
  flex-direction: column;
  position:fixed;
  top: 15%;
  input {
   border-radius: 5px;
   border:none;
   padding-right: 28vw;
   padding-top: 2.2vw;
   padding-bottom: 2.2vw;
   margin-top: 2%;
   margin-bottom: 5%;
    &::placeholder {
      font-family: "Raleway", sans-serif;
      font-size: 18px;
      color: #000000;
    }
  }
}
@media (max-width: 600px) {
  display: flex;
  flex-direction: column;
  position:fixed;
  top: 15%;
  input {
   border-radius: 5px;
   border:none;
   padding-right: 28vw;
   padding-top: 3.5vw;
   padding-bottom: 3.5vw;
   margin-top: 2%;
   margin-bottom: 5%;
    &::placeholder {
      font-family: "Raleway", sans-serif;
      font-size: 18px;
      color: #000000;
    }
  }
}
`;
const Button = styled.button`
  color: #FFFFFF;
  background-color:#A328D6;
  border-radius: 5px;
  border:none;
  font-weight:600;
  font-size: 18px;
  padding: 3.5% 30%;
  white-space: nowrap;

  @media (max-width: 1500px) {
  color: #FFFFFF;
  background-color:#A328D6;
  border-radius: 5px;
  border:none;
  font-weight:600;
  font-size: 18px;
  padding-top: 3.8%;
  padding-bottom: 3.8%;
  white-space: nowrap;
}
  @media (max-width: 900px) {
  color: #FFFFFF;
  background-color:#A328D6;
  border-radius: 5px;
  border:none;
  font-weight:600;
  font-size: 18px;
  padding: 3.5% 4%;
  white-space: nowrap;
}
`;
