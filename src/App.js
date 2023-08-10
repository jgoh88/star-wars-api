import NavBar from "./components/NavBar";
import { GlobalStateProvider } from "./hooks/globalState";

const { BrowserRouter, Routes } = require("react-router-dom");

function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <NavBar />
        <Routes>

        </Routes>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App;
