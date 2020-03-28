import React, {useState} from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();

        try{
            const response = await api.post("sessions", { id });

            localStorage.setItem("ongId", id);
            localStorage.setItem("ongName", response.data.name);
            history.push('/profile');
        } catch(err) {
            alert("Erro ao logar, tente novamente.");
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt={"Be the Hero"} />

                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Seu ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={18} color={'#e02041'} />
                        Não tenho cadastro
                    </Link>

                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}