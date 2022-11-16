import styled from "styled-components";

export default function NewEnter() {
    return (
        <Container>
            <Title>Nova entrada</Title>
            <Form>
                <input placeholder="Valor" />

                <input placeholder="Descrição" />

                <StyledButton>
                    Salvar entrada
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