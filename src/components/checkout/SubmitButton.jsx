"use client";

import { useFormStatus } from "react-dom";

import { Button } from "../ui/button";
import { useSession } from "next-auth/react";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className={"rounded-lg h-14"} type="submit" disabled={pending}>
      {pending ? "Ordering..." : " Place Order"}
    </Button>
  );
}
