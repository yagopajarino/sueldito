import React, { useEffect, useState } from "react";
import api from "../api/api.js";
import Tira from "./Tira.js";

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
    return `${rAño}-${rMes}`;
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

  return (
    <div className="flex flex-col w-3/4 justify-around items-center my-8 p-8 rounded-lg shadow-lg bg-slate-50">
      <p className="text-xl font-light bg-lime-300 p-3 -skew-x-6">
        El {fecha} cobrabas{" "}
        {sueldo.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
        , hoy deberías cobrar...
      </p>
      <div className="my-3 py-5 w-full flex flex-col items-center">
        <Tira props={{ sueldo, factor: inflacion, nombre: "Inflación" }} />
        <Tira props={{ sueldo, factor: ripte, nombre: "Ripte" }} />
        <Tira props={{ sueldo, factor: oficial, nombre: "Dolar Oficial" }} />
        <Tira props={{ sueldo, factor: blue, nombre: "Dolar Blue" }} />
      </div>
    </div>
  );
};

export default Results;
