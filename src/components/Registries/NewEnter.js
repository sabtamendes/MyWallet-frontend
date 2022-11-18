import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { postNewRegistries } from "../../services/Services";

export default function NewEnter() {
    // const [value, setValue] = useState("");
    // const [description, setDescription] = useState("");
    const [form, setForm] = useState({ value: "", description: "" });
    console.log(form.value, form.description)
    const { userData } = useContext(UserContext);

    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

   async function handleSubmit(e) {
        e.preventDefault();

        const headers = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        };

        // const body = {
        //     value: Number(form.value),
        //     description: form.description,
        //     type: "credit"
        // };
const body = {
    ...form, value: Number(form.value),type: "credit"
}
      try{  await postNewRegistries(body, headers)
            // .then((res) => {
         alert("Sucesso")
                navigate("/registros");
            // })
      }catch(err){ 
        console.log(err)
        alert("Verifique se a entrada está correta!")
    }
   }
    return (
        <Container>
            <Title>Nova entrada</Title>

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
        </Container>
    )
}
const Container = styled.div`
    height: 200vw;
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
font-family: 'Raleway', sans-serif;
font-size: 26px;
color: #ffffff;
font-weight: bold;
`
// const StyledButton = styled.button`
// background-color: #8C11BE;
// font-family: 'Raleway', sans-serif;
// font-size: 26px;
// color: #ffffff;
// font-weight: bold;
// `