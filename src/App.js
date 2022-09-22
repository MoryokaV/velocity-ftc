import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Team from "./pages/team";
import Archive from "./pages/archive";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/team" element={<Team />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}

const Outreach = () => {
  return <h1>Outreach</h1>;
};

export default App;
