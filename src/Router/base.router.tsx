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
        apiHost: "https://sk-api-services.herokuapp.com/",
        StateManager: { SubscribeToEvent, StoreEvent },
        StorageUtility: { GetItem, SetItem, RemoveItem, GetItemAsync },
      });
     Authentication.mocklogin();
    // const user = new User();

    return <Landing />;
};

export default BaseRouter;
