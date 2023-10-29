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

          <button className="border border-violet-600 text-white bg-violet-600 px-4 py-2 rounded-lg hover:bg-violet-600 hover:text-white transition duration-300">
        Cargar resultados de mesa
      </button>
      <button className="border border-violet-600 text-purple-600 bg-white px-4 py-2 rounded-lg hover:bg-violet-600 hover:text-white transition duration-300">
        Ver Resultados
      </button>
      <button className="border border-red-500 text-red-500 bg-white px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
        Denunciar irregularidades
      </button>
        </p>
      )}
      </div>
    </>
  );
}

export default App;
