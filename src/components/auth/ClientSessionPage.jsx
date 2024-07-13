import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";

export default async function ClientSessionPage({ children }) {
  const session = await auth();
  if (session?.user) {
    // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  return (
    <SessionProvider basePath={"/"} session={session}>
      {children}
    </SessionProvider>
  );
}
