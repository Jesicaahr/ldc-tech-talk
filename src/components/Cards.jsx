import { useState } from "react";
import Card, { CardSkeleton } from "./Card";
import { useQuery } from "@tanstack/react-query";

const Cards = () => {
  const limitData = 3;
  const [fetching, isFetching] = useState(false);

  const { data: blogs, isLoading } = useQuery({
    queryKey: ["BLOGS"],
    queryFn: async () => {
      return await fetch("http://localhost:4321/api/blogs")
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },
    select: (data) =>
      data.map((blog) => ({
        id: blog._id,
        title: blog.title,
        description: blog.desc,
        image: blog.image,
      })),
    enabled: fetching,
  });

  if (isLoading) {
    return (
      <>
        {Array.from(Array(limitData).keys()).map((index) => {
          return <CardSkeleton key={index} />;
        })}
      </>
    );
  }

  if (!blogs)
    return (
      <button
        className="rounded-sm bg-cyan-500 px-4 py-2 font-medium text-white hover:bg-cyan-600"
        onClick={() => isFetching(true)}
      >
        Show More Blog
      </button>
    );

  return (
    <>
      {blogs?.map((blog) => (
        <Card key={blog.id} {...blog} />
      ))}
    </>
  );
};

export default Cards;
