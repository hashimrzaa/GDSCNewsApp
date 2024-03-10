import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data, single = false, item }) => {
  const navigate = useNavigate();

  return (
    <>
      {!single ? (
        data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center flex-col gap-3 p-4 border-[10px] w-[600px] "
            >
              <h1 className="font-bold text-[2rem] text-center">
                {" "}
                {item?.category}
              </h1>
              <h2 className="font-bold text-[1.5rem] text-center text-gray-500">
                {item?.source}
              </h2>
              <p className="text-center">{item?.headline}</p>
              <button
                className="text-white rounded bg-gray-800 p-1 px-3 text-center"
                onClick={() => {
                  navigate("/" + item?.id);
                }}
              >
                Details
              </button>
            </div>
          );
        })
      ) : (
        <div className="flex justify-center items-center flex-col gap-3 p-4 border-[10px] w-[90%] m-auto">
          <h1 className="font-bold text-[2rem] text-center">
            {" "}
            {item?.category}
          </h1>
          <h2 className="font-bold text-[1.5rem] text-center text-gray-500">
            {item?.source}
          </h2>
          <p className="text-center">{item?.headline}</p>
          <p className="text-center">{item?.summary}</p>
          <button className="text-white rounded bg-gray-800 p-1 px-3 text-center" onClick={()=>navigate('/')}>
            Back
          </button>
        </div>
      )}
    </>
  );
};

export default Card;
