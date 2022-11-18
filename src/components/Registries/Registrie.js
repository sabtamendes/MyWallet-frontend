import styled from "styled-components";

export default function Registrie({ registries }) {

    function getBalance() {

        const balance = registries.transactions.map((item) => {
            if (item.type === "credit") {
                return +item.value;
            } else {
                return -item.value;
            }
        }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        if (balance === undefined) {
            return
        }
        return balance.toFixed(2).replace(".", ",");
    }

    const value = getBalance();

    return (
        <>
            {registries.transactions
                ? registries.transactions.map(({ date, description, type, value }, i) => (
                    <List key={i}>
                        <ListDate>{date}</ListDate>
                        <ListDescription>{description}</ListDescription>
                        <ListValue type={type}>{value.toFixed(2).replace(".", ",")}</ListValue>
                    </List>))
                : ""
            }
            <Balance><p>SALDO : </p><span>{value}</span></Balance>
        </>
    )
}

const List = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: -1%;
    margin-bottom:-8%;
    width: 30vh;
    height: 6vh;
    font-size: 16px;
    background-color:#ffffff;
    color: #C6C6C6;
    border-radius: 5px;
    border:none;
`
const ListDate = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-left: -10%;
`
const ListDescription = styled.span`
display: flex;
justify-content: flex-start;
margin-left: -20%;
color: #000000;
`
const Balance = styled.div`
position:fixed;
top:30vh;
display: flex;
justify-content: space-between;
margin-top: 42vh;
margin-left: -25px;
font-size: 18px;
color: #000000;

p{
    font-weight: 800;
    margin-right: 24vh;
}
span{
    font-weight: 500;
    color:#03AC00;
    margin-right: -50px;
}
`
const ListValue = styled.span`
color: ${props => props.type === "debit" ? "#C70000" : "#03AC00"};
font-weight: 500;
margin-right: -55px;
display: flex;
justify-content: space-between;
 `
