import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Update from "./components/Update/Update";
import Read from "./components/Read/Read";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </>
  );
}

export default App;
