import ClientSessionPage from "@/components/auth/ClientSessionPage";
import { SignIn } from "@/components/auth/SignIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="text-center">
      <div className="flex flex-col gap-2  my-2">
        <h1 className="text-3xl font-bold ">Join Us Now </h1>
        <h1 className="text-xl font-semibold ">Sign In to your account</h1>
        {/* <ClientSessionPage> */}
        <SignIn />
        {/* </ClientSessionPage> */}
        <Link href={"/"}>
          <Button className="my-5"> Continute Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
