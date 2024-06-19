import React, { useState } from 'react';

function Contato() {
    const [mensagem, setMensagem] = useState('');

    const handleChange = (event) => {
        setMensagem(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Mensagem enviada: ${mensagem}`);
        setMensagem('');
    };

    return (
        <div>
            <h1>Contato</h1>
            <p>Entre em contato conosco:</p>
            <form onSubmit={handleSubmit}>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Mensagem:
                </label>
                <textarea
                    value={mensagem}
                    onChange={handleChange}
                    rows={4}
                    cols={50}
                    style={{ backgroundColor: '#f2f2f2', color: '#666', border: '1px solid #ccc', padding: '8px', borderRadius: '4px', marginBottom: '10px' }}
                    required
                />
                <br />
                <button type="submit" style={{ backgroundColor: 'purple', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Enviar</button>
            </form>
        </div>
    );
}

export default Contato;

