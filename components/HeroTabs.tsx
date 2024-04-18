"use client"
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

interface HeroTabsProps {
    courses: any
    homePage: any
}

const HeroTabs: React.FC<HeroTabsProps> = ({ courses, homePage }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [index, setIndex] = useState<number>(0);
    const [progress, setProgress] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress + 1 <= 100 ? prevProgress + 2 : 0
            );

            if (progress === 100) {
                setProgress(0);
                setCurrentSlide((prevSlide: number) => (prevSlide + 1) % courses.length);
                setIndex((prevSlide: number) => (prevSlide + 1) % courses.length);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [currentSlide, progress]);

    useEffect(() => {
        scrollToElement(currentSlide);
    }, [currentSlide]);

    const scrollToElement = (index: number) => {
        const container = sliderRef.current as unknown as HTMLDivElement;
        const element = document.getElementById(`item-${index}`);
        if (container && element) {
            const scrollOffset =
                element.offsetLeft -
                (container.clientWidth - element.clientWidth) / 2;
            container.scrollTo({
                left: scrollOffset,
                behavior: "smooth",
            });
        }
    };

    const handelSlide = (id: number) => {
        setProgress(0);
        setIndex(id)
        setCurrentSlide(id);
    };

    return (
        <>
            <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                    duration: .3,
                    type: "tween"
                }}
                className="relative min-h-[650px] max-3xl:min-h-[550px] max-lg:min-h-[350px] max-sm:min-h-[300px] max-xs:min-h-[230px] flex p-5 max-xl:p-4 max-sm:px-2 max-sm:py-4 rounded-3xl bg-cover bg-no-repeat"
            >
                <AnimatePresence>
                    {
                        index === currentSlide && (
                            <div className="w-full h-full absolute top-0 left-0 z-[-1]">
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: .4, }}
                                    className="w-full h-full object-cover rounded-3xl max-md:rounded-2xl pointer-events-none select-none"
                                    src={`https://wepro.uz/api/${courses[currentSlide]?.image}`}
                                    alt="banner"
                                />
                            </div>
                        )
                    }
                </AnimatePresence>
                <div className="w-full mt-auto rounded-3xl max-lg:rounded-xl max-sm:rounded-lg px-6 max-xl:px-3 max-sm:px-2 backdrop-blur-[15px] bg-[#f4f4f48c]">
                    <div className="max-lg:hidden py-6 max-2xl:py-4 text-center border-b border-[#1515151a]">
                        <h1 className="text-3xl max-lg:text-2xl font-helveticaNeueBold">
                            {homePage.Hero.title}
                        </h1>
                        <p className="text-[#00000099] text-sm font-helveticaNeueBold">
                            {homePage.Hero.dcr}
                        </p>
                    </div>
                    <div className="px-14 max-3xl:px-5 max-xl:px-0 py-6 max-3xl:py-4 max-lg:py-2 max-sm:py-1">
                        <ul
                            ref={sliderRef}
                            className="flex items-center justify-between overflow-scroll no-scroll"
                        >
                            {courses.map((item: any, idx: number) => {
                                return (
                                    <motion.li
                                        key={idx}
                                        id={`item-${idx}`}
                                        onClick={() => handelSlide(idx)}
                                        className="overflow-hidden flex-shrink-0 text-nowrap space-nowrap relative flex items-center gap-2 max-2xl:gap-2 py-3 px-7 max-3xl:px-5 max-2xl:px-4 rounded-lg cursor-pointer"
                                        style={{
                                            background:
                                                currentSlide === idx
                                                    ? "#151fe166"
                                                    : "transparent",
                                            color:
                                                currentSlide === idx
                                                    ? "white"
                                                    : "black",
                                        }}
                                    >
                                        <motion.span
                                            className="absolute inset-0 z-[-1] rounded-lg transition-all bg-[#151FE1]"
                                            style={
                                                currentSlide === idx
                                                    ? {
                                                        width: `${progress}%`,
                                                        background: "#151FE1",
                                                    }
                                                    : {
                                                        background: "transparent",
                                                    }
                                            }
                                        >
                                        </motion.span>
                                        <p className="text-xs font-helveticaNeueBold">
                                            {item.buttonText}
                                        </p>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </motion.div >
        </>
    );
}

export default HeroTabs;