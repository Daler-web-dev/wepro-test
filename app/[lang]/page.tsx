import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import { reviewsVideo } from '@/constants/index'

import ScrollAnimation from "@/container/ScrollAnimation";
import Branch from "@/container/Branch";
import StudentWorks from "@/container/StudentWorks";
import Hero from "@/container/Hero";
import ReviewsCom from "@/components/ReviewsCom";
import Courses from "@/components/CoursesCom";
import Company from "@/container/Company";
import Form from "@/container/Form";
import FAQ from "@/container/FAQ";
import BgAnimated from "@/container/BgAnimated";
import CoursesLoading from "@/components/CoursesLoading";
import RandomVideo from "@/components/RandomVideo";
import axios from "axios";
// import Loadind from "./loading";

export default async function Home({
   params: { lang },
}: {
   params: { lang: Locale };
}) {
   const { homePage, faq } = await getDictionary(lang);
   const { data } = await axios.get(
      process.env.NEXT_PUBLIC_BASE + "/banners"
   );

   return (
      <>
         {/* <Loadind /> */}
         <section>
            <Hero lang={lang} />
         </section>

         <section className="xl:bg-[#F5F5F5] my-24 max-md:my-20 max-sm:mb-20 max-sm:mt-0">
            <div className="max-xl:block hidden mb-4 max-3xl:px-16 max-lg:px-4">
               <h2 className="max-w-[470px]">
                  {homePage.howOur.title}
               </h2>
            </div>
            <div className="custom-container min-h-[541px] max-xl:min-h-[350px] grid gap-5 max-2xl:gap-3 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 py-14 max-xl:py-4 max-xl:rounded-3xl max-xl:bg-[#F5F5F5]">
               <div className="col-span-2 flex max-xl:hidden">
                  <h2 className="max-w-[470px] m-auto text-5xl font-helveticaNeueBold">
                     {homePage.howOur.title}
                  </h2>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-2xl:text-6xl max-sm:text-4xl font-helveticaNeueBold tracking-tighter text-white-gradient mb-2">
                     11
                  </p>
                  <p className="max-sm:text-sm">
                     {homePage.howOur.text}
                  </p>
               </div>

               <RandomVideo reviews={reviewsVideo} homePage={homePage} />
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-2xl:text-6xl max-sm:text-4xl font-helveticaNeueBold tracking-tighter text-white-gradient mb-2">
                     2200+
                  </p>
                  <p className="max-sm:text-sm">
                     {homePage.howOur.text2}
                  </p>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-2xl:text-6xl max-sm:text-4xl font-helveticaNeueBold tracking-tighter text-white-gradient mb-2">
                     24/7
                  </p>
                  <p className="max-sm:text-sm">
                     {homePage.howOur.text3}
                  </p>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-2xl:text-6xl max-sm:text-4xl font-helveticaNeueBold tracking-tighter text-white-gradient mb-2">
                     70%
                  </p>
                  <p className="max-sm:text-sm">
                     {homePage.howOur.text4}
                  </p>
               </div>
            </div>
         </section>

         <section className="">
            <div id="courses" className="">
               <div className="custom-container mb-4 max-2xl:mb-2">
                  <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl leading-normal font-helveticaNeueBold">
                     {homePage.courses.title}
                  </h2>
               </div>
               <Suspense fallback={<CoursesLoading />}>
                  <Courses category="all" lang={lang} />
               </Suspense>
            </div>
         </section>

         <BgAnimated>
            <div className="gradient"></div>
            <div className="custom-container py-14 max-2xl:py-8 max-md:py-5">
               <div className="md:text-center">
                  <h2 className="text-white">{homePage.reviews.title}</h2>
                  <div className="max-w-[400px] max-md:max-w-[300px] md:m-auto">
                     <p className="text-xl max-md:text-lg leading-normal font-helveticaNeueMedium text-[#A3A2AB]">
                        {homePage.reviews.dcr}
                     </p>
                  </div>
               </div>
               <div className="mx-20 max-2xl:mx-0 max-xl:mx-0 my-8 max-xl:my-4 py-8 max-2xl:py-8 max-xl:py-4 border-t border-[#ffffff66]">
                  <ReviewsCom reviews={reviewsVideo} />
               </div>
            </div>
         </BgAnimated>

         {/* <section>
            <ScrollAnimation lang={homePage} />
         </section> */}

         <section>
            <Branch lang={homePage} />
         </section>
         {/* 
         <section className="overflow-hidden">
            <BgAnimated>
               <div className="gradient max-sm:w-96 max-sm:h-full"></div>
               <StudentWorks />
            </BgAnimated>
         </section> */}

         <section>
            <div className="custom-container relative">
               <div className="md:text-center mb-12">
                  <Image
                     className="max-w-7xl w-full h-auto m-auto absolute z-[-1] top-0 left-1/2 -translate-x-1/2 max-md:hidden"
                     src={'/images/yellow-hearts.png'}
                     width={1000}
                     height={1000}
                     alt="hearts"
                  />
                  <Image
                     className="max-w-7xl w-full h-auto m-auto absolute z-[-1] top-0 left-1/2 -translate-x-1/2 max-md:hidden"
                     src={'/images/gray-hearts.png'}
                     width={1000}
                     height={1000}
                     alt="hearts"
                  />
                  <h2 className="max-w-md w-full m-auto">
                     Наши учителя влюбляют в учебу
                  </h2>
                  <p className="max-w-4xl m-auto text-xl max-md:text-lg leading-normal font-helveticaNeueMedium text-[#A3A2AB]">
                     Кто-то любит пошутить и объяснить сложные штуки через игру. Кто-то направит, а кто-то даст свободу. Но все наши учителя любят своё дело и заряжают интересом всех учеников
                  </p>
               </div>
               <div className="max-md:w-fit m-auto flex items-center justify-center flex-wrap max-md:grid max-md:grid-cols-3 max-sm:grid-cols-2 gap-10 max-md:gap-6">
                  {
                     [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => (
                        <div key={item} className="max-w-[240px] h-auto w-full">
                           <Image
                              className="w-full h-full object-cover"
                              src={`/images/teachers/teacher-${item}.webp`}
                              width={1000}
                              height={1000}
                              alt="teacher"
                           />
                        </div>
                     ))
                  }
               </div>
            </div>
         </section>

         <Company homePage={homePage} />
         <section className="bg-[#F5F5F5] mb-28">
            <div className="custom-container">
               <div className="flex px-28 max-2xl:px-10 max-xl:px-0">
                  <div className="max-w-xl max-lg:max-w-full w-full py-14">
                     <h2 className="leading-tight mb-5">
                        {homePage.english.title}
                     </h2>
                     <div className="max-w-lg mx-auto mb-5 max-lg:block hidden">
                        <Image
                           src={"/images/wespeak.webp"}
                           width={1000}
                           height={1000}
                           alt="weapik"
                        />
                     </div>
                     <p className="text-[#A3A2AB] text-xl mb-10">
                        {homePage.english.dcr}
                     </p>
                     <Link
                        target="_blank"
                        href={"https://wespeak.uz/"}
                        className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white max-2xl:text-sm font-helveticaNeueBold py-3 px-6 max-3xl:px-3 rounded-md border duration-150 ease-in"
                     >
                        {homePage.english.button}
                     </Link>
                  </div>
                  <div className="max-w-2xl mt-auto max-lg:hidden">
                     <Image
                        src={"/images/wespeak.webp"}
                        width={1000}
                        height={1000}
                        alt="weapik"
                     />
                  </div>
               </div>
            </div>
         </section>
         <Form courseId={""} homePage={homePage} />
         <FAQ faq={faq} />
      </>
   );
}
