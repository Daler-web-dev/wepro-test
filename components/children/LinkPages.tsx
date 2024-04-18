import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface LinkPagesProps {
    link: { title: string; link: string; img: string; }
    idx: number
    HandelMenu: () => void
    pathName: string
}

const LinkPages: React.FC<LinkPagesProps> = ({ link, idx, HandelMenu, pathName }) => {
    const [activeLink, setActiveLink] = useState(window.innerWidth < 540 ? true : false);

    return (
        <Link
            key={idx}
            href={link.link}
            onClick={HandelMenu}
            onMouseEnter={() => setActiveLink(true)}
            onMouseLeave={() => setActiveLink(window.innerWidth < 540 ? true : false)}
            className={`max-md:w-[200px] relative z-10 overflow-hidden flex flex-col justify-between p-3 rounded-2xl 
                ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}
            `}
        >
            <AnimatePresence>
                {
                    activeLink && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute z-[-2] top-4 left-3 right-3">
                                <Image src={link.img} width={1000} height={1000} alt="page" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full absolute left-0 top-0 z-[-1] bg-gradient-to-t from-[#151FE1] from-[1%] to-transparent to-[99%]"
                            ></motion.div>
                        </>
                    )
                }
            </AnimatePresence>
            <div className={`w-fit ml-auto rounded-full mb-8 p-2 ${pathName.includes("/course/") ? 'bg-[#020119]' : 'bg-white'}`}>
                <MdArrowOutward size={20} color="#151FE1" />
            </div>
            <div className="">
                <p className={`text-sm font-semibold`}
                    style={activeLink ? { color: "#fff" } : pathName.includes("/course/") ? { color: "#fff" } : { color: "#000" }} >
                    {link.title}
                </p>
            </div>
        </Link >
    );
}

export default LinkPages;