import Image from "next/image";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import { reviewsVideo } from '@/constants/index'

import ReviewsCom from "@/components/ReviewsCom"

interface ReviewsProps {
   params: { lang: Locale };
}

const Reviews: React.FC<ReviewsProps> = async ({ params: { lang }, }) => {
   const { reviews } = await getDictionary(lang);

   return (
      <>
         <section>
            <div className="custom-container mb-28 max-lg:mb-20 max-md:mb-12 max-sm:mb-6">
               <div className="flex max-md:flex-col-reverse md:items-center justify-between max-md:gap-5 mt-12 max-sm:mt-6 mb-28 max-lg:mb-20 max-md:mb-12 max-sm:mb-6 mx-28 max-2xl:mx-20 max-xl:mx-10 max-lg:mx-0">
                  <div className="md:w-1/2">
                     <h2 className="md:max-w-sm text-5xl max-xl:text-4xl font-helveticaNeueBold leading-normal mb-7 max-2xl:mb-4">
                        {reviews.title}
                     </h2>

                     <p className="text-2xl max-2xl:text-xl max-xl:text-base leading-8">
                        {reviews.dcr}
                     </p>
                  </div>

                  <div className="max-w-md max-2xl:max-w-xs max-md:max-w-[225px]">
                     <Image
                        src={"/images/reviwes.webp"}
                        width={1000}
                        height={1000}
                        alt="reviwes"
                     />
                  </div>
               </div>

               <ReviewsCom reviews={reviewsVideo} />
            </div>
         </section>
      </>
   );
};

export default Reviews;
