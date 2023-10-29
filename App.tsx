import React, { useState, useEffect } from 'react';
import './Loaders.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de 1 segundo
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <>
    <div className='flex items-center justify-center'>
      {loading ? (
      <>
        <div className="loader1"></div>
        <div className="loader2"></div></>
      ) : (
        <p>
          Si queres saber algo hablame al discord: aspadexaverse (AFK)
        </p>
      )}
      </div>
    </>
  );
}

export default App;
