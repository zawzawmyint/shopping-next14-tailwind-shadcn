"use server";

import { wait } from "@/utils/helper";
import { redirect } from "next/navigation";

export async function placeOrder(data) {
  await wait();
  console.log("Place Order", data);

  redirect("/");
  //   return { message: "success" };
  // ...
}
