import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProfileAvatar } from "./ProfileAvatar";

export function ProfileTooltip({user}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ProfileAvatar user={user} />
        </TooltipTrigger>
        <TooltipContent>
          <p>{user.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
