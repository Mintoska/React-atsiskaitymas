import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Tinklapis/Home';
import { useContext } from 'react';
import FilmaiPage from './Components/Tinklapis/FilmasPage';
import Header from './Components/UI/Header';
import UsersContext from './contexts/UserContext';
import Login from './Components/Tinklapis/Login';
import Register from './Components/Tinklapis/Register';
import AddNewFilmas from './Components/Tinklapis/AddNewFilmas';
import Footer from './Components/UI/Footer';

const App = () => {
  const { currentUser } = useContext(UsersContext);
  return (
    <>
      <Header />
      <Routes>

        <Route index element={<Home />} />

        <Route path="/filmai" element={
          currentUser ?
            <FilmaiPage /> :
            <Navigate to="/login" />
        } />

        <Route path="/addfilmas" element={
          currentUser ?
            <AddNewFilmas /> :
            <Navigate to="/login" />
        } />

        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />


        <Route path='*' element={<h1>pasiklydai! </h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;