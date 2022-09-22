import axios from "axios";
import moment from "moment";
import { ICar } from "../../interfaces/cars";

import "./CarList.scss";

const CarList = ({ cars, setCars }: any) => {
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5001/api/cars/${id}`);

      setCars((prevState: ICar[]) => prevState.filter((c) => c._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {cars.length === 0 && <div>No cars in DB</div>}
      <div className="list">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Brand</th>
              <th>Region</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((c: ICar) => (
              <tr key={c._id}>
                <td>{c._id}</td>
                <td>{c.brand}</td>
                <td>{c.region}</td>
                <td>{moment(c.createdAt).format("YYYY-MM-DD")}</td>
                <td>
                  <button onClick={() => handleDelete(c._id)}>
                    Delete Car
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CarList;
