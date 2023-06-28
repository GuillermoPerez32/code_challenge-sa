import TableView from "./components/TableView";
import { AppContext } from "./features/ApiContext";
import { useAppContext } from "./hooks/useAppContext";

const App = () => {
  const appContext = useAppContext();
  return (
    <AppContext.Provider value={appContext}>
      <TableView />;
    </AppContext.Provider>
  );
};

export default App;
