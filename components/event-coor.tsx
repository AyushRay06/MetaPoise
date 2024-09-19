import { AvatarDemo } from "./avatar"

interface EventCoordinatorsProps {
  src: string
  name: string
}

export const EventCoordinators = ({ src, name }: EventCoordinatorsProps) => {
  return (
    <div className="flex py-4">
      <AvatarDemo src={src} />
      <h2 className="pt-2 ml-2 text-sm md:text-lg font-medium md:font-extrabold text-neutral-300">
        {name}
      </h2>
    </div>
  )
}
