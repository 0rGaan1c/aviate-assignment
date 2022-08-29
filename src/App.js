import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplicationDetail from "./pages/ApplicationDetail";
import Applications from "./pages/Applications";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Applications />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path=":id" element={<ApplicationDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
