import { logOut } from "@/actions/actions";
import { Button } from "../ui/button";

export function SignOut() {
  return (
    <form action={logOut}>
      <Button variant="secondary" type="submit">
        OK, SURE
      </Button>
    </form>
  );
}
