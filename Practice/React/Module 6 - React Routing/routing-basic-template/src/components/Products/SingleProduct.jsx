import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>{`SingleProduct ${id}`}</h2>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default SingleProduct;
