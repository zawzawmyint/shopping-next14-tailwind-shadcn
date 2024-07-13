import React from "react";
import DetailsWrapper from "../generic/detailsWrapper/DetailsWrapper";
import Summary from "../bag/Summary/Summary";
import BagHeader from "../bag/BagHeader";
import OrderPopover from "./OrderPopover";
import DeliverAndPickup from "./DeliverAndPickup";
import ClientSessionPage from "../auth/ClientSessionPage";

const Checkout = () => {
  return (
    <DetailsWrapper>
      <div className="container flex flex-col-reverse sm:flex-row gap-5 p-2">
        <div className="w-full sm:basis-2/3">
          <BagHeader text={"How would you like to get your order?"} />
          <DeliverAndPickup />
        </div>
        <div className="w-full sm:basis-1/3">
          <div className="hidden sm:block">
            <BagHeader text={"Order Summary"} />
            <Summary isOrder />
          </div>
          <div className="sm:hidden">
            <OrderPopover />
          </div>
        </div>
      </div>
    </DetailsWrapper>
  );
};

export default Checkout;
