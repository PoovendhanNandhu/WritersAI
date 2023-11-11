import GenrativeText from "./GenrativeText";
import Main from "./main"
import Aboutus from "./Aboutus";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/generate" element={<GenrativeText />} />
    <Route path="/aboutus" element={<Aboutus />} />
  </Routes>
</Router>
    </div>
  );
}

export default App;
