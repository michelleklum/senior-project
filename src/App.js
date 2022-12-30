import { useSelector } from "react-redux";
import { TERMINAL } from "./slices/pageStates";
import { selectPage } from "./slices/pageSlice";

import Terminal from "./components/Terminal/Terminal";
import Computer from "./components/Computer/Computer";

function App() {
  const currentPage = useSelector(selectPage);
  return <div>{currentPage === TERMINAL ? <Terminal /> : <Computer />}</div>;
}

export default App;
