import type { ReactNode } from "react";

type Props = {
  title: string,
  items: ReactNode[];
};

export default function Timeline({ title, items }: Props) {
  return (
    <section className="flex flex-col items-center justify-center px-6 sm:px-10">
      <h1 id={title} className="m-10 scroll-m-20 text-3xl font-semibold tracking-tight">{title}</h1>
      <div className="relative pl-6 grid gap-10 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20">
        {items.map((item, index) => (
          <div key={index} className="relative grid gap-1 text-sm group transition-all" >
            <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-gray-900 dark:bg-gray-50 -translate-x-[29.5px] z-10 
                      transition-all duration-300 group-hover:w-5 group-hover:rounded-full" />
            <div className="transition-transform duration-300 group-hover:translate-x-1">
              {item}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
