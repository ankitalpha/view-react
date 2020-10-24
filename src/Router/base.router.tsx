import React from "react";
import {
    InitLibrary,
    user,
    Authentication,
} from "shopkonnect-frontend-business";
import { SubscribeToEvent, StoreEvent } from "state-manager-utility";
import { GetItem, SetItem, RemoveItem, GetItemAsync } from "storage-utility";
import Landing from "./../Modules/landing";

const BaseRouter = () => {
    InitLibrary({
        // apiHost: "http://ec2-13-235-75-100.ap-south-1.compute.amazonaws.com:3000",
        // apiHost: "http://ec2-13-127-106-242.ap-south-1.compute.amazonaws.com:3000",
        apiHost: "https://api.shopkhata.com",
        StateManager: { SubscribeToEvent, StoreEvent },
        StorageUtility: { GetItem, SetItem, RemoveItem, GetItemAsync },
        version_id : '1.2',
        platform_id: 2
    });
    Authentication.mocklogin();
    // const user = new User();

    return <Landing />;
};

export default BaseRouter;
