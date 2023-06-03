import { useState } from 'react'
import './App.css'
import Form from "./components/Form.jsx";
import Card from "./components/Card.jsx";


function App() {
    const [gender, setGender] = useState("");
    const [band, setBand] = useState("");
    const [name, setName] = useState("");
    const [displayCard, setDisplayCard] = useState("");

    const onSubmit = (data) => {
        console.log(data);
        const { name, gender, favoriteBand } = data;
        if (favoriteBand) {
            setDisplayCard(true);
            setName(name);
            setGender(gender);
            setBand(favoriteBand);
        }
    };

    return (
        <>
            <Form
                name={name}
                setName={setName}
                gender={gender}
                setGender={setGender}
                favoriteBand={band}
                setFavoriteBand={setBand}
                onSubmit={onSubmit}
            />
            {displayCard && <Card name={name} gender={gender} band={band} />}
        </>
    );
}

export default App
