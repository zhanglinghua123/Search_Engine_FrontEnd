import React from 'react';
import './App.css';
import { FontPage } from './page/Fontpage/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryResult } from './page/QueryResult';
import { Player } from './page/Player';
import { News } from './page/News';
import { Club } from './page/Club';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<FontPage></FontPage>}></Route>'
                    <Route path="/result" element={<QueryResult></QueryResult>}></Route>
                    <Route path="/player" element={<Player></Player>}></Route>
                    <Route path="/news" element={<News></News>}></Route>
                    <Route path="club" element={<Club></Club>}></Route>
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
