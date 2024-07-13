import { logIn } from "@/actions/actions";
import { GithubIcon, MailIcon, TwitterIcon } from "lucide-react";
import { Button } from "../ui/button";

export function SignIn() {
  return (
    <div className="flex gap-1 flex-wrap ">
      <LogInWithOptions option={"github"} />
      {/* <LogInWithOptions option={"google"} />
      <LogInWithOptions option={"twitter"} /> */}
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
          {option === "google" && <MailIcon />}
          {option === "twitter" && <TwitterIcon />}
        </Button>
      </form>
    </div>
  );
}
