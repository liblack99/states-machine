function Button({ goToWelcome, startBooking }) {
  return (
    <div>
      {goToWelcome ? (
        <button
          className="bg-[#FFFFFFCC] p-2 rounded-md text-[#4F54A7] font-bold cursor-pointer transition-[all ease 300ms] hover:bg-[white] hover:text-[#293684]"
          onClick={goToWelcome}>
          Cancelar
        </button>
      ) : (
        <button
          className="bg-[#4f54a7] ml-[auto] p-2 rounded-md text-white font-bold cursor-pointer transition-[all ease 300ms] hover:bg-[#293684]"
          onClick={startBooking}>
          Comenzar
        </button>
      )}
    </div>
  );
}

export default Button;
