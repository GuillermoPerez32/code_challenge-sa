import { useEffect, useState } from "react";
import TableView from "./components/TableView";
import { AppContext } from "./features/AppContext";
import { getAllStudents } from "./services/students";
import { StudentResponse } from "./types/student";
import { useModal } from "./hooks/useModal";

const App = () => {
  const [studentResponse, setStudentResponse] = useState<StudentResponse>({
    count: 0,
    result: [],
  });
  const [offset, setOffset] = useState(0);
  const modal = useModal();

  useEffect(() => {
    getAllStudents(offset)
      .then((data: StudentResponse) => {
        setStudentResponse(data);
      })
      .catch((error) => console.error(error));
  }, [offset]);

  return (
    <AppContext.Provider
      value={{
        studentResponse,
        setStudentResponse,
        offset,
        setOffset,
        modal,
      }}
    >
      <TableView />
    </AppContext.Provider>
  );
};

export default App;
