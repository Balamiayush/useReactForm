import React from "react";
import { useForm } from "react-hook-form";

const Input = ({
  handleFormSubmit
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    handleFormSubmit(data)
    (data)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-5 w-1/2 h-1/3 lg:w-[20%]"
    >
      <input
        {...register("name", { required: "Name is required" })}
        className="bg-gray-500 p-2 w-full"
        type="text"
        placeholder="Enter your Name"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        {...register("url", { 
          required: "URL is required", 
          pattern: {
            value: /^(ftp|http|https):\/\/[^ "]+$/,
            message: "Enter a valid URL"
          }
        })}
        className="bg-gray-500 p-2 w-full"
        type="url"
        placeholder="Enter your URL"
      />
      {errors.url && <p className="text-red-500">{errors.url.message}</p>}

      <input type="submit" className="px-5 py-2 bg-blue-500 rounded-lg" />
    </form>
  );
};

export default Input;
