import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FilmaiProvider } from './contexts/FilmaiContext';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './contexts/UserContext';
import  { NewUsersProvider } from './contexts/NewUserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NewUsersProvider>
        <UsersProvider>
            <FilmaiProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </FilmaiProvider>
        </UsersProvider>
    </NewUsersProvider>
);