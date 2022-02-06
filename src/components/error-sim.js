import React, { useState } from 'react';
import '../styles/errors-sim.css';

const ErrorSim = () => {
    const [error, setError] = useState('');
    const apiError = () => setError('Error al traer con la API');
    const credentialsErrors = () => setError('Credenciales incorrectas');
    const succes = () => setError('');

    return (
      <div className='error-buttons'>
        <h3>Error simulation messages</h3>
        <button onClick={apiError}>
          Error
        </button>
        <button onClick={credentialsErrors}>
          Another Error
        </button>
        <button onClick={succes}>
          Proceso exitoso
        </button>
        { error && <p>{error}</p> }
      </div>
    )
}

export default ErrorSim