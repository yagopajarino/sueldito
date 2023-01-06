import React from "react";

const Form = ({ setSueldo, setFecha }) => {
  const handleClick = () => {
    const s = document.querySelector("#sueldo");
    const f = document.querySelector("#fecha");
    s.value == "" ? s.classList.add("error") : s.classList.remove("error");
    !validDate(f.value)
      ? f.classList.add("error")
      : f.classList.remove("error");
    if (s.value != "" && validDate(f.value)) {
      setSueldo(s.value);
      setFecha(f.value);
    }
  };

  const validDate = (date_string) => {
    const dateRegex =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    if (date_string.match(dateRegex)) {
      const today = new Date();
      const date = Date.parse(date_string);
      const desde = new Date(2017, 1, 1);
      const hasta = new Date();
      hasta.setMonth(today.getMonth() - 2);
      return desde < date && date < hasta;
    } else {
      return false;
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
