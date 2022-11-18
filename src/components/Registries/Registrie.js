import styled from "styled-components";

export default function Registrie({ registries }) {
    return (

        <>
            {registries.transactions
                ? registries.transactions.map(({ date, description, type, value }, i) => (
                    <List key={i}>
                        <ListDate>{date}</ListDate>
                        <ListDescription>{description}</ListDescription>
                        <ListValue type={type}>{value}</ListValue>
                    </List>))
                : ""
            }
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
`
const ListValue = styled.span`
 color: ${props => props.type === "debit" ? "#C70000" : "#03AC00"};
 margin-right: -55px;
display: flex;
justify-content: space-between;
 `
