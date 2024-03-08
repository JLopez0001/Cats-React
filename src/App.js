import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Cats from "./pages/Cats.jsx";
import CatDetail from "./pages/CatDetail.jsx";
import CatCreate from "./pages/CatCreate.jsx";
import CatEdit from "./pages/CatEdit.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/cats/:id" element={<CatDetail />} />
        <Route path="/add-cats" element={<CatCreate />} />
        <Route path="/cats/:id/edit" element={<CatEdit />} />
      </Routes>
    </div>
  );
}

export default App;
