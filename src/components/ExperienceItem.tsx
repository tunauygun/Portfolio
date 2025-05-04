import type { Experience } from "@/types/types";

type Props = {
    experience: Experience;
};

export default function ExperienceItem({ experience }: Props){
    return(
        <>
            <img className="max-h-15 block dark:hidden" src={experience.companyLogoLight} alt={`${experience.company} Logo`}/>
            <img className="max-h-15 hidden dark:block" src={experience.companyLogoDark} alt={`${experience.company} Logo`}/>
            <div className="text-xl font-bold">{experience.company}</div>
            <div className="text-primary text-lg">{experience.title}</div>
            <div className="text-gray-500 dark:text-gray-400 mb-2">{experience.date}</div>
            <ul>
                {experience.description.map((p: string) => (
                    <li className="my-1">- {p}</li>
                ))}
            </ul>
        </>
    )
}