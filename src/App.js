import React, { useEffect, useState } from "react";
import Form from "./components/Form.js";
import Results from "./components/Results.js";
import Donaciones from "./components/Donaciones.js";
import Footer from "./components/Footer.js";
import api from "./api/api.js";

function App() {
  const [sueldo, setSueldo] = useState(0);
  const [fecha, setFecha] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    api.ping();
  });

  useEffect(() => {
    setShowResults(sueldo != 0);
  }, [sueldo]);

  return (
    <div className="w-full h-screen justify-between flex items-center flex-col">
      <div className="w-full flex items-center flex-col">
        <h1 className="text-5xl py-8 text-center">Sueldito</h1>
        <p className="text-center text-xl font-light">
          Conocé cuanto deberías cobrar ajustando tu sueldo pasado por
          inflación, ripte, dolar oficial y paralelo.
        </p>

        {showResults ? (
          <>
            <Results fecha={fecha} sueldo={sueldo} />
            <button
              onClick={() => {
                setShowResults(false);
                setSueldo(0);
              }}
              className="w-1/2"
            >
              Volver
            </button>
          </>
        ) : (
          <Form setSueldo={setSueldo} setFecha={setFecha} />
        )}
      </div>
      <div className="w-full mt-5">
        <Donaciones />
        <Footer />
      </div>
    </div>
  );
}

export default App;
