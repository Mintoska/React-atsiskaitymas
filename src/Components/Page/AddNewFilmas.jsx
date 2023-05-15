import { useContext, useState } from 'react';
import { v4 as generatedId } from 'uuid'
import FilmaiContext from '../../contekstai/FilmaiContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledMain = styled.main`
background-color: #5f9ea0;
text-align: center;
padding-bottom: 20px;
>h1{
    padding-top: 10px;
    margin-top: 0px;
}
>form{
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    >label{
        align-items: left;
    }
}
`


const AddNewFilmas = () => {
    const { FilmaiActionTypes, setFilmai } = useContext(FilmaiContext);
    const navigate = useNavigate()

    const [formInputs, setFormInputs] = useState({
        kinas: '',
        nuotrauka: '',
        metai: '',
        aprašymas: ''
    });

    const inputHandler = (e) => {
        if (e.target.type === 'number') {
            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.valueAsNumber
            });
        } else {
            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.value
            });
        }
    }

    const formHandler = e => {
        e.preventDefault();
        const newFilmas = {
            ...formInputs,
            id: generatedId()
        };
        setFilmai({
            type: FilmaiActionTypes.add,
            data: newFilmas
        })
        navigate('/filmai')
    }

    return (
        <StyledMain>
            <h1>pridėkite savo favoritą</h1>
            <form onSubmit={(e) => formHandler(e)}>
                <div>
                    <label htmlFor='name'>Kinas:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formInputs.name}
                        onChange={(e) => inputHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor='picture'>filmo nuotrauka:</label>
                    <input
                        type="url"
                        name="picture"
                        id="picture"
                        required
                        value={formInputs.picture}
                        onChange={(e) => inputHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor='year'>Metai:</label>
                    <input
                        type="text"
                        name="year"
                        id="year"
                        required
                        value={formInputs.year}
                        onChange={(e) => inputHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor='description'>aprašymas:</label>
                    <textarea
                        name="description"
                        id="description"
                        required
                        value={formInputs.description}
                        onChange={(e) => inputHandler(e)}
                    ></textarea>
                </div>
                <input type='submit' value='Add' />
            </form>
        </StyledMain>

    );
}

export default AddNewFilmas;