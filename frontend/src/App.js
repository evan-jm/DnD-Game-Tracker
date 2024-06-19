import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ImportCharacters from "./Pages/ImportCharacters/ImportCharacters";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-character-sheets" element={<ImportCharacters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
