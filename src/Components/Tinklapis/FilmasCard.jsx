import styled from "styled-components";
const FilmasDiv = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    border: 5px solid #7fffd4;
    border-radius: 10px;
    padding-bottom: 5px;
    >img{
        width: 100%;
        object-fit: cover;
        object-position: top;
    }
   `
const FilmasCard = ({ data }) => {
    return ( 
        <FilmasDiv>
            <img src={data.picture} alt={data.name} />
            <div>
                <h2>{data.title}</h2>
                <p>Year: {data.year}</p>
                <p>{data.description}</p>
            </div>
        </FilmasDiv>
    );
}
export default FilmasCard;