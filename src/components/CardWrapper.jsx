import Cards from "./Cards";

const CardWrapper = () => {
  return (
    <>
      <div className="w-full bg-pink-100 px-12 py-3 text-red-950">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default CardWrapper;
