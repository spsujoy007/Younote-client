import React, { useState } from "react";
import { InfinitySpin, Triangle } from "react-loader-spinner";

const Elements = () => {
  const [counter, setCounter] = useState(false);
  const [loading, setLoading] = useState(true);
  const stopLoading = () => {
    setLoading(false);
  };
  setTimeout(stopLoading, 1000);

  if (loading) {
    return (
      <div className="mt-52">
        <div className="text-primary flex align-center justify-center">
          <Triangle
            height="100"
            width="100"
            color="#FF7B54"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {loading === false && (
        <div className="p-20 grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="w-52 flex-col text-xl uppercase h-52 bg-primary text-white flex justify-center items-center">
            <h2>primary color</h2>
            <h4>#FF7B54</h4>
          </div>
          <div className="w-52 flex-col text-xl uppercase h-52 bg-secondary text-white flex justify-center items-center">
            <h2>secondary color</h2>
            <h4>#FFB26B</h4>
          </div>
          <div className="w-52 flex-col text-xl uppercase h-52 bg-accent text-white flex justify-center items-center">
            <h2>accent color</h2>
            <h4>#FFD56F</h4>
          </div>
          <div className="w-52 flex-col text-xl uppercase h-52 bg-info text-white flex justify-center items-center">
            <h2>info color</h2>
            <h4>#939B62</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Elements;
