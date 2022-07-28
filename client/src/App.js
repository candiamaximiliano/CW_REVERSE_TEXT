import Navbar from "./components/Navbar";
import Results from "./components/Results";

function App() {
  return (
    <div className="App container bg-ocean rounded p-3 my-3 d-flex flex-column justify-content-start align-items-center vh-100 w-50">
      <Navbar />
      <Results />
    </div>
  );
}

export default App;
