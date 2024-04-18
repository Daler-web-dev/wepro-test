"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Tabs {
   category: string
}

// type Tabs_arr = {
//    {
//       id: number;
//       title: string;
//       category: string;
//    }[]
// }
const tabs_arr: any = [
   {
      id: 0,
      title: "Все курсы",
      category: "all",
   },
   {
      id: 1,
      title: "Программирование",
      category: "programming",
   },
   {
      id: 2,
      title: "Дизайн",
      category: "design",
   },
   {
      id: 3,
      title: "Другое",
      category: "other",
   },
];

const Tabs: React.FC<Tabs> = ({ category }) => {
   const { push } = useRouter()

   return (
      <div className="bg-[#F4F4F4] w-full flex max-sm:grid grid-cols-2 space-x-1 justify-between items-center gap-1 p-1 rounded-lg overflow-auto no-scroll">
         {tabs_arr.map((tab: { id: number; title: string; category: string }) => (
            <button
               key={tab.id}
               onClick={() => push(`?type=${tab.category}`)}
               className={`${category === tab.category ? "text-white" : "hover:text-black/60"} relative w-full z-10 rounded-lg py-4 max-lg:py-3 px-8 max-3xl:px-5 max-lg:px-4 text-sm font-helveticaNeueBold text-center text-nowrap bg-transparent text-black transition focus-visible:outline-2`}
            // style={{ WebkitTapHighlightColor: "transparent", }}
            >
               {category === tab.category && (
                  <motion.span
                     layoutId="bubble"
                     className="absolute inset-0 z-[-1] mix-blend-difference bg-[#151FE1]"
                     style={{ borderRadius: 8 }}
                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
               )}
               {tab.title}
            </button>
         ))}
      </div>
   );
};

export default Tabs;
