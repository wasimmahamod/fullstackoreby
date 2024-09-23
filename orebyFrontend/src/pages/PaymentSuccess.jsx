import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // window.location.reload();
  });

  return (
    <div>
      <h1>Payment Successful</h1>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default PaymentSuccess;
