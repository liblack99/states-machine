import Button from "./Button";

export const Welcome = ({ send }) => {
  const startBooking = () => {
    send({ type: "START" });
  };

  return (
    <div className="flex flex-col">
      <p className="text-2xl font-semibold">¡Hoy es el día!</p>
      <p className="text-xl mt-4 mb-4">
        Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender
        las maravillas que hay para explorar
      </p>
      <div className="text-end">
        <Button startBooking={startBooking} />
      </div>
    </div>
  );
};
