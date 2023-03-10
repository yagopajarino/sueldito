import React from "react";

const Tira = ({ props }) => {
  const getPorcentaje = (valor) => {
    return ((valor - 1) * 100).toFixed(2);
  };

  const actualizarMonto = (factor) => {
    return (props.sueldo * factor).toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  };

  return (
    <div className="grid grid-cols-3 text-center font-semibold md:w-3/4 md:my-2 items-center text-xl bg-violet-300 py-3 px-3 md:px-7 md:-skew-x-6">
      <h1 className="md:text-3xl font-bold text-left">{props.nombre}</h1>
      <p>{actualizarMonto(props.factor)} </p>
      <div className="text-right flex justify-end">
        <p className="w-fit ">{getPorcentaje(props.factor)}%</p>
      </div>
    </div>
  );
};

export default Tira;
