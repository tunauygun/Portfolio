export default function Component() {
  const data = [
    {
      date: "Jan 2023 – Present",
      title: "Frontend Developer",
      company: "Cool Startup",
      description: [
        "Built responsive and accessible UI components using React and Tailwind.",
        "Collaborated with designers and backend engineers to ship features quickly.",
        "Contributed to a growing design system with reusable components.",
      ],
    },
    {
      date: "May 2022 – Dec 2022",
      title: "Software Engineer Co-op",
      company: "TechCorp",
      description: [
        "Developed internal tools that improved team productivity by 20%.",
        "Worked on REST APIs using Node.js and Express.",
        "Wrote automated tests with Jest to ensure code quality.",
      ],
    },
    {
      date: "Sep 2021 – Apr 2022",
      title: "Junior Developer",
      company: "Startup Lab",
      description: [
        "Helped refactor legacy codebase to modern JavaScript standards.",
        "Fixed frontend bugs and implemented small features.",
        "Participated in sprint planning and team code reviews.",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center px-6 sm:px-10">
      <h1 id="Experience" className="m-10 scroll-m-20 text-3xl font-semibold tracking-tight">Experience</h1>
      <div className="relative pl-6 grid gap-10 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20">
        {data.map((item, index) => (
          <div key={index} className="relative grid gap-1 text-sm group transition-all" >
            <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-gray-900 dark:bg-gray-50 -translate-x-[29.5px] z-10 
                      transition-all duration-300 group-hover:w-5 group-hover:rounded-full" />
            <div className="transition-transform duration-300 group-hover:translate-x-1">
              <img className="max-h-15" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUvsyXLOeY1jwfTnV4oq9d2TJ9wYW1q4uiA&s" alt={`${item.company} Logo`}/>

              <div className="text-xl font-bold">{item.company}</div>
              <div className="text-primary text-lg">{item.title}</div>

              <div className="text-gray-500 dark:text-gray-400 mb-2">
                {item.date}
              </div>

              <ul>
                {item.description.map((p) => (
                  <li className="my-1">- {p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
