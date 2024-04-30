import { useSearchParams } from "react-router-dom";
import { useGetProvince } from "../api/useProvince";
import { useGetRegency } from "../api/useRegency";
import { useState } from "react";
import { PropTypes } from "prop-types";

const Provinces = (props) => {
  const { provinceId } = props;
  const [provinceName, setProvinceName] = useState("");
  const [, setSearchParams] = useSearchParams();

  const { data: provinces, isLoading: isLoadingProvinces } = useGetProvince();

  const { data: regencies, isLoading: isLoadingRegencies } = useGetRegency({
    provinceId,
  });

  if (isLoadingProvinces) return <p>DATA PROVINCES LOADING . . . </p>;
  if (!provinces) return <p>DATA PROVINCE NOT FOUND</p>;

  function renderRegencies() {
    if (isLoadingRegencies) return <p>DATA REGENCY LOADING</p>;
    if (!regencies) return <p>DATA REGENCY FOR {provinceName} NOT FOUND</p>;
    return regencies?.map((regency) => (
      <li key={regency.id} className="mb-2 rounded-md py-1 text-sm ">
        {regency.name}
      </li>
    ));
  }
  return (
    <>
      <div className="flex gap-x-12">
        <div>
          <h1 className="mb-2 mt-3 font-bold">PROVINCE</h1>

          <ul>
            {provinces?.map((province) => (
              <li key={province.id}>
                <button
                  className="mb-2 rounded-md bg-teal-800 px-3 py-1 text-white hover:bg-teal-700"
                  onClick={() => {
                    setProvinceName(province.name);
                    setSearchParams({
                      provinceId: province.id,
                    });
                  }}
                >
                  {province.id} - {province.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="mb-2 mt-3 font-bold">{provinceName} REGENCY</h1>
          <ul>{renderRegencies()}</ul>
        </div>
      </div>
    </>
  );
};

export default Provinces;

Provinces.propTypes = {
  provinceId: PropTypes.string,
};
