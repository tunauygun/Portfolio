import EducationItem from "./EducationItem";
import Timeline from "./Timeline";
import type { Education } from "@/types/types";

type Props = {
  educationList: Education[];
};

export default function EducationSection({ educationList }: Props) {
  const educationItems = educationList.map((e, i) => (
    <EducationItem education={e} />
  ));

  return (
    <section className="mb-16">
      <Timeline title="Education" items={educationItems} />
    </section>
  );
}
