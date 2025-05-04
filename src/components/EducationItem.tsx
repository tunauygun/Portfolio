import type { Education } from "@/types/types";

type Props = {
    education: Education;
};

export default function EducationItem({ education }: Props){
    return(
        <>
            <img className="max-h-15 block dark:hidden" src={education.schoolLogoLight} alt={`${education.school} Logo`}/>
            <img className="max-h-15 hidden dark:block" src={education.schoolLogoDark} alt={`${education.school} Logo`}/>
            <div className="text-xl font-bold">{education.school}</div>
            <div className="text-primary text-lg">{education.degree}</div>
            <div className="text-gray-500 dark:text-gray-400 mb-2">{education.date}</div>
            <ul>
                {education.description.map((p: string) => (
                    <li className="my-1">- {p}</li>
                ))}
            </ul>
        </>
    )
}