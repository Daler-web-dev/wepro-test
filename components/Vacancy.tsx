import { useRef, useEffect } from 'react';
import Image from "next/image";
import { useTransform, useScroll, motion } from 'framer-motion';

interface VacancyProps {
   item: string;
   idx: number;
   progress: any
   range: any
   targetScale: any
}

const Vacancy: React.FC<VacancyProps> = ({ item, idx, progress, range, targetScale, }) => {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'start start']
   })

   const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
   const scale = useTransform(progress, range, [1, targetScale]);

   return (
      <div className="h-[65vh] w-full sticky top-0 flex items-center justify-center">
         <motion.div
            style={{ top: `calc(-5vh + ${idx * 25}px)`, scale }}
            transition={{ duration: 0.5 }}
            className="w-full h-[500px] max-xs:h-[440px] relative -top-6 rounded-2xl overflow-hidden shadow-[0px_-10px_15px_#00000050] bg-white"
         >
            <img
               className="object-cover w-full h-auto rounded-xl"
               src={`https://wepro.uz/api/uploads/${item}`}
               width={1000}
               height={1000}
               alt="vacacy"
            />
         </motion.div>
      </div>
   );
};

export default Vacancy;
