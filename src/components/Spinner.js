import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col w-3/4 justify-around items-center my-8 p-8 rounded-lg shadow-lg bg-slate-50">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default Spinner;
