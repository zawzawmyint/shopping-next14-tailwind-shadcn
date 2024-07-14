import { logIn } from "@/actions/actions";
import { GithubIcon, MailIcon, TwitterIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export function SignIn() {
  return (
    <div className="flex gap-1 flex-wrap justify-center items-center ">
      <LogInWithOptions option={"github"} />
      <LogInWithOptions option={"google"} />
      {/* <LogInWithOptions option={"twitter"} />  */}
    </div>
  );
}

function LogInWithOptions({ option }) {
  const logInWithOption = logIn.bind(null, option);
  return (
    <div>
      <form action={logInWithOption}>
        <Button size="icon" variant="ghost" type="submit">
          {option === "github" && <GithubIcon />}
          {option === "google" && (
            <Image
              src={"./google-icon.png"}
              alt="google"
              width={26}
              height={26}
              className="rounded-full"
            />
          )}
          {option === "twitter" && <TwitterIcon />}
        </Button>
      </form>
    </div>
  );
}
