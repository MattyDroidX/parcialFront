import { useState } from "react";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Form = ({ onSubmit }) => {
    const [gender, setGender] = useState("");
    const [favoriteBand, setFavoriteBand] = useState("");
    const [validGender, setValidGender] = useState(true);
    const [validBand, setValidBand] = useState(true);
    const [name,setName] = useState("");
    const [validName,setValidName] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validGender && validBand && validName) {
            onSubmit({ gender, favoriteBand, name });
        }
    };

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        setValidName(newName.trim().length >= 3 && !newName.includes(" "));
    };

    const handleGenderChange = (e) => {
        const newGender = e.target.value;
        setGender(newGender);
        setValidGender(newGender.trim().length >= 3 && !newGender.includes(" "));
    };

    const handleBandChange = (e) => {
        const newBand = e.target.value;
        setFavoriteBand(newBand);
        // setValidBand(newBand.length >= 6 && /^#[0-9A-Fa-f]{6}$/i.test(newBand));
        setValidBand(newBand.trim().length >= 6 && !newBand.includes(" "));
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Nombre:</Label>
                    <Input
                        id="name"
                        type="text"
                        value={name}
                        placeholder="Ingresa tu nombre"
                        onChange={handleNameChange}
                    />
                    {!validName && (
                        <ErrorMessage>
                            Nombre inválido. Longitud mínima: 3 caracteres. No se permiten
                            espacios en blanco.
                        </ErrorMessage>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="gender">Ingrese un genero musical:</Label>
                    <Input
                        id="gender"
                        type="text"
                        value={gender}
                        placeholder="Ingresa tu genero musical"
                        onChange={handleGenderChange}
                    />
                    {!validGender && (
                        <ErrorMessage>
                            Genero inválido. Longitud mínima: 3 caracteres. No se permiten
                            espacios en blanco.
                        </ErrorMessage>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="favoriteBand">Banda Favorita:</Label>
                    <Input
                        id="favoriteBand"
                        type="text"
                        value={favoriteBand}
                        placeholder="Ingresa tu banda favorita"
                        onChange={handleBandChange}
                    />
                    {!validBand && (
                        <ErrorMessage>
                            Banda inválida. Debe tener al menos 6 caracteres. No se permiten
                            espacios en blanco.
                        </ErrorMessage>
                    )}
                </FormGroup>
                <Button type="submit">Enviar</Button>
            </form>
        </FormContainer>
    );
};

export default Form;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  background-color: #f8f9fa;
  padding: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  color: #dc3545;
  font-size: 14px;
`;