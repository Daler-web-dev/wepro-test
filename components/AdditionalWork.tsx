"use client"
import { ModalContext } from "@/context";
import { useContext } from "react";
import { MdArrowOutward } from "react-icons/md";

interface AdditionalWorkProps {
    course: any
    data: any
}

const AdditionalWork: React.FC<AdditionalWorkProps> = ({ course, data }) => {
    const { openModal } = useContext(ModalContext)

    const onOpen = () => {
        openModal(data._id, "classic", "");
    };

    return (
        <div className="">
            <div className="mb-9 max-lg:mb-5 mt-12 max-xl:mt-8 max-md:mt-6">
                <h3 className="text-2xl max-md:text-xl font-helveticaNeueBold md:text-center text-white">
                    {course.studentsWork.additional}
                </h3>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-14 max-3xl:gap-x-5 max-lg:gap-x-5 mx-52 max-3xl:mx-40 max-xl:mx-20 max-lg:mx-0 max mb-24 max-xl:mb-16 max-lg:mb-10 max-md:mb-0">
                {data?.additionalWorkAfterCourse.map((item: { money: number, title: number, _id: string }, idx: number) => {
                    return (
                        <div
                            key={item._id}
                            className="flex items-center justify-between py-4 border-b border-[#ffffff66]"
                        >
                            <p className="text-[#A3A2AB] max-lg:text-sm font-helveticaNeueBold">
                                0{idx + 1}.
                            </p>
                            <p className="text-white text-lg font-helveticaNeueBold text-center">
                                {item.title}
                            </p>
                            <p className="text-nowrap p-1 px-2 font-helveticaNeueBold rounded-lg max-2xl:text-base text-white bg-[#ffffff99]">
                                {course.studentsWork.from} ${item.money}$/{course.studentsWork.month}
                            </p>
                        </div>
                    );
                })}
            </div>
            <button
                onClick={onOpen}
                className="bg-white flex items-center gap-2 m-auto p-2 rounded-lg max-md:hidden"
            >
                <span className="p-2 rounded-lg bg-[#000]">
                    <MdArrowOutward
                        size={20}
                        color="white"
                        className=""
                    />
                </span>
                <span className="text-xl max-xl:text-lg font-helveticaNeueBold">
                    {course.studentsWork.button} “{data?.title}”
                </span>
            </button>
        </div>
    );
}

export default AdditionalWork;