import { useContext } from "react";
import styled from "styled-components";
import FilmaiContext from "../../contexts/FilmaiContext";
import FilmasCard from "../Tinklapis/FilmasCard";



const StyledFilmaiMain = styled.main`
    background-color: #5f9ea0;
    text-align: center;
    padding-bottom: 10px;
`;

const StyledFilmaiDiv = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;
    padding-left: 30px;
    padding-right: 30px;
    
`;

const FilmaiPage = () => {

    const { filmai } = useContext(FilmaiContext)

    return (
        <StyledFilmaiMain>
            <h1> mano favoritai</h1>
         

            <StyledFilmaiDiv>
                {
                    filmai.map(filmas =>
                        <FilmasCard
                            key={filmas.id}
                            data={filmas}
                        />
                    )
                }
            </StyledFilmaiDiv>

        </StyledFilmaiMain>
    );
}

export default FilmaiPage;