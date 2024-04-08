import { useEffect, useState } from "react";
import Card, { CardSkeleton } from "./Card";

const Cards = () => {
  const limitData = 3;
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4321/api/blogs`);
      // const res = await fetch(
      //   `https://dummyjson.com/products?limit=${limitData}`,
      // );
      const jsonData = await res.json();

      setProducts(jsonData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full bg-pink-100 px-12 py-3 text-red-950">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading ? (
            <>
              {Array.from(Array(limitData).keys()).map((index) => {
                return <CardSkeleton key={index} />;
              })}
            </>
          ) : (
            <>
              {products.map((product) => (
                <Card key={product._id} product={product} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
