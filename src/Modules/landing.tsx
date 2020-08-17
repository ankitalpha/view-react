import React from "react";
import { Payment } from "shopkonnect-frontend-business";

const BaseModule = () => {
  React.useEffect(() => {
    const paymentMethod = new Payment();
    fetchPaymentStats(paymentMethod);
    fetchPaymentSummary(paymentMethod);
  }, []);

  return <h1>Module</h1>;
};

export default BaseModule;
