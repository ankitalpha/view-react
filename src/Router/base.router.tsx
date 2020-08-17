import React from "react";
import { InitLibrary } from "shopkonnect-frontend-business";
import { SubscribeToEvent, StoreEvent } from "state-manager-utility";
import { GetItem, SetItem, RemoveItem, GetItemAsync } from "storage-utility";
import Landing from "./../Modules/landing";

const BaseRouter = () => {
  React.useEffect(() => {
    InitLibrary({
      apiHost: "https://sk-api-services.herokuapp.com",
      StateManager: { SubscribeToEvent, StoreEvent },
      StorageUtility: { GetItem, SetItem, RemoveItem, GetItemAsync },
    });
  }, []);
  return <Landing />;
};

export default BaseRouter;
