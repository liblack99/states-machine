import { Welcome } from "../Components/Welcome";
import { Search } from "../Components/Search";
import { Passengers } from "../Components/Passengers";
import { Tickets } from "../Components/Tickets";

export const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    if (state.matches("initial")) return <Welcome send={send} />;
    if (state.matches("search")) return <Search state={state} send={send} />;
    if (state.matches("tickets"))
      return <Tickets send={send} context={state.context} />;
    if (state.matches("passengers"))
      return <Passengers state={state} send={send} />;
    return null;
  };

  return (
    <div className="bg-[#FFFFFF99] w-[650px] p-4 rounded-bl-lg rounded-br-l">
      {renderContent()}
    </div>
  );
};
