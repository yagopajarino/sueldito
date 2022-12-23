import React from "react";

const Form = ({ setSueldo, setFecha }) => {
  const handleClick = () => {
    const s = document.querySelector("#sueldo");
    const f = document.querySelector("#fecha");
    s.value == "" ? s.classList.add("error") : s.classList.remove("error");
    f.value == "" ? f.classList.add("error") : f.classList.remove("error");
    if (f.value != "" && s.value != "") {
      setSueldo(s.value);
      setFecha(f.value);
    }
  };

  return (
    <div className="flex flex-col w-3/4 justify-around items-center my-8 p-8 rounded-lg shadow-lg bg-slate-50">
      <h1 className="text-xl font-light bg-lime-300 py-3 px-7 -skew-x-6">
        Ingresá el monto y la fecha de cobro
      </h1>
      <div className="flex flex-col w-1/2 text-lg">
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
