import "./App.css";
import CounterContext from "./context/CounterContext";

import CaseTwo from "./pages/contextApiCaseTwo/CaseTwo";
// import CaseOne from "./pages/propsDrillingCaseOne/CaseOne";

function App() {
  return (
    <>
      {/* Use Props Drilling Concept */}
      {/* <CaseOne /> */}

      {/* Use React Context Api Concept */}
      <CounterContext>
        <CaseTwo />
      </CounterContext>
    </>
  );
}

export default App;
