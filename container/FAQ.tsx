"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";

interface FAQProps {
   faq: any
}

const Accordion = ({ item, idx }: any) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleAccordion = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div
         onClick={toggleAccordion}
         className="bg-[#F4F4F4] h-fit rounded-xl py-6 max-sm:py-4 px-4 overflow-hidden">
         <div className="">
            <div className="flex items-center max-sm:justify-between mb-2 max-md:mb-3">
               <p className="bg-[#E0E0E0] text-[#A3A2AB] text-lg font-helveticaNeueBold py-1 max-md:py-0 px-2 rounded-md">
                  {idx + 1 < 10 ? "0" : ""}{idx + 1}
               </p>
               <p className="font-helveticaNeueBold sm:ml-4 flex-1 max-sm:hidden">
                  {item.question}
               </p>
               <button
                  className="bg-white ml-5 p-2 max-md:p-1.5 rounded-md"
               >
                  <AiOutlinePlus
                     size={26}
                     color="#6734EE"
                     className={`duration-150 ease-in ${isOpen ? "-rotate-45" : "rotate-0"}`}
                  />
               </button>
            </div>
            <div className="sm:hidden">
               <p className="font-helveticaNeueBold sm:ml-4 flex-1">
                  {item.question}
               </p>
            </div>
         </div>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`text-[#A3A2AB] font-helveticaNeueBold max-md:font-helveticaNeue overflow-hidden`}
               >
                  <p className={`ease-in duration-500 text-[#A3A2AB] ${isOpen && "sm:px-14 max-md:mt-2"}`}>
                     {item.answer}
                  </p>
               </motion.div>
            )}
         </AnimatePresence>
      </div >
   );
};

const FAQ: React.FC<FAQProps> = ({ faq }) => {
   const arr = [
      {
         question: faq.question,
         answer: faq.answer
      },
      {
         question: faq.question1,
         answer: faq.answer1
      },
      {
         question: faq.question2,
         answer: faq.answer2
      },
      {
         question: faq.question3,
         answer: faq.answer3
      },
      {
         question: faq.question4,
         answer: faq.answer4
      },
      {
         question: faq.question5,
         answer: faq.answer5
      },
      {
         question: faq.question6,
         answer: faq.answer6
      },
      {
         question: faq.question7,
         answer: faq.answer7
      },
      {
         question: faq.question8,
         answer: faq.answer8
      },
      {
         question: faq.question9,
         answer: faq.answer9
      },
   ]

   return (
      <section>
         <div className="custom-container my-28 max-lg:my-24 max-sm:my-20">
            <div className="mb-12 max-sm:mb-8">
               <h2 className="md:text-center">
                  {faq.title}
               </h2>
            </div>

            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 max-xl:gap-4">
               {arr.map((item: {
                  question: string
                  answer: string
               },
                  idx: number
               ) => (
                  <Accordion key={idx} item={item} idx={idx} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default FAQ;
