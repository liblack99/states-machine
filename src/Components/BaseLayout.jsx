import { useMachine } from "@xstate/react";
import { Nav } from "./Nav";
import { StepsLayout } from "./StepsLayout";
import bookingMachine from "../Machines/bookingMachine";

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log("nuestra maquina", state.value, state.context);

  return (
    <div className="bg-[url('../../public/images/background-travel-2.jpg')] h-[100vh] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center p-[50px]">
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send} />
    </div>
  );
};
