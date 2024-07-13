import ClientSessionPage from "@/components/auth/ClientSessionPage";
import { SignOut } from "@/components/auth/SignOut";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold ">Are you sure want to logout?</h1>
      <div className="flex flex-col gap-2  my-2">
        <ClientSessionPage>
          <SignOut />
        </ClientSessionPage>
        <Link href={"/"}>
          <Button>Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
