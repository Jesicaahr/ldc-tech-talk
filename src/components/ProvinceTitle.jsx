import { PropTypes } from "prop-types";
import { useGetProvince } from "../api/useProvince";

const ProvinceTitle = (props) => {
  const provinceId = props?.provinceId;
  const { data: province } = useGetProvince({
    options: {
      select: (data) => data.find((province) => province.id === provinceId),
    },
  });

  if (!province) return null;

  return (
    <>
      {province.name ? (
        <h1 className="text-lg font-medium">{province.name}</h1>
      ) : null}
    </>
  );
};

export default ProvinceTitle;

ProvinceTitle.propTypes = {
  provinceId: PropTypes.string,
};
