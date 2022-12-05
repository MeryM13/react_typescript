import React from 'react';
import './App.css';
import RegistrationForm from "./components/Forms/RegistrationForm";
import {Route, Routes, Navigate} from 'react-router-dom';
import LoginForm from "./components/Forms/LoginForm";
import DefaultForm from "./components/Forms/DefaultForm";
import Header from "./components/elements/header";
import ProfilePage from "./components/Forms/ProfilePage";
import TopicsForm from "./components/Forms/TopicsForm";
import ChatForm from "./components/Forms/ChatForm";

function App() {
    return (
        <div className="App">
            <Header userId={0}></Header>
                <Routes>
                    <Route path='/LoginForm' element={<LoginForm/>}/>
                    <Route path='/RegistrationForm' element={<RegistrationForm/>}/>
                    <Route path='/DefaultForm' element={<DefaultForm/>}/>
                    <Route path='/TopicsForm/:id' element={<TopicsForm/>}/>
                    <Route path='/Profile/:id' element={<ProfilePage/>}/>
                    <Route path='/Topic/:id' element={<ChatForm/>}/>
                    <Route path="*" element={<Navigate to="/DefaultForm" replace />} />
                </Routes>
        </div>
    );
}

export default App;


