import Button from "./Button";

export const Nav = ({ state, send }) => {
  const goToWelcome = () => {
    send({ type: "CANCEL" });
  };

  return (
    <nav className="w-[650px] flex justify-between items-center bg-[#FFFFFF99] p-4 rounded-tl-xl rounded-tr-xl">
      <h1 className="text-4xl font-bold m-0 text-[#293684]">Book a fly ✈</h1>
      {!state.matches("initial") && !state.matches("tickets") && (
        <Button goToWelcome={goToWelcome} />
      )}
    </nav>
  );
};
