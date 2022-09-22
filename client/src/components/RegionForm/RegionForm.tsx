import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegionForm = () => {
  const [region, setRegion] = useState("");
  const [error, setError] = useState("");

  const history = useNavigate();

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!region) return setError("Region required");

    try {
      await axios.post("http://localhost:5001/api/regions/create", {
        name: region,
      });

      history("/");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h2>Create a Region</h2>
      <form>
        <label htmlFor="brand">Region</label>
        {!region && <span className="error">Required field*</span>}
        {error && <div className="error">{error}</div>}
        <input
          type="text"
          name="brand"
          id="brand"
          placeholder="Add a brand"
          onChange={(e) => setRegion(e.target.value)}
        />

        <button onClick={handleCreate}>Create</button>
      </form>
    </div>
  );
};

export default RegionForm;
