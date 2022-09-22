import "./Home.scss";

import FilterComponent from "../../components/FilterComponent/FilterComponent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CarList from "../../components/CarList/CarList";
import { useEffect, useState } from "react";
import axios from "axios";
import { ICar } from "../../interfaces/cars";

const Home = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        const db = await axios.get<ICar[]>("http://localhost:5001/api/cars/");
        setCars(db.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCars();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <FilterComponent setCars={setCars} />
        <CarList cars={cars} setCars={setCars} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
