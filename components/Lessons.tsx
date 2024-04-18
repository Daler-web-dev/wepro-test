"use client"
import { useState } from "react"
import { motion } from "framer-motion"

interface LessonsProps {
    data: any
    course: any
}

const Lessons: React.FC<LessonsProps> = ({ data, course }) => {
    const [show, setShow] = useState(10)

    return (
        <>
            <ul className="bg-[#f4f4f40d] flex flex-col items-center mb-20 max-xl:mb-14 max-lg:mb-8 max-md:mb-7 p-12 max-xl:p-8 max-md:p-2 rounded-3xl">
                {data?.lessons.slice(0, show).map(
                    (lesson: { title: string }, idx: number) => {
                        return (
                            <motion.li
                                key={idx}
                                animate={{ x: -40 }}
                                whileInView={{ x: 0 }}
                                transition={{ type: "spring", stiffness: 100, duration: .5 }}
                                viewport={{ once: true }}
                                className="w-full flex items-center gap-16 max-lg:gap-10 max-sm:gap-2 py-5 max-lg:py-4 cursor-pointer last:border-none border-b border-[#ffffff66]"
                            >
                                <p className="font-helveticaNeueBold text-[#E0E0E0]">
                                    {idx + 1}.
                                </p>
                                <p className="text-lg max-xs:text-base text-white">
                                    {lesson.title}
                                </p>
                            </motion.li>
                        );
                    }
                )}
                <button
                    onClick={() => setShow(data?.lessons.length === show ? 10 : data.lessons.length)}
                    style={show >= 10 ? { overflow: "hidden" } : { overflow: "block" }}
                    className="bg-white hover:bg-[#151FE1] border-[#151FE1] hover:text-white text-[#151FE1] w-fit max-sm:w-full mt-10 max-md:my-7 max-2xl:text-sm font-helveticaNeueBold py-3 px-8 max-3xl:px-6 rounded-md border-2 duration-150 ease-in">
                    {
                        show > 10 ? course.hide : course.show
                    }
                </button>
            </ul >
        </>
    )
}

export default Lessons