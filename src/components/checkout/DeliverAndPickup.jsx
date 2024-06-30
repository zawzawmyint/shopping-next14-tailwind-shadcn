"use client";

import { useState } from "react";
import DeliverNPickupTabs from "./DeliverNPickupTabs";

import { DeliverForm } from "./DeliverForm";
import { PickItUpForm } from "./PickItUpForm";

const DeliverAndPickup = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="my-10">
      <DeliverNPickupTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <div className="my-10">
        {tabIndex === 0 && <DeliverForm />}
        {tabIndex === 1 && <PickItUpForm />}
      </div>
    </div>
  );
};

export default DeliverAndPickup;
