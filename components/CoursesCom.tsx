import axios from "axios";

import {
   Carousel,
   CarouselContent,
} from "@/components/ui/carousel"

import Course from "./children/Course";

interface CoursesProps {
   category: string;
   lang?: string
}

type CoursesTyps = {
   _id: string;
   apps: string[];
   category: string;
   discount: number;
   isAI: boolean;
   isVisible: boolean;
   language: string;
   month: number;
   price: number;
   project: string;
   textAboutCourse: string;
   title: string;
   url: string;
   preview: string
};

const Courses: React.FC<CoursesProps> = async ({ category, lang }) => {
   const { data } = await axios.get(
      process.env.NEXT_PUBLIC_BASE + "/courses?project=wepro"
   );

   return (
      <>
         <Carousel
            className="w-full m-auto"
            opts={{
               align: "start",
               dragFree: true
            }}
         >
            <CarouselContent className="grid grid-flow-col grid-rows-2 gap-5 mx-36 max-3xl:mx-16 max-lg:mx-5 max-sm:mx-4 py-3 max-md:py-2">
               {
                  data.map((item: CoursesTyps) => {
                     if (category === item.category && lang === item.language) {
                        return <Course key={item._id} item={item} />;
                     } else if (category === "all" && lang === item.language) {
                        return <Course key={item._id} item={item} />;
                     }
                  })
               }
            </CarouselContent>
         </Carousel>
      </>
   );
};

export default Courses;
