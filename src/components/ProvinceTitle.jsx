import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProvinceTitle = () => {
  const [provinceName, setProvinceName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setProvinceName(searchParams.get("provinceName"));
  }, [searchParams]);

  console.log("PROVINCE NAME", provinceName);

  return (
    <>{provinceName ? <h1 className="font-bold">{provinceName}</h1> : null}</>
  );
};

export default ProvinceTitle;
