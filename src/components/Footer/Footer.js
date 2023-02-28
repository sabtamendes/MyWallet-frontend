//import { IoAddCircleOutline } from "react-icons/io5";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <Rodape>
        <LinkedText to="/novaentrada">
      <ButtonLeft>
        <AddIcon color="#ffffff" size="30px" />
          <ButtonText>
            <ButtonTextLine>Nova</ButtonTextLine>
            <ButtonTextLine>entrada</ButtonTextLine>
          </ButtonText>
      </ButtonLeft>
      </LinkedText>


      <LinkedText to="/novasaida">
      <ButtonRight>
        <SubtractIcon color="#ffffff" size="30px" />
        
          <ButtonText>
            <ButtonTextLine>Nova</ButtonTextLine>
            <ButtonTextLine>saída</ButtonTextLine>
          </ButtonText>
      </ButtonRight>
      </LinkedText>
    </Rodape>
  );
}

const Rodape = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 6%;
  padding-right: 6%;
`;
const ButtonLeft = styled.button`
  position: fixed;
  bottom: 15%;
  left: 40%;
  border: none;
  background-color: #a328d6;
  padding: 8px 10px;
  padding-right: 100px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`;
const ButtonRight = styled.button`
  position: fixed;
  bottom: 15%;
  right: 40%;
  border: none;
  background-color: #a328d6;
  padding: 8px 10px;
  padding-right: 112px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`;
const AddIcon = styled(IoAddCircleOutline)`
  display: inline-block;
  font-size: 8px;
`;
const SubtractIcon = styled(IoRemoveCircleOutline)`
  font-size: 10px;
`;
const ButtonText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ButtonTextLine = styled.span`
  text-align: center;
  color: #ffffff;
`;
const LinkedText = styled(Link)`
  text-decoration: none;
`;
