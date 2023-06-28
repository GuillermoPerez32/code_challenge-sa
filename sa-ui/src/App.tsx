import TableView from "./components/TableView";
import { AppContext } from "./features/ApiContext";
import { useAppContext } from "./hooks/useAppContext";

const App = () => {
  const { studentResponse, setStudentResponse } = useAppContext();
  return (
    <AppContext.Provider value={{ studentResponse, setStudentResponse }}>
      <TableView />;
    </AppContext.Provider>
  );
};

export default App;
