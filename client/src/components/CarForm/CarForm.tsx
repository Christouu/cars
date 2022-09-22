import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CarForm.scss";

const CarForm = () => {
  const [brand, setBrand] = useState("");
  const [region, setRegion] = useState("");
  const [regions, setRegions] = useState([]);
  const [error, setError] = useState("");

  const history = useNavigate();

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!brand) return setError("Brand required");
    if (!region) return setError("Region required");

    try {
      await axios.post("http://localhost:5001/api/cars/create", {
        brand,
        region,
      });

      history("/");
    } catch (error: any) {
      if (error.response.data.message.includes("brand")) {
        setError("Brand can not be more than 20 characters!");
      }
    }
  };

  useEffect(() => {
    const getRegions = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/regions`);

        setRegions(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRegions();
  }, []);

  return (
    <div className="form">
      <h2>Create a car</h2>
      <form>
        <label htmlFor="brand">Brand</label>
        {!brand && <span className="error">Required field*</span>}
        {error && <div className="error">{error}</div>}
        <input
          type="text"
          name="brand"
          id="brand"
          placeholder="Add a brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        <label htmlFor="region">Region</label>
        {!region && <div className="error">Required field*</div>}
        <select
          name="region"
          id="region"
          defaultValue={"Region"}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option disabled>Region</option>
          {regions.map((r: any) => (
            <option key={r._id} value={r.name}>
              {r.name}
            </option>
          ))}
        </select>
        <button onClick={handleCreate}>Create</button>
      </form>
    </div>
  );
};

export default CarForm;
