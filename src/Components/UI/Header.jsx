import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import UsersContext from "../../contexts/UserContext";


const HeaderStyled = styled.header`
    height: 100px;
    width:100%;
    display: flex;
    justify-content: flex-end;
    gap:50px; 
    background-color: #02022c;
    align-items: center;
    color:white;
    >div{
      display: flex;
      gap: 2rem;
      justify-content: flex-end;
      align-items: center;
   >button{
      width: 90px;
      height: 40px;
      background-color: #5f9ea0;
      border: none;
      border-radius: 3px;
      font-size: 16px;
    }
  }
    a>img{
        height: 75px;
        width: auto;
}
a>button{
      width: 90px;
      height: 40px;
      background-color: #5f9ea0;
      border: none;
      border-radius: 3px;
      font-size: 16px;
    }
`


const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UsersContext);

  const navigate = useNavigate();
  return (
    <>
      <HeaderStyled>

        {
          !currentUser &&
          <Link to="/login"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="logo" /></Link>
        }
        {
          currentUser &&
          <Link to="/filmai"><img src="https://cdn.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.webp" alt="logo" /></Link>
        }


        {
          !currentUser ?
            <>
              <Link to={'/login'}> <button >Log in</button></Link>
              <Link to="/register"> <button>Registruotis</button></Link>
            </> :
            <>
              {
                currentUser &&
                <Link to="/addfilmas"><button>Pridėti filmą</button></Link>
              }
              <div>
                
                <p>{currentUser.userMail}</p>

                <button
                  onClick={() => {
                    setCurrentUser(null);
                    navigate('/');
                  }}
                >
                  Logout
                </button>
              </div>
            </>
        }



      </HeaderStyled>

    </>
  );
}

export default Header;