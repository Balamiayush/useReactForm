import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Input = ({ handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  
  const [useFile, setUseFile] = useState(false); // Toggle between file & URL
  const [preview, setPreview] = useState(null);  // Image preview

  // Watch input fields for changes
  const selectedFile = watch("file");

  // Update preview when file changes
  React.useEffect(() => {
    if (selectedFile && selectedFile[0]) {
      const objectUrl = URL.createObjectURL(selectedFile[0]);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl); // Cleanup
    }
  }, [selectedFile]);

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      image: useFile ? selectedFile[0] : data.url,
    };

    console.log("Submitted Data:", formData);
    handleFormSubmit(formData);
    reset();
    setPreview(null);
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

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => {
          setUseFile(!useFile);
          setPreview(null);
        }}
        className="px-4 py-2 bg-green-500 text-white rounded-md"
      >
        {useFile ? "Use URL" : "Upload File"}
      </button>

      {/* Conditional Input */}
      {useFile ? (
        <>
          <input
            {...register("file", { required: "File is required" })}
            className="bg-gray-500 p-2 w-full"
            type="file"
            accept="image/*"
          />
          {errors.file && <p className="text-red-500">{errors.file.message}</p>}
        </>
      ) : (
        <>
          <input
            {...register("url", {
              required: "URL is required",
              pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: "Enter a valid URL",
              },
            })}
            className="bg-gray-500 p-2 w-full"
            type="url"
            placeholder="Enter Image URL"
          />
          {errors.url && <p className="text-red-500">{errors.url.message}</p>}
        </>
      )}

      {/* Image Preview */}
      {preview && (
        <div className="w-32 h-32 mt-2 rounded-lg overflow-hidden">
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
        </div>
      )}

      <input type="submit" className="px-5 py-2 bg-blue-500 rounded-lg" />
    </form>
  );
};

export default Input;
