import styled from "styled-components";
import Loading from "../Loading/Loading";
import { IoCloseOutline } from "react-icons/io5";

export default function Registrie({ registries }) {

    if (registries === undefined) {
        return <Loading />
    }
    const balance = registries
    .map((item) => (item.type === "credit" ? +item.value : -item.value))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
   
    return (
        <>
            {registries
                ? registries.map(({ date, description, type, value }, i) => (
                    <List key={i}>
                        <ListDate>{date}</ListDate>
                        <ListDescription>{description}</ListDescription>
                        <ListValue type={type}>{value?.toFixed(2).replace(".", ",")}</ListValue>
                        <Icon>
                            <IoCloseOutline color="#6b9080" size="20px" />
                        </Icon>
                    </List>))
                : ""
            }
            <Balance value={balance}>
            <p>SALDO : </p> 
            <span>{balance.toFixed(2).replace(".", ",")}</span></Balance>
        </>
    )
}

const List = styled.div`
     margin-bottom:-6%;
     width: 30vh;
     height: 6vh;
     font-size: 16px;
     background-color:#ffffff;
     border-radius: 5px;
     border:none;
     display:flex;
 `
const Icon = styled.span`
position:fixed;
right: 35px;
`
const ListDate = styled.span`
color: #6b9080;
margin-left: -20px;
margin-right: 20px;
`
const ListDescription = styled.span`
margin-right: 20px;
color: #000000;
word-break: break-all;
max-width:40vw;
`
const ListValue = styled.p`
position:fixed;
right: 60px;
word-break: break-all;
max-width:40vw;
color: ${props => props.type === "debit" ? "#C70000" : "#03AC00"};
font-weight: 500;
`
const Balance = styled.span`
display: flex;
justify-content: space-between;
word-break: break-all;
max-width:50vw;
position:fixed;
top:24vh;
padding: 12px;
margin-top: 42vh;
font-size: 18px;
color: #000000;
p{
font-weight: 800;
position:fixed;
left: 5vh;
 }
span{
position:fixed;
left: 30vh;
font-weight: 500;
color: ${(props) => (props.value < 0 ? "#C70000" : "#03AC00")};
 }
@media(max-width:380 ){
display: flex;
justify-content: space-between;
word-break: break-all;
max-width:50vw;
position:fixed;
top:24vh;
padding: 12px;
margin-top: 42vh;
font-size: 18px;
color: #000000;
p{
font-weight: 800;
position:fixed;
left: 5vh;
 }
span{
position:fixed;
left: 32vh;
font-weight: 500;
color: ${(props) => (props.value < 0 ? "#ff0000" : "#00ff00")};
 }
 }
`

