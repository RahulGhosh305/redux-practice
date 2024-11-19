import "./App.css";
import CounterContext from "./context/CounterContext";

// import CaseOne from "./pages/propsDrillingCaseOne/CaseOne";
import CaseTwo from "./pages/contextApiCaseTwo/CaseTwo";

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
