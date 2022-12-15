import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import DefaultForm from "./components/Forms/DefaultForm";
import TopicsForm from "./components/Forms/TopicsForm";
import ChatForm from "./components/Forms/ChatForm";
import Layout from "./components/views/Layout";
import LoginView from "./components/views/LoginView";
import RegistrationView from "./components/views/RegistrationView";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<DefaultForm/>}/>
                    <Route path='/login' element={<LoginView/>}/>
                    <Route path='/registration' element={<RegistrationView/>}/>
                    <Route path='/:userId/topics' element={<TopicsForm/>}/>
                    <Route path='/:userId/topic/:topicId' element={<ChatForm/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;


