"use client"
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import Modal from "../Modal";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "@/context";


interface CourseProps {
	item: {
		_id: string;
		apps: string[];
		category: string;
		discount: number;
		isAI: boolean;
		isVisible: boolean;
		language: string;
		month: number;
		price: number;
		project: string;
		textAboutCourse: string;
		title: string;
		url: string;
		preview: string;
	};
}

const Course: React.FC<CourseProps> = ({ item }) => {
	const { openModal } = useContext(ModalContext)

	const onOpen = () => {
		openModal(item._id, "classic", "");
	};

	return (
		<>
			<div className="select-none flex flex-col h-auto w-[450px] max-2xl:w-[400px] max-lg:w-[300px] rounded-3xl max-xl:rounded-2xl shadow-[0px_4px_5px_0px_#00000026] hover:shadow-[0px_5px_15px_3px_#00000026] duration-150 ease-in bg-white">
				<Link
					href={{ pathname: `/course/${item.url}` }}
					className="h-full"
				>
					<div className="p-2 max-lg:hidden">
						<img
							className="w-full h-64 object-cover rounded-xl"
							src={item?.preview ? item?.preview : "/images/course-img.jpg"}
							alt="course"
						/>
					</div>
					<div className="flex flex-col h-full px-7 max-2xl:px-4 pb-6 max-xl:pb-3 pt-3 max-xl:pt-0 max-lg:p-5">
						<h3 className="text-3xl max-2xl:text-2xl max-sm:text-xl leading-normal max-sm:leading-tight font-helveticaNeueBold mb-3">
							{item.title}
						</h3>
						<ul className="flex flex-wrap gap-1.5 mb-3 max-2xl:mb-3">
							{item.apps.map((item: string, idx: number) => {
								return (
									<li
										key={idx}
										className="px-4 max-md:px-3 py-1 rounded-full cursor-pointer border duration-150 ease-in hover:bg-black hover:text-white sm:border-[#00000015] max-sm:border-black"
									>
										<p className="text-xs leading-normal">
											{item}
										</p>
									</li>
								);
							})}
						</ul>
						<p className="max-xl:text-sm">
							Срок обучения: {item.month} месяцев
						</p>
						<p className="max-xl:text-sm mb-5 max-2xl:mb-4">
							Цена: {item.price.toLocaleString()} сум/месяц
						</p>
					</div>
				</Link>
				<div className="mt-auto px-7 max-2xl:px-4 pb-6 max-xl:pb-3">
					<button onClick={onOpen} className="px-7 max-xl:px-5 py-3 max-xl:py-2 max-sm:p-3 max-lg:text-sm font-helveticaNeueBold rounded-lg max-sm:rounded-full duration-100 ease-in sm:border-2 sm:border-black hover:bg-[#151FE1] max-sm:bg-[#151FE1] hover:border-[#151FE1] hover:text-white">
						<span className="hidden max-sm:block">
							<IoArrowForwardOutline size={15} color="white" />
						</span>
						<span className="max-sm:hidden">
							Записаться на курс
						</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Course;
