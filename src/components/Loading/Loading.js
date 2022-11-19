import { MagnifyingGlass } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
    return (
        <Container>
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='#c0efff'
                color='#e15b64'
            />
        </Container>
    )
}
const Container = styled.div`
background-color: #8C11BE;
width:100%;
height:120vh;
display:flex;
justify-content:center;
align-items:center;
background-color: blue;
`