import type { Experience } from "@/types/types";
import ExperienceItem from "./ExperienceItem";
import Timeline from "./Timeline";

type Props = {
  experiences: Experience[];
};

export default function ExperienceSection({ experiences }: Props) {
  const experienceItems = experiences.map((e, i) => (
    <ExperienceItem experience={e} />
  ));

  return (
    <section className="mb-16">
      <Timeline title="Experience" items={experienceItems} />
    </section>
  );
}
