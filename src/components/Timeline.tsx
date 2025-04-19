export default function Component() {
  const data = [
    {
      date: "March 14, 1879 - Invention of Quantum Computing",
      description:
        "Scientists at a leading research institution unveil a groundbreaking breakthrough in quantum computing",
    },
    {
      date: "April 1, 1939 - First Quantum Computer",
      description:
        "The first quantum computer is built by a team of researchers in a laboratory in the United States.",
    },
    {
      date: "June 12, 1954 - Quantum Computing Research",
      description:
        "A group of scientists in Europe publish a paper on quantum computing research.",
    },
    {
      date: "December 31, 1979 - Quantum Computing Breakthrough",
      description:
        "A team of researchers in Asia makes a significant breakthrough in quantum computing.",
    },
  ];

  return (
    <section className="flex justify-center p-6 sm:p-10">
      <div className="relative pl-6 grid gap-10 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20">
        {data.map((event, index) => (
          <div key={index} className="relative grid gap-1 text-sm group transition-all" >
            <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-gray-900 dark:bg-gray-50 -translate-x-[29.5px] z-10 
                     transition-all duration-300 group-hover:w-5 group-hover:rounded-full" />
            <div className="transition-transform duration-300 group-hover:translate-x-1">

              <div className="text-lg font-bold">{event.date}</div>
              <div className="text-gray-500 dark:text-gray-400">
                {event.description}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
