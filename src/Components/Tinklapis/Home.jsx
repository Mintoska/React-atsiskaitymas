import styled from "styled-components";



const StyledMain = styled.main`
background-color: #5f9ea0;
text-align: center;
>h1{
    margin-top: 0px;
    padding-top: 10px;
}
`
const Home = () => {

    return (
        <StyledMain>
        <h1>Filmų favoritai!</h1>
        <h3>prisijunk, kad pamatyti daugiau</h3>
        <img src="https://variety.com/wp-content/uploads/2022/12/100-Greatest-Movies-Variety.jpg?w=1360&h=765&crop=1" alt="movies"/>
        </StyledMain>
    );
}

export default Home;