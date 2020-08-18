import React, { useState } from "react";
import { Payment, SubscribeToEvent } from "shopkonnect-frontend-business";

const BaseModule = () => {
    let user: { id?: string };
    // const [financeCardProps, setFinanceProps] = useState([]);
    const [financeSummaryData, setFinanceSummaryData] = useState([]);

    React.useEffect(() => {
        SubscribeToEvent({
            eventName: "USER",
            callback: (user) => proceedApiCall(user),
        });
    }, []);

    const proceedApiCall = (userObject) => {
        if (userObject.id) {
            user = userObject;
            const paymentMethod = new Payment();
            fetchPaymentStats(paymentMethod);
        }
    };

    const fetchPaymentStats = async (paymentMethod) => {
        const result = await paymentMethod.fetchSummary(user);
        setFinanceSummaryData(result);
    };

    // const test = async (paymentMethod) => {
    //   const result = ["ankit", "ashish"];
    //   setTestProps("ankit");
    // };

    // const fetchPaymentSummary = async (paymentMethod) => {
    //   const result = await paymentMethod.fetchUserAccountSummary();
    //   setFinanceSummaryData(result);
    // };
    return <h1>Hi</h1>;
};

export default BaseModule;
