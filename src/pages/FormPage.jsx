import { useForm } from "react-hook-form";
// import { ErrorMessage } from "@hookform/error-message";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      desc: "",
      body: "",
      image: "",
    },
  });
  const onSubmit = (data) => {
    console.log("MASUK ON SUBMIT");
    if (!data) {
      console.error("Data is null or undefined");
      return;
    }

    try {
      console.log(data);
      reset();
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block font-bold text-gray-700">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter your Blog Title"
            className=" w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-blue-300"
            {...register("title", {
              required: "Please input your blog title",
              maxLength: {
                value: 20,
                message: "Maximum length is 20 characters",
              },
            })}
          />
          {errors.title && (
            <span className="ml-3 text-sm text-red-500">
              {errors.title.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="desc" className="mb-2 block font-bold text-gray-700">
            Blog Description
          </label>
          <input
            type="text"
            id="desc"
            placeholder="Enter your Blog Description"
            className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-blue-300"
            {...register("desc", {
              required: "Please input your blog description",
              maxLength: {
                value: 140,
                message: "Maximum length is 140 characters",
              },
              minLength: {
                value: 60,
                message: "Minimum length is 60 characters",
              },
            })}
          />
          {errors.desc && (
            <span className="ml-3 text-sm text-red-500">
              {errors.desc.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="mb-2 block font-bold text-gray-700">
            Blog Body
          </label>
          <textarea
            type="text"
            id="body"
            placeholder="Enter your Blog Body"
            className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-blue-300"
            {...register("body", {
              required: "Please input your blog body",
              minLength: {
                value: 200,
                message: "Minimum length is 200 characters",
              },
            })}
          />
          {errors.body && (
            <span className="ml-3 text-sm text-red-500">
              {errors.body.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block font-bold text-gray-700">
            Blog Image
          </label>
          <input
            type="text"
            id="image"
            placeholder="Enter your Blog Image"
            className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-blue-300"
            {...register("image", {
              required: "Please input your blog url image",
              pattern: {
                value:
                  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
                message: "Entered valid url image",
              },
            })}
          />
          {errors.image && (
            <span className="ml-3 text-sm text-red-500">
              {errors.image.message}
            </span>
          )}
        </div>
        {/* <div className="mb-4">
          <label htmlFor="email" className="mb-2 block font-bold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register("email")}
          />
        </div> */}
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-slate-300"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FormPage;
