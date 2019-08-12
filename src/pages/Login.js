import React, { useState } from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

export default function Login() {
    const [username, setUserName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log("username: ", username);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input 
                    placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
