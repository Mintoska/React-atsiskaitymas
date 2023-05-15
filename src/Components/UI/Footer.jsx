import { NavLink } from "react-router-dom"
import styled from "styled-components";

const StyledFilmasFooter = styled.footer`
height: 50px;
width: 100%;
background-color: #02022c;
padding: 0;
text-align: center;
color: white;`

const Footer = () => {



    return (
        <>
            <StyledFilmasFooter>
                <p>2023 © Filmoteka.inc</p>
            </StyledFilmasFooter>
        </>
    );
}

export default Footer;