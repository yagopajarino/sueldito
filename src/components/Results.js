import React, { useEffect, useState } from "react";
import api from "../api/api.js";
import Tira from "./Tira.js";
import Spinner from "./Spinner.js";

const Results = ({ fecha, sueldo }) => {
  const [data, setData] = useState(-1);
  const [inflacion, setInflacion] = useState(-1);
  const [ripte, setRipte] = useState(-1);
  const [blue, setBlue] = useState(-1);
  const [oficial, setOficial] = useState(-1);

  useEffect(() => {
    api.getSeries().then((r) => setData(r));
  }, []);

  const periodoAnterior = (año, mes) => {
    let rAño = año;
    let rMes = mes - 1;
    if (rMes == 0) {
      rMes = "12";
      rAño = año - 1;
    }
    return `${rAño}-${new String(rMes).padStart(2, "0")}`;
  };

  useEffect(() => {
    console.log(data); // Borrar
    if (data != -1) {
      const añoMes = periodoAnterior(fecha.slice(6, 10), fecha.slice(3, 5));
      setInflacion(
        data.inflacion.at(-1)[1] /
          data.inflacion.find((i) => i[0].match(`^${añoMes}-.*`))[1]
      );
      setRipte(
        data.ripte.at(-1)[1] /
          data.ripte.find((i) => i[0].match(`^${añoMes}-.*`))[1]
      );
      setBlue(
        data.blue.at(-1)[1] /
          data.blue.find((i) => i[0].match(`^${añoMes}-.*`))[1]
      );
      setOficial(
        data.oficial.at(-1)[1] /
          data.oficial.find((i) => i[0].match(`^${añoMes}-.*`))[1]
      );
    }
  }, [data]);

  useEffect(() => {
    console.log(inflacion, ripte, blue, oficial);
  }, [inflacion, ripte, blue, oficial]);

  const results = (
    <div className="md:flex flex-col w-full md:w-3/4 justify-around items-center my-8 md:p-8 md:rounded-lg md:shadow-lg bg-slate-50">
      <p className="text-xl font-light bg-lime-300 p-3 md:-skew-x-6">
        El {fecha} cobrabas{" "}
        {sueldo.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
        , hoy deberías cobrar...
      </p>
      <div className="my-3 py-5 w-full md:flex flex-col items-center">
        <div className="text-2xl grid grid-cols-3 text-center font-semibold md:w-3/4 items-center px-7 py-2 ">
          <h1 className="font-bold text-left"></h1>
          <p className="font-bold">Monto</p>
          <div className="text-right flex justify-end">
            <p className="font-bold text-left">Ajuste</p>
          </div>
        </div>
        <Tira props={{ sueldo, factor: inflacion, nombre: "Inflación" }} />
        <Tira props={{ sueldo, factor: ripte, nombre: "Ripte" }} />
        <Tira props={{ sueldo, factor: oficial, nombre: "Dolar Oficial" }} />
        <Tira props={{ sueldo, factor: blue, nombre: "Dolar Blue" }} />
      </div>
    </div>
  );

  return <>{data == -1 ? <Spinner /> : results}</>;
};

export default Results;
