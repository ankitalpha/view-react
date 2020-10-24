import React, { useState } from "react";
import { SubscribeToEvent, FetchPoster, FetchUnit, AddVariant, BusinessDetail, OtpLogin, OtpVerify, AddProduct, UpdateProduct, ProductList, DeleteFavouriteBusiness } from 'shopkonnect-frontend-business';
import { EditVariant, AddPayment, PaymentSummary, PaymentPassbook, PaymentList, PaymentDetail, PaymentTransaction } from 'shopkonnect-frontend-business';
import { AddAddress, FetchAddress, FetchCountry, PublicLanguage, BusinessSegment } from 'shopkonnect-frontend-business';
// import { PaymentPassbook, PaymentTransaction, PaymentSummary, PaymentList, AddPayment } from 'shopkonnect-frontend-business';
// import { AddProduct, OrderDetail } from 'shopkonnect-frontend-business';
import { AddBusiness, EditBusiness, UserBusiness, InventoryList, BusinessOrder, BusinessNearBy, AddSegment } from 'shopkonnect-frontend-business';
import { OrderDetail } from "shopkonnect-frontend-business";
// import { PublicSegment, PendingOrder, OtpLogin, OtpVerify, ProductList, UpdateProduct, BusinessDetail } from 'shopkonnect-frontend-business';
// import { PendingOrder } from '../../../shopkonnect-frontend-business/src/Models/Order/pending.order';
import { StatisticsBusiness } from 'shopkonnect-frontend-business';
import { AddItem, FetchCart, SearchKeyword } from 'shopkonnect-frontend-business';
import { AddFirstProduct } from 'shopkonnect-frontend-business';
import { FetchAllCategory } from 'shopkonnect-frontend-business';
import { DeletePaymentImage } from 'shopkonnect-frontend-business';
import { PaymentIndividualSummary } from 'shopkonnect-frontend-business';
import { PublicBusinessDetail } from 'shopkonnect-frontend-business';
import { AddFavouriteBusiness } from 'shopkonnect-frontend-business';



const BaseModule = () => {
    let user: { id?: string };
    // const [financeCardProps, setFinanceProps] = useState([]);
    const [financeSummaryData, setFinanceSummaryData] = useState([]);

    React.useEffect(() => {
        SubscribeToEvent({
            eventName: "USER",
            callback: (user) => proceedApiCall(user),
        });

        proceedApiCall(user)
    }, []);

    const proceedApiCall = (userObject) => {
        if (userObject.id) {
            user = userObject;

            // const testing = new PaymentPassbook({
            //     'user_id': 10
            // });

            // const testing = new AddFirstProduct({
            //     business_id :  7605975,
            //     name: "cleaning",
            //     description: 12.445,
            //     category_id: 1,
            //     variant: {
            //         unit_id: 1,
            //         quantity: 1,
            //         selling_price: 12,
            //         stock: 12,
            //     },
            //     images : [
            //         'a', 'b'
            //     ]
            // });

            // console.log('typeof numner', typeof (12.3));

            // const testing = new OtpVerify({
            //     "user": {
            //         "dialing_code": 91,
            //         "mobile": 8005086428
            //     },
            //     "otp": 1111

            // })


            // const testing = new BusinessNearBy(
            //     {
            //         "latitude": 12.90340000,
            //         "longitude": 77.63093000
            //     });

            // const testing = new OrderDetail(
            //     {
            //         // business_id: 4473813,
            //         order_id :  631390709,
            //         user_id: 10
            //     });

            // const testing = new DeleteFavouriteBusiness({
            //     business_id: 4473813,
            //     // order_id: 631390709,
            //     // user_id: 10
            // });

            // const testing = new AddFavouriteBusiness({
            //     business_id: 4473813,
            //     // order_id: 631390709,
            //     // user_id: 10
            // });

            // const testing = new BusinessDetail({
            //     business_id: 4473813,
            //     // order_id: 631390709,
            //     // user_id: 10
            // });


            const testing = new AddItem(null);

            // const testing = new AddBusiness({
            //     "name": "Cow dung cake 3",
            //     "segments": [
            //         { "segment_id": 1 },
            //         { "segment_id": 2 }
            //     ],
            //     "address_id": 1
            // });

            // const testing = new SearchKeyword({
            //     // business_id: 7605975,
            //     "latitude": 12.90340000,
            //     "longitude": 77.63093000,
            //     "key": ""
            // });

            // const testing = new StatisticsBusiness({
            //     business_id: 3936721,

            //     // transaction_id: 2
            // })
            // const testing = new FetchAllCategory({
            //     "business_id" : 7605975
            // });
            // const testing = new AddItem(
            //     {
            //         business_id: 7605975,
            //         product_id: 38,
            //         variant_id: 27,
            //         quantity: 0,
            //         variant_name: 'name',
            //         product_name: 'fetch',
            //         display_amount: 'Rs. 300',
            //         amount: 100,
            //         override_cart: true
            //     });
            fetchPaymentStats(testing);
        }

    };

    const fetchPaymentStats = async (testing) => {
        const result = await testing.process(5);

        console.log('landing.tsx result ', result);

        const result1 = await testing.fetchPendingOrders();
        // const search = await testing.search(result.response.inventory, 'dal');
        console.log('result of search', result1)

        // const global = await testing.processDaily();
        // console.log('global.tsx result ', global);

        // const global1 = await testing.processWeekly();
        // console.log('global.tsx result ', global1);

        // const global2 = await testing.processMonthly();
        // console.log('global.tsx result ', global2);

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
