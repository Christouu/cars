import { useEffect, useState } from "react";
import { ICar } from "../../interfaces/cars";
import "./FilterComponent.scss";

const FilterComponent = ({ setCars }: any) => {
  const [sort, setSort] = useState("");

  useEffect(() => {
    if (sort === "brand") {
      setCars((prev: ICar[]) =>
        [...prev].sort(
          (a, b) =>
            a.brand.toLowerCase().charCodeAt(0) -
            b.brand.toLowerCase().charCodeAt(0)
        )
      );
    } else {
      setCars((prev: ICar[]) =>
        [...prev].sort(
          (a, b) => a.region.charCodeAt(0) - b.region.charCodeAt(0)
        )
      );
    }
  }, [sort]);

  return (
    <div className="filter">
      <button onClick={() => setSort("brand")}>Filter by Brand</button>
      <button onClick={() => setSort("region")}>Filter by Region</button>
    </div>
  );
};

export default FilterComponent;
