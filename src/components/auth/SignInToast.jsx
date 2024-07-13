"use client";

import { useEffect } from "react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useRouter } from "next/navigation";

const SignInToast = ({ session }) => {
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      toast({
        variant: "destructive",
        title: "Enjoy your shopping!",
        description: "Please sign in first to order your items.",
        action: (
          <ToastAction
            altText="Sign In"
            onClick={() => router.push("/sign-in")}
          >
            Sign In
          </ToastAction>
        ),
      });
    }
  }, [session, toast]);

  return null;
};

export default SignInToast;
