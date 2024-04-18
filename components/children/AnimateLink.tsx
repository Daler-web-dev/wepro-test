"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AnimateLinkProps {
   children: string;
   href: string;
}

const AnimateLink: React.FC<AnimateLinkProps> = ({ children, href }) => {
   const [isHovered, setIsHovered] = useState(false);

   return (
      <Link
         href={href}
         style={{
            position: "relative",
            textDecoration: "none",
            color: "inherit",
         }}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         {children}
         <motion.div
            style={{
               width: "100%",
               height: 2,
               backgroundColor: "#A3A2AB",
               position: "absolute",
               bottom: -2,
               right: 0,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
         />
      </Link>
   );
};

export default AnimateLink;
