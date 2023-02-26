import styled from "styled-components";
import Loading from "../Loading/Loading";
import { IoCloseOutline } from "react-icons/io5";

export default function Registrie({ registries }) {

    if (registries === undefined) {
        return <Loading />
    }

    return (
        <>
            {registries
                ? registries.map(({ date, description, type, value }, i) => (
                    <List key={i}>
                        <ListDate>{date}</ListDate>
                        <ListDescription>{description}</ListDescription>
                        <ListValue type={type}>{value?.toFixed(2).replace(".", ",")}</ListValue>
                        <Icon>
                            <IoCloseOutline color="#6b9080" size="23px" />
                        </Icon>
                    </List>))
                : ""
            }
            <Balance registries={registries}><p>SALDO : </p><span>{registries.map((item) => {
                if (item.type === "credit") {
                    return +item.value;
                } else {
                    return -item.value;
                }
            }).reduce((previousValue, currentValue) => previousValue + currentValue, 0).toFixed(2).replace(".", ",")}</span></Balance>
        </>
    )
}

const List = styled.div`
     margin-bottom:-7%;
     width: 30vh;
     height: 6vh;
     font-size: 18px;
     background-color:#ffffff;
     border-radius: 5px;
     border:none;
     display:flex;
 `
const Icon = styled.span`
position:fixed;
right: 22%;
`
const ListDate = styled.span`
color: #6b9080;
margin-left: 32px;
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
right: 25%;
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
top:30vh;
padding: 12px;
margin-top: 42vh;
font-size: 18px;
color: #000000;
p{
font-weight: 800;
position:fixed;
left: 25.2%;
bottom: 38%;
 }
span{
position:fixed;
bottom: 38%;
right: 25.5%;
font-weight: 500;
color:#03AC00;
 }
`

