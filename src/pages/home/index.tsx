import React, { useState, useEffect, FormEvent } from 'react';

interface Disciplina {
    name: string;
    disciplina: string;
    time: string;
    date: string;
}

const Inicio: React.FC = () => {
    const [nome, setName] = useState('');
    const [disciplina, setDisciplina] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    function submitForm() {
        return 0;
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <div className="form-imput">
                    <strong>Disciplina</strong>
                    <input
                        placeholder="Digite o Nome"
                        value={name}
                        onChange={(e: any) => {
                            setName(e.target.value);
                        }}
                    />
                </div>

                <div className="form-imput">
                    <strong>Professor</strong>
                    <input
                        placeholder="Digite o nome"
                        value={name}
                        onChange={(e: any) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div className="form-imput">
                    <strong>Dia da Semana</strong>
                    <input
                        placeholder="Digite os dias da semana"
                        value={date}
                        onChange={(e: any) => {
                            setName(e.target.value);
                        }}
                    />
                </div>

                <div className="form-imput">
                    <strong>Horário</strong>
                    <input
                        placeholder="Digite o horário de trabalho"
                        value={time}
                        onChange={(e: any) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <div />
  );
};

export default Home;
