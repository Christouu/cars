import "./CreateRegion.scss";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import RegionForm from "../../components/RegionForm/RegionForm";

const CreateRegion = () => {
  return (
    <>
      <Header />
      <div className="create">
        <RegionForm />
      </div>
      <Footer />
    </>
  );
};

export default CreateRegion;
