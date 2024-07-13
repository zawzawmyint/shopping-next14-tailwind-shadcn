import Bag from "@/components/bag/Bag";
import PDetailsFallback from "@/components/skeleton-fallback/PDetailsFallback";
import React, { Suspense } from "react";

import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import SignInToast from "@/components/auth/SignInToast";

const Page = async () => {
  const session = await auth();

  // if (!session?.user) {
  //   redirect("/sign-in");
  // }

  return (
    <div>
      <Suspense key={"bag"} fallback={<PDetailsFallback bag />}>
        <Bag />
      </Suspense>
      {!session?.user && <SignInToast session={session} />}
    </div>
  );
};

export default Page;
