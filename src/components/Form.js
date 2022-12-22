import React from "react";

const Form = ({ setSueldo, setFecha }) => {
  const handleClick = () => {
    const s = document.querySelector("#sueldo");
    const f = document.querySelector("#fecha");
    if (s.value == "") {
      s.classList.toggle("error");
    }
    if (f.value == "") {
      f.classList.toggle("error");
    }
    if (f.value != "" && s.value != "") {
      s.classList.remove("error");
      f.classList.remove("error");
      setSueldo(s.value);
      setFecha(f.value);
    }
  };

  return (
    <div className="flex flex-col w-3/4 justify-around items-center my-8 p-8 rounded-lg shadow-lg bg-slate-50">
      <h1>Ingresá tu sueldo y la fecha de cobro</h1>
      <div className="flex flex-col">
        <input
          placeholder="Sueldo"
          type="text"
          id="sueldo"
          className="p-3 my-3 rounded-md border focus-visible:outline-none transition-colors"
        ></input>
        <input
          placeholder="dd/mm/aaaa"
          type="text"
          id="fecha"
          className="p-3 my-3 rounded-md border focus-visible:outline-none transition-colors"
        ></input>
      </div>
      <button onClick={handleClick} className=" w-fit">
        Calcular
      </button>
    </div>
  );
};

export default Form;
