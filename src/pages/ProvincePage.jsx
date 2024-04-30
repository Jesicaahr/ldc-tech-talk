import { useEffect, useState } from "react";
import ProvinceTitle from "../components/ProvinceTitle";
import Provinces from "../components/Provinces";
import { useSearchParams } from "react-router-dom";

const ProvincePage = () => {
  const [provinceId, setProvinceId] = useState();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setProvinceId(searchParams.get("provinceId"));
  }, [searchParams]);
  return (
    <>
      <ProvinceTitle provinceId={provinceId} />
      <Provinces provinceId={provinceId} />
    </>
  );
};

export default ProvincePage;
