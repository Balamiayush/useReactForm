import React from "react";

const Card = ({ users = [] }) => {
  return (
    <>
      {users.length > 0 ? (
        users.map((item, index) => (
          <div
            key={index}
            className="w-52 h-52 bg-blue-400 rounded-2xl flex flex-col items-center justify-center p-2 shadow-lg"
          >
            <div className="w-44 h-44 overflow-hidden rounded-xl bg-black">
              <img
                src={typeof item.image === "string" ? item.image : URL.createObjectURL(item.image)}
                className="w-full h-full object-cover"
                alt={item.name || "User Image"}
              />
            </div>
            <p className="text-white font-semibold">{item.name}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No users available</p>
      )}
    </>
  );
};

export default Card;
