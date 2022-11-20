import styled from "styled-components";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";

function Footer() {
    return (
        <Container>

            <EnterBox>
                <span>
                    <IoAddCircleOutline color="#ffffff" size="30px" />
                </span>

                <p>Nova entrada</p>
            </EnterBox>

            <OutBox>
                <IoRemoveCircleOutline color="#ffffff" size="30px" />
                <p>Nova<br></br>saída</p>
            </OutBox>

        </Container>
    )
}

const Container = styled.div`
width:100%;
padding-left: 28px;
padding-right:28px;
position:fixed;
z-index: 2;
bottom: 0;
right:0;
display: flex;
justify-content: space-between;
align-items: center;

`
const EnterBox = styled.button`
background-color: #A328D6;
border-radius: 5px;
border: none;
margin-bottom: 15px;
padding-top: 1vh;
padding-bottom: 1vh;
padding-right: 15vw;
p{
    font-size: 15px;
    font-weight: bold;
    font-family: Raleway;
    color: #ffffff;
    margin-top: 70px;
}
span{
    margin-left: -65px;
}
`
const OutBox = styled.button`
background-color: #A328D6;
border-radius: 5px;
border: none;
margin-bottom: 15px;
padding-top: 1vh;
padding-bottom: 1vh;
padding-right: 30vw;
padding-left: 5px;
p{
    font-size: 15px;
    font-weight: bold;
    font-family: Raleway;
    color: #ffffff;
    margin-top: 50px;
}
`