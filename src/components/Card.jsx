/* eslint-disable react/prop-types */
import styled from "styled-components";

const Card = ({ name, gender, band }) => {
    return (
        <CardContainer>
            <Title>Hola {name}!</Title>
            <Content>Tu genero musical favorito es: {gender}!</Content>
            <Content>Tu banda favorita es:{band}</Content>
        </CardContainer>
    );
};

export default Card;

const CardContainer = styled.div`
  max-width: 300px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 16px;
  margin-bottom: 0;
`;
