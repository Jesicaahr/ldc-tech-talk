import Cards from "../components/Cards";
import Provinces from "../components/Provinces";

const HomePage = () => {
  return (
    <>
      <div className="px-12 py-8">
        <h1 className="text bg-white py-4 text-xl font-bold text-red-700">
          GRID PRODUCT
        </h1>
        <Cards />
        <Provinces />
      </div>
    </>
  );
};

export default HomePage;
