"use server";

import { wait } from "@/utils/helper";
import { redirect } from "next/navigation";
import { signIn, signOut } from "../../auth";

export async function logIn(option) {
  await signIn(option);
}
export async function logOut() {
  await signOut();
}

export async function placeOrder(data) {
  await wait();

  redirect("/");
  //   return { message: "success" };
  // ...
}
