"use client";
import Modal from "@/components/Modal";
import { ModalContext } from "@/context";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

interface BranchProps {
   lang: any
}

const Branch: React.FC<BranchProps> = ({ lang }) => {
   const tabs = [
      {
         id: 0,
         title: lang.branch.button,
      },
      {
         id: 1,
         title: lang.branch.button2,
      },
   ];
   const { openModal } = useContext(ModalContext)

   let [active, setActive] = useState(tabs[0].id);

   const onOpen = () => {
      openModal("", "classic", "")
   };

   return (
      <>
         <div className="custom-container my-28 max-lg:my-24 max-sm:my-20">
            <div className="flex max-lg:flex-col items-center gap-20 max-2xl:gap-10 max-lg:gap-7 max-sm:gap-4 mb-11 max-lg:mb-7 max-sm:mb-4 mx-28 max-2xl:mx-0">
               <div className="w-1/2 max-lg:w-full">
                  <h2 className="text-5xl max-2xl:text-4xl leading-normal font-helveticaNeueBold mb-4">
                     {lang.branch.title}
                  </h2>
                  <p className="mb-8 max-lg:mb-4 text-xl max-md:text-lg font-helveticaNeueMedium max-xs:leading-snug text-[#A3A2AB]">
                     {lang.branch.dcr}
                  </p>

                  <div className="bg-[#F4F4F4] w-full flex space-x-1 justify-between items-center gap-1 mb-5 p-1 rounded-lg overflow-auto no-scroll">
                     {tabs.map((tab: { id: number; title: string }) => (
                        <button
                           key={tab.id}
                           onClick={() => setActive(tab.id)}
                           className={`${active === tab.id
                              ? "text-white"
                              : "hover:text-black/60"
                              } relative w-full z-10 rounded-lg py-4 max-lg:py-3 px-8 max-3xl:px-5 max-lg:px-4 text-sm font-helveticaNeueBold text-center text-nowrap text-black outline-sky-400 transition focus-visible:outline-2`}
                           style={{
                              WebkitTapHighlightColor: "transparent",
                           }}
                        >
                           {active === tab.id ? (
                              <motion.div
                                 layoutId="bubble2"
                                 className="absolute inset-0 z-[-1] mix-blend-difference bg-[#151FE1]"
                                 style={{ borderRadius: 8 }}
                                 transition={{
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.6,
                                 }}
                              />
                           ) : null}
                           {tab.title}
                        </button>
                     ))}
                  </div>

                  <div className="flex items-center gap-4">
                     <div className="">
                        <FaLocationDot color="#151FE1" size={73} className="" />
                     </div>
                     <div className="">
                        <p className="text-3xl max-sm:text-xl font-helveticaNeueBold">
                           {
                              active === 0 ?
                                 lang.branch.address
                                 :
                                 lang.branch.address2
                           }
                        </p>
                        <p>
                           {
                              active === 0 ?
                                 lang.branch.reference2
                                 :
                                 lang.branch.reference
                           }
                        </p>
                     </div>
                  </div>
               </div>
               <div className="w-1/2 max-lg:w-full min-h-[300px] max-xl:max-h-[400px] h-full flex rounded-2xl overflow-hidden">
                  {
                     active === 0 ?
                        <iframe
                           className="w-full h-auto"
                           src="https://yandex.uz/map-widget/v1/?ll=66.923906%2C39.652239&mode=whatshere&whatshere%5Bpoint%5D=66.922920%2C39.652300&whatshere%5Bzoom%5D=17&z=17.87"
                           frameBorder="1"
                           allowFullScreen
                        ></iframe>
                        :
                        <iframe
                           className="w-full h-auto"
                           src="https://yandex.uz/map-widget/v1/?ll=66.952576%2C39.655731&mode=whatshere&whatshere%5Bpoint%5D=66.951692%2C39.655811&whatshere%5Bzoom%5D=17&z=17.43"
                           frameBorder="1"
                           allowFullScreen
                        ></iframe>
                  }
               </div>
            </div>
            <div className="w-fit m-auto max-sm:w-full">
               <button onClick={onOpen} className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white max-sm:w-full py-4 px-[94px] text-[20px] max-sm:text-base font-helveticaNeueBold rounded-[7px] border duration-150 ease-in">
                  {lang.branch.button3}
               </button>
            </div>
         </div>
      </>
   );
};

export default Branch;
