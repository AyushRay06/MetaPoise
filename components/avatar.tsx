import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AvatarProps {
  src: string
}

export function AvatarDemo({ src }: AvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={src} alt="Er" />
      <AvatarFallback>EC</AvatarFallback>
    </Avatar>
  )
}
