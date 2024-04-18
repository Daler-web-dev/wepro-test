import { Suspense } from "react";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import Tabs from "@/components/children/Tabs";
import CoursesCom from "@/components/CoursesCom";
import CoursesLoading from "@/components/CoursesLoading";

interface CoursesProps {
   params: { lang: Locale }
   searchParams: any
}

const Courses: React.FC<CoursesProps> = async ({ searchParams, params: { lang } }) => {
   const { courses } = await getDictionary(lang);
   const category = searchParams['type'] ?? 'all'

   return (
      <>
         <section>
            <div className=" mb-28 max-xl:mb-20 max-md:mb-10">
               <div className="custom-container my-10 max-md:my-7">
                  <h2 className="max-w-xl text-5xl max-xl:text-4xl max-md:text-3xl leading-normal font-helveticaNeueBold mb-10 max-xl:mb-6">
                     {courses.title}
                  </h2>

                  <div className="md:w-fit rounded-lg overflow-scroll no-scroll">
                     <Tabs category={category} />
                  </div>
               </div>

               <Suspense fallback={<CoursesLoading />}>
                  <CoursesCom category={category} lang={lang} />
               </Suspense>
            </div>
         </section>
      </>
   );
};

export default Courses;
