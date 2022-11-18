import styled from "styled-components";
import Loading from "../Loading/Loading";
import { IoCloseOutline } from "react-icons/io5";
// import UserContext from "../../contexts/UserContext";
// import { useContext } from "react";
// import { confirmAlert } from "react-confirm-alert";
// import { deleteTransactionsCredit } from "../../services/Services";
export default function Registrie({ registries, listRegistries }) {

    // const { userData } = useContext(UserContext);

    function getBalance() {

        const balance = registries.transactions.map((item) => {
            // deleteTransactions(item.id)
            if (item.type === "credit") {
                return +item.value;
            } else {
                return -item.value;
            }
        }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        if (balance === undefined) {
            return <Loading />
        } else {
            return balance?.toFixed(2).replace(".", ",");
        }
    }

    const value = getBalance();

    // function deleteTransactions(id) {
    //     const config = {
    //         header: {
    //             Authorization: `Bearer ${userData.token}`
    //         }
    //     }
    //     confirmAlert({
    //         title: "Confirmação",
    //         message: "Quer realmente excluir o valor escolhido?",
    //         buttons: [
    //             {
    //                 label: "Sim",
    //                 onClick: () => deleteTransactionsCredit(id, config)
    //                     .then(res => {
    //                         listRegistries()
    //                     })
    //                     .catch(err => {
    //                         alert("Algo deu errado! Tente novamente!")
    //                     })
    //             }, {
    //                 label: "Não"
    //             }
    //         ]
    //     })
    // }
    if (registries.transactions.length === 0) {
        return <Loading />
    }
    return (
        <>
            {registries.transactions
                ? registries.transactions.map(({ date, description, type, value }, i) => (
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
            <Balance><p>SALDO : </p><span>{value}</span></Balance>
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
top:30vh;
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
left: 35vh;
font-weight: 500;
color:#03AC00;
 }
`

