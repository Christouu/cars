import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import CreateCars from "./pages/CreateCars/CreateCars";
import CreateRegion from "./pages/CreateRegion/CreateRegion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createCar" element={<CreateCars />} />
      <Route path="/createRegion" element={<CreateRegion />} />
    </Routes>
  );
}

export default App;
