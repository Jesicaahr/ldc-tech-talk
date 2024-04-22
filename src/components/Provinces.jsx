import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Provinces = () => {
  const [provinceName, setProvinceName] = useState("");
  const [provinceId, setProvinceId] = useState();

  const { data: provinces, isLoading: isLoadingProvinces } = useQuery({
    queryKey: ["PROVINCES"],
    queryFn: async () => {
      return await fetch(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },
  });
  const { data: regencies, isLoading: isLoadingRegencies } = useQuery({
    queryKey: ["REGENCIES", provinceId],
    queryFn: async () => {
      return await fetch(
        `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`,
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },
    enabled: Boolean(provinceId),
  });
  console.log("PROVINCE ID: ", provinceId);
  console.log("DATA REGENCY: ", regencies);

  if (isLoadingProvinces) return <p>DATA PROVINCES LOADING . . . </p>;
  if (!provinces) return <p>DATA PROVINCE NOT FOUND</p>;

  function renderRegencies() {
    if (isLoadingRegencies) return <p>DATA REGENCY LOADING</p>;
    if (!regencies) return <p>DATA REGENCY FOR {provinceName} NOT FOUND</p>;
    return regencies.map((regency) => (
      <li key={regency.id} className="mb-2 rounded-md py-1 text-sm ">
        {regency.name}
      </li>
    ));
  }
  return (
    <>
      <div className="flex gap-x-12">
        <div>
          <h1 className="mb-2 mt-3 text-lg font-medium">PROVINCE</h1>
          <ul>
            {provinces.map((province) => (
              <li key={province.id}>
                <button
                  className="mb-2 rounded-md bg-teal-800 px-3 py-1 text-white hover:bg-teal-700"
                  onClick={() => {
                    setProvinceId(province.id);
                    setProvinceName(province.name);
                  }}
                >
                  {province.id} - {province.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="mb-2 mt-3 text-lg font-medium">
            {provinceName} REGENCY
          </h1>
          <ul>{renderRegencies()}</ul>
        </div>
      </div>
    </>
  );
};

export default Provinces;
