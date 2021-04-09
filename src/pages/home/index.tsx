import React, { useState, useEffect, FormEvent } from 'react';

interface Disciplina {
    name: string;
    disciplina: string;
    time: string;
    date: string;
}

const Home: React.FC = () => {
    const [nome, setnome] = useState('');
    const [hora, sethora] = useState('');
    const [materia, setmateria] = useState('');
    const [data, setdata] = useState('');

    function submitForm() {
        return 0;
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <div className="entrada form">
                    <h1>Nome</h1>
                    <input
                        placeholder="Digite o Nome"
                        value={nome}
                        onChange={(e: any) => {
                            setnome(e.target.value);
                        }}
                    />
                </div>

                <div className="entrada form">
                    <h1>Materia</h1>
                    <input
                        onChange={(e: any) => {
                            setmateria(e.target.value);
                        }}
                        placeholder="Digite a materia"
                        value={materia}
                    />
                </div>
                <div className="entrada form">
                    <h1>Dia da Semana</h1>
                    <input
                        onChange={(e: any) => {
                            setdata(e.target.value);
                        }}
                        placeholder="Digite os dias da semana"
                        value={data}
                    />
                </div>

                <div className="entrada form">
                    <h1>Horário</h1>
                    <input
                        onChange={(e: any) => {
                            sethora(e.target.value);
                        }}
                        value={hora}
                        placeholder="Digite o horário de trabalho"
                    />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default Home;
