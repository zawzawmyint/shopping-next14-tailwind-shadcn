import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileAvatar({ user }) {
  return (
    <Avatar className="w-5 h-5">
      <AvatarImage src={user.image} alt={user.name} />
      <AvatarFallback>PF</AvatarFallback>
    </Avatar>
  );
}
