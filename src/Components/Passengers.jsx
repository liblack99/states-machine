import { useState } from "react";

export const Passengers = ({ state, send }) => {
  const [value, changeValue] = useState("");

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  };

  const goToTicket = () => {
    send({ type: "DONE" });
  };

  const submit = (e) => {
    e.preventDefault();
    send({ type: "ADD", newPassenger: value });
    changeValue("");
  };

  const { passengers } = state.context;

  return (
    <form
      onSubmit={submit}
      className="flex flex-col justify-center items-center pr-2">
      <p className="text-2xl font-semibold">
        Agrega a las personas que van a volar ✈️
      </p>
      {passengers.map((person, idx) => (
        <p className="text-2xl font-semibold" key={`person-${idx}`}>
          {person}
        </p>
      ))}
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Escribe el nombre completo"
        required
        value={value}
        onChange={onChangeInput}
        className="text-xl my-4 rounded-md p-2 border-none w-full "
      />
      <div className="grid grid-cols-2 mt-4 gap-4">
        <button
          className="bg-[#FFFFFFCC] p-2 rounded-md text-[#4F54A7] font-bold cursor-pointer transition-[all ease 300ms] hover:bg-[white] hover:text-[#293684]"
          type="submit">
          Agregar Pasajero
        </button>
        <button
          className="bg-[#4f54a7] p-2 rounded-md text-white font-bold cursor-pointer transition-[all ease 300ms] hover:bg-[#293684]"
          type="button"
          onClick={goToTicket}>
          Ver mi ticket
        </button>
      </div>
    </form>
  );
};
