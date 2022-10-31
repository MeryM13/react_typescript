import React from 'react';
import './App.css';
import RegistrationForm from "./components/RegistrationForm";
import {Route, Routes, Link, Navigate} from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import DefaultForm from "./components/DefaultForm";
import QueryForm from "./components/QueryForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path='/LoginForm' element={<LoginForm/>}/>
                    <Route path='/RegistrationForm' element={<RegistrationForm/>}/>
                    <Route path='/DefaultForm' element={<DefaultForm/>}/>
                    <Route path='/QueryForm' element={<QueryForm/>}/>
                    <Route path="*" element={<Navigate to="/DefaultForm" replace />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;


