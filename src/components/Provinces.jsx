import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Provinces = () => {
  const [fetching, isFetching] = useState(false);
  const [provinceId, setProvinceId] = useState();

  const { data: provinces } = useQuery({
    queryKey: ["PROVINCES"],
    queryFn: async () => {
      return await fetch(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },
  });
  const { data: regency, isLoading } = useQuery({
    queryKey: ["REGENCY", provinceId],
    queryFn: async () => {
      return await fetch(
        `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`,
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },
    enabled: fetching,
  });
  console.log(provinces);
  //   console.log(regency);

  //   if (provinceId) isFetching(true);

  if (!provinces) return <p>DATA NOT FOUND</p>;
  //   if (!regency) return <p>REGENCY NOT FOUND</p>;
  return (
    <>
      <h1 className="mt-3">PROVINCES</h1>
      <ul>
        {provinces.map((province) => (
          <li key={province.id}>
            <button onClick={() => setProvinceId(province.id)}>
              {province.id} - {province.name}{" "}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Provinces;
