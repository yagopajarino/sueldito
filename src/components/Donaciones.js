import Cafecito from "./Cafecito";

export default function Donaciones() {
  return (
    <div className=" bg-blue-50 flex items-center justify-around">
      <div className="w-full p-4 lg:px-0 lg:w-3/4 py-5 flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl">Donaciones</h2>
          <p>Tus cafecitos ayudan a mantener la app.</p>
        </div>
        <Cafecito />
      </div>
    </div>
  );
}
