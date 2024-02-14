import { useState } from "react";

export const Search = ({ state, send }) => {
  const [flight, setFlight] = useState("");

  const goToPassengers = () => {
    send({ type: "CONTINUE", selectedCountry: flight });
  };

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };

  // const options = state.context.countries;
  const paises = ["colombia", "mexico", "argentina", "venezuela"];

  return (
    <div className="flex flex-col">
      <p className="text-2xl font-semibold">Busca tu destino</p>
      <select
        id="country"
        className="text-lg mt-4 rounded-md p-2 border-none"
        value={flight}
        onChange={handleSelectChange}>
        <option value="" disabled defaultValue>
          Escoge un país
        </option>
        {paises.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        onClick={goToPassengers}
        disabled={flight === ""}
        className="bg-[#4f54a7] mt-4 ml-[auto] p-2 rounded-md text-white font-bold cursor-pointer transition-[all ease 300ms] hover:bg-[#293684]">
        Continuar
      </button>
    </div>
  );
};
