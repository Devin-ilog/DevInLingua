import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Outlet, Route, Routes, Navigate } from 'react-router-dom'
import AulasAgendadas from './pages/AulasAgendadas/index.jsx'
import Home from './pages/Home/index.jsx'
import Login from './pages/Login/index.jsx'

const PrivateRoute = () => {
    let auth = true

    return (
        auth ? <Outlet /> : <Navigate to="/login" />
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<Home />}/>
                    <Route path='/aulas-agendadas' element={<AulasAgendadas />}/>
                </Route>
            </Route>
            <Route path='/login' element={<Login />} />
        </Routes>    
    </BrowserRouter>
)
