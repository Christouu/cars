import "./CreateCars.scss";

import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const CreateCars = () => {
  return (
    <>
      <Header />
      <div className="create">
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default CreateCars;
