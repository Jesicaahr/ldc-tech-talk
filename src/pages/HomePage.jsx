import Cards from "../components/Cards";
import Provinces from "../components/Provinces";

const HomePage = () => {
  return (
    <>
      <h1 className="text bg-white px-4 py-4 text-xl font-bold text-red-700">
        GRID PRODUCT
      </h1>

      <Cards />
      <Provinces />
    </>
  );
};

export default HomePage;
