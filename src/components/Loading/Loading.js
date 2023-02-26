import { MagnifyingGlass } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
    return (
        <Container>
            <MagnifyingGlass
                visible={true}
                height="90"
                width="90"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='#f1faee'
                color='#03045e'
            />
        </Container>
    )
}
const Container = styled.div`
background-color: #8C11BE;
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`