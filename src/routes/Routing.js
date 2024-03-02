import React from 'react'
import { BrowserRouter } from "react-router-dom";
import MainCard from '../components/MainCard';
import LoginForm from '../components/Login.Form';
import { Drawer } from '@mui/material';

export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginForm /> } /> 
                    <Route path="/dashboard" element={<MainCard /> } /> 
                </Routes>
            </BrowserRouter>

        </div>
    )
}
