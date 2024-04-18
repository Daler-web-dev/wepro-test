"use client";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface ReviewsProps {
   reviews: any
}

const ReviewsCom: React.FC<ReviewsProps> = ({ reviews }) => {
   const [selectedId, setSelectedId] = useState<any>(null);

   useEffect(() => {
      if (selectedId) {
         document.body.style.overflowY = "hidden";
      } else {
         document.body.style.overflowY = "scroll";
      }
   }, [selectedId]);

   return (
      <>
         <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4">
            {reviews.map((item: { name: string, url: string, _id: string }) => {
               return (
                  <motion.div
                     key={item._id}
                     layoutId={`card-container-${item._id}`}
                     onClick={() => setSelectedId(item._id)}
                     className="min-h-[400px] max-2xl:min-h-[370px] max-lg:min-h-[300px] max-md:min-h-[260px] w-full relative flex rounded-xl p-5 max-lg:p-2 cursor-pointer overflow-hidden bg-black"
                  >
                     <div className="absolute z-20 top-0 left-0 w-full h-full"></div>
                     <motion.div className="absolute top-0 left-0 w-full h-full">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${item.url}`} frameBorder="0" allowFullScreen></iframe>
                     </motion.div>

                     <motion.div className="relative z-10 mt-auto px-5 max-lg:px-2 py-2 max-sm:py-1.5 rounded-[4px] bg-white">
                        <motion.p className="text-sm max-sm:text-xs font-helveticaNeueMedium">
                           {item.name}
                        </motion.p>
                     </motion.div>
                  </motion.div>
               );
            })}
         </div>

         <AnimatePresence>
            {selectedId && (
               <motion.div
                  className="fixed z-[100] inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex items-center justify-center px-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedId("")}
               >
                  {reviews.map((item: { name: string, url: string, _id: string }) => {
                     return (
                        item._id === selectedId && (
                           <motion.div
                              key={item._id}
                              layoutId={`card-container-${item._id}`}
                              initial={{ scale: 1, opacity: 1 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 1, opacity: 1 }}
                              onClick={(e) => e.stopPropagation()}
                              className="max-w-xs w-full min-h-[420px] relative flex rounded-xl p-5 max-lg:p-2 overflow-hidden bg-black"
                           >
                              <motion.div className="absolute top-0 left-0 w-full h-full">
                                 <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${item.url}`} frameBorder="0" allowFullScreen></iframe>
                              </motion.div>

                              <motion.div className="relative z-10 mt-auto px-5 max-lg:px-2 py-2 rounded-[4px] bg-white">
                                 <motion.p className="text-sm font-helveticaNeueMedium">
                                    {item.name}
                                 </motion.p>
                              </motion.div>
                           </motion.div>
                        )
                     );
                  })}
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};

export default ReviewsCom;
