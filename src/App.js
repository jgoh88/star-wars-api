import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ResourcePage from "./components/ResourcePage";
import { GlobalStateProvider } from "./hooks/globalState";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <NavBar />
        <Routes>
          <Route path={"/:resource"} element={<ResourcePage />} />
          <Route path={"/"} element={<Home />} />
        </Routes>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App;
