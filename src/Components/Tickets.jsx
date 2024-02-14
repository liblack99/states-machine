export const Tickets = ({ send, context }) => {
  const finish = () => {
    send({ type: "FINISH" });
  };

  return (
    <div className="Tickets">
      <p className="Tickets-description description">
        Gracias por volar con book a fly 💚
      </p>
      <div className="Tickets-ticket">
        <div className="Tickets-country">{context.selectedCountry}</div>
        <div className="Tickets-passengers">
          <span>✈</span>
          {context.passengers.map((person, idx) => {
            return <p key={idx}>{person}</p>;
          })}
        </div>
      </div>
      <button
        onClick={finish}
        className="bg-[#4f54a7] mt-4 ml-[auto] p-2 rounded-md text-white font-bold cursor-pointer transition-[all ease 300ms] hover:bg-[#293684]">
        Finalizar
      </button>
    </div>
  );
};
