import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { getRegistries } from "../../services/Services";
import Registrie from "./Registrie";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";

export default function Registries() {
  const [registries, setRegistries] = useState("");
  const [loading, setLoading] = useState(true);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    async function listRegistries() {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      try {
        const { data } = await getRegistries(config);
        setRegistries(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    listRegistries();
  }, [userData.token]);

  if (loading || registries === null) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <Container>
        {registries.length === 0 ? (
          <ListTransactionsEmpty>
            <span>
              Não há registros de
              <br></br>
              entrada ou saída
            </span>
          </ListTransactionsEmpty>
        ) : (
          <ListTransactions>
            <Registrie registries={registries} />
          </ListTransactions>
        )}

        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #8c11be;
  height: 100vh;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
`;
const ListTransactionsEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62vh;
  padding-top: 10%;
  padding-bottom: 5%;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 120px;
  margin-right: 25px;
  margin-left: 25px;
  margin-bottom: 40px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #868686;
  font-family: Raleway;
  font-size: 20px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ListTransactions = styled.div`
  height: 62vh;
  padding-top: 18px;
  padding-left: 32px;
  margin-top: 80px;
  margin-right: 25px;
  margin-left: 25px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #868686;
  font-family: Raleway;
`;

