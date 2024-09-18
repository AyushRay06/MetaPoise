import { OrganizerCard } from "./ui/organizer-card"

export const OrganizingTeam = () => {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="grid grid-cols-1  md:grid-cols-3 ">
        <div>
          <OrganizerCard
            name="Parismita Das"
            role="Organizer"
            imageUrl="/team/p.jpeg"
            connect="https://www.linkedin.com/in/parismita-das-765909237/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
        </div>
        <div>
          <OrganizerCard
            name="Rajpratim Mahanta"
            role="Organizer"
            imageUrl="/team/raj.jpeg"
            connect="https://www.linkedin.com/in/rajpratim-mahanta/?originalSubdomain=in"
          />
        </div>
        <div>
          <OrganizerCard
            name="Pratismith Gogoi"
            role="Student Convener"
            imageUrl="/team/p2.jpeg"
            connect="https://www.linkedin.com/in/parismita-gogoi-4a264924/?originalSubdomain=in"
          />
        </div>
      </div>
    </div>
  )
}
