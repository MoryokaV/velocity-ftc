import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Team from "./pages/team";
import Archive from "./pages/archive";
import Outreach from "./pages/outreach";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/team" element={<Team />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </Router>
  );
}

export default App;
