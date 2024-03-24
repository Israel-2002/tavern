import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#FB8F2C",
};

const LoadingSpinner = ({ loading }) => {
  return (
    <div className="grid min-h-[50vh] place-items-center lg:min-h-[80vh]">
      <ClipLoader
        color="#FB8F2C"
        loading={loading}
        cssOverride={override}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
