import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import Marquee from "react-fast-marquee";

interface CompanyProps {
   homePage: {
      company: {
         title: string
         dcr: string
      }
   }
}

const Company: React.FC<CompanyProps> = async ({ homePage }) => {

   return (
      <section className="">
         <div className="my-28 max-lg:my-24 max-sm:my-20 ">
            <div className="max-w-5xl w-full mx-auto mb-[10px] md:text-center px-28 max-2xl:px-10 max-xl:px-4">
               <h2 className="mb-4">
                  {homePage.company.title}
               </h2>
               <p className="text-xl max-lg:text-lg font-helveticaNeueMedium text-[#A3A2AB]">
                  {homePage.company.dcr}
               </p>
            </div>
            <div className="pointer-events-none select-none">
               <Marquee className="py-5" direction="left">
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/it-park.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/family-park.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/b-marketing.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/sfx-marketing.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/madad.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/akma-respect.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/samcity.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/py.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/leader-print.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/brandex.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
               </Marquee>
               <hr className="h-0.5 border-none bg-[#e8e8eb]" />
               <Marquee className="py-5 " direction="right">
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/it-park.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/family-park.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/b-marketing.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/sfx-marketing.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/madad.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/akma-respect.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/samcity.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/py.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/leader-print.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
                  <div className="max-w-[250px] max-md:max-w-[170px] w-full mr-5 py-3 shadow-lg rounded-xl overflow-hidden bg-white">
                     <Image
                        src={"/images/company/brandex.webp"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </div>
               </Marquee>
            </div>
         </div>

         {/* <div className="px-28 max-2xl:px-10 max-xl:px-0">
               <ul className="grid grid-cols-4 max-md:grid-cols-3 max-md:gap-2 py-10 max-md:py-0">
                  <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                     <Image
                        className="max-md:scale-[1.7]"
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                     <Image
                        className="max-md:scale-[1.7]"
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                     <Image
                        className="max-md:scale-[1.7]"
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="max-md:hidden"></li>
                  <li className="overflow-hidden py-5">
                     <Image
                        className="max-md:scale-[1.7]"
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="md:hidden"></li>
                  <li className="overflow-hidden py-5">
                     <Image
                        className="max-md:scale-[1.7]"
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className=""></li>
               </ul>
            </div> */}

      </section>
   );
};

export default Company;
