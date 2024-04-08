/* eslint-disable react/prop-types */
function Card({ product }) {
  return (
    <>
      <div className="card overflow-hidden rounded-md bg-pink-400 px-3 py-3 ">
        <div className="card-body">
          <div className="card-body">
            <img
              className="h-[200px] w-full object-cover"
              src={product.image}
            ></img>
            <h2 className="text mt-1  w-full text-lg font-bold">
              {product.title}
            </h2>
            <p className="text my-5 line-clamp-2"> {product.desc} </p>
            <button className="rounded-md bg-blue-500 px-4 py-2 font-semibold text-white">
              More...
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function CardSkeleton() {
  return (
    <>
      <div className="card animate-pulse overflow-hidden rounded-md bg-slate-200 px-3 py-3">
        <div className="card-body">
          <div className="card-body">
            <div className="h-[200px] w-full bg-slate-500"></div>
            <div className="mt-1 h-[32px]  w-full  bg-slate-500"></div>
            <div className="my-5  h-[25px]  w-full bg-slate-500"></div>
            <div className="h-[35px] w-20 rounded-md bg-slate-500 px-4 py-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
