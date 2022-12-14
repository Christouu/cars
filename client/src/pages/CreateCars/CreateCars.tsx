import "./CreateCars.scss";

import CarForm from "../../components/CarForm/CarForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const CreateCars = () => {
  return (
    <>
      <Header />
      <div className="create">
        <CarForm />
      </div>
      <Footer />
    </>
  );
};

export default CreateCars;
