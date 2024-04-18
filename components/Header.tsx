"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LinkPages from "./children/LinkPages";
import Modal from "./Modal";

import { AnimatePresence, motion } from "framer-motion";

import { IoIosMenu, IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import axios from "axios";
import { ModalContext } from "@/context";

const Header = ({ lang }: any) => {
   const pathName = usePathname();
   const locale = pathName.split('/')[1] === "ru" ? "uz" : "ru"
   const href = pathName ? `/${locale}/${pathName.slice(4)}` : `/${locale}`
   const [data, setdata] = useState<any>();

   const { openModal } = useContext(ModalContext)

   const [menu, setMenu] = useState(false);
   const links = [
      {
         title: lang.nav.home,
         link: `/${pathName.split('/')[1]}`,
         img: "/images/pages/home1.webp"
      },
      {
         title: lang.nav.courses,
         link: `/${pathName.split('/')[1]}/courses`,
         img: "/images/pages/courses.webp"
      },
      {
         title: lang.nav.reviews,
         link: `/${pathName.split('/')[1]}/reviews`,
         img: "/images/pages/reviews1.webp"
      },
      {
         title: lang.nav.groups,
         link: `/${pathName.split('/')[1]}/groups`,
         img: "/images/pages/groups.webp"
      },
   ];

   const onOpen = () => {
      openModal("", "consultation", "")
   };
   const HandelMenu = () => {
      setMenu(!menu);
   };

   useEffect(() => {
      if (menu) {
         document.body.style.overflow = "hidden"
      } else {
         document.body.style.overflowY = "scroll"
      }
   }, [menu]);

   useEffect(() => {
      axios.get(process.env.NEXT_PUBLIC_BASE + "/courses?project=wepro")
         .then((res: any) => {
            setdata(res.data);
         })
         .catch((err: any) => {
            console.log(err);
         })
   }, [])

   return (
      <>
         <motion.header
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative z-[56] m-auto duration-300 ease-in 
               ${pathName.includes("/course/") ? menu ? "bg-[#010018f1]" : "bg-[#020119]" : ""}
               ${menu ? "border-transparent" : ""}`}
         >
            <motion.div className={`custom-container w-full relative duration-300 ease-in ${menu ? "top-2" : "top-0"}`}>
               <motion.div className={`w-full flex gap-4 items-center justify-between py-4 px-8 max-lg:px-5 max-md:px-3 duration-300 ease-in rounded-xl ${menu ? "border-transparent shadow-lg" : ""}
               ${pathName.includes("/course/")
                     ? "bg-[#020119]"
                     : "bg-white"
                  }`}
               >
                  <div className="flex items-center gap-11 max-3xl:gap-8 max-xl:gap-1">
                     <div className="max-w-[120px] max-xl:max-w-[100px] w-full">
                        <Link href={`/${pathName.split('/')[1]}`} onClick={() => setMenu(false)}>
                           {pathName.includes("/course/") ? (
                              <Image
                                 src={"/images/logo-white.svg"}
                                 width={1000}
                                 height={1000}
                                 alt="logo"
                              />
                           ) : (
                              <Image
                                 src={"/images/logo.svg"}
                                 width={1000}
                                 height={1000}
                                 alt="logo"
                              />
                           )}
                        </Link>
                     </div>
                  </div>

                  <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                     <button
                        onClick={HandelMenu}
                        className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white flex items-center gap-2 font-helveticaNeueBold py-2 max-sm:py-1 px-4 max-sm:px-2 rounded-md border duration-150 ease-in"
                     >
                        {menu ? <IoClose size={20} /> : <IoIosMenu size={20} />}
                        {lang.menu.title}
                     </button>
                  </div>

                  <div className="flex items-center gap-7 max-2xl:gap-5 max-xl:gap-3 max-lg:hidden">
                     {/* <Link
                        className={`uppercase underline underline-offset-2 font-semibold ${pathName.includes("/course/") ? "text-white" : "text-black"}`}
                        href={href}
                     >
                        {locale}
                     </Link> */}

                     <button
                        onClick={onOpen}
                        className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white max-2xl:text-sm font-helveticaNeueBold py-3 px-6 max-3xl:px-3 rounded-md border duration-150 ease-in"
                     >
                        {lang.button}
                     </button>
                  </div>
               </motion.div>
            </motion.div>

            <AnimatePresence>
               {menu && (
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     onClick={() => setMenu(false)}
                     className={`w-full h-full fixed z-[-1] top-0 left-0 backdrop-blur-sm ${pathName.includes("/course/") ? "bg-white/10" : "bg-[#010018E5]"}`}
                  >
                     <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="custom-container h-screen grid-cols-10 gap-2.5 m-auto pt-24 pb-20 max-sm:pb-60 grid overflow-auto no-scroll"
                     >
                        <div onClick={(e) => e.stopPropagation()} className={`col-span-6 max-2xl:col-span-10 flex flex-col p-8 max-lg:p-5 max-md:p-0 rounded-2xl ${pathName.includes("/course/") ? "bg-[#020119]" : "bg-white"}`}>
                           <div className="flex items-center gap-4 mb-10 max-md:mb-5 max-md:p-3">
                              <div className={`w-fit flex gap-0.5 py-2 px-3 rounded-lg ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-600"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-500"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-400"></span>
                              </div>
                              <p className={`font-semibold ${pathName.includes("/course/") ? "text-white" : "text-black"}`}>
                                 {lang.menu.course}:
                              </p>
                           </div>
                           <ul className="w-full grid grid-cols-3 grid-rows-3 max-md:grid-flow-col max-md:grid-cols-[230px] gap-x-5 max-lg:gap-2 gap-y-3 mt-auto max-md:p-3 max-md:overflow-auto no-scroll">
                              {
                                 data.map((item: any, idx: number) => {
                                    if (item.language == pathName.split('/')[1]) {
                                       return (
                                          <Link onClick={() => setMenu(false)} key={item._id} href={{ pathname: `/course/${item.url}` }}>
                                             <li className={`w-full max-md:w-[230px] flex items-center gap-3 max p-1 rounded-xl cursor-pointer duration-150 ease-in hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                                <p className={`text-gray-400 text-sm font- p-3 px-3.5  rounded-lg ${pathName.includes("/course/") ? "bg-[#020119]" : "bg-white"}`}>
                                                   {idx >= 9 ? "" : "0"}{idx + 1}
                                                </p>
                                                <p className={`text-sm font-semibold ${pathName.includes("/course/") ? "text-white" : ""}`}>
                                                   {item.title}
                                                </p>
                                             </li>
                                          </Link>
                                       )
                                    }
                                 })
                              }
                           </ul>
                        </div>
                        <div onClick={(e) => e.stopPropagation()} className={`col-span-4 max-2xl:col-span-10 flex flex-col p-8 max-lg:p-5 max-md:p-0 rounded-2xl ${pathName.includes("/course/") ? "bg-[#020119]" : "bg-white"}`}>
                           <div className="flex items-center gap-4 mb-10 max-md:mb-5 max-md:p-3">
                              <div className={`w-fit flex gap-0.5 py-2 px-3 rounded-lg ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-600"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-500"></span>
                              </div>
                              <p className={`font-semibold ${pathName.includes("/course/") ? "text-white" : "text-black"}`}>
                                 {lang.menu.pages}:
                              </p>
                           </div>
                           <div className="grid grid-cols-2 max-2xl:grid-cols-4 max-md:grid-flow-col max-md:grid-cols-[200px] gap-2 mt-auto max-md:p-3 max-md:overflow-auto no-scroll">
                              {
                                 links.map((link: { title: string, link: string, img: string }, idx: number) => <LinkPages key={idx} link={link} idx={idx} HandelMenu={HandelMenu} pathName={pathName} />)
                              }
                           </div>
                        </div>
                        <div onClick={(e) => e.stopPropagation()} className={`col-span-6 max-xl:col-span-5 max-md:col-span-10 flex flex-col p-8 max-lg:p-5 max-md:p-3 rounded-2xl ${pathName.includes("/course/") ? "bg-[#020119]" : "bg-white"}`}>
                           <div className="flex items-center gap-4 mb-10 max-md:mb-5">
                              <div className={`w-fit flex gap-0.5 py-2 px-3 rounded-lg ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-600"></span>
                              </div>
                              <p className={`font-semibold ${pathName.includes("/course/") ? "text-white" : "text-black"}`}>
                                 {lang.menu.contact}:
                              </p>
                           </div>
                           <div className="flex max-xl:flex-col items-center gap-3 mt-auto">
                              <Link href={"https://t.me/weprouz"} className={`text-gray-400 p-3.5 rounded-2xl duration-150 ease-in max-xl:hidden hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <FaTelegram size={25} />
                              </Link>
                              <a href="https://t.me/weprouz" className={`w-full max-xl:flex hidden items-center gap-5 p-1 rounded-2xl cursor-pointer duration-150 ease-in text-[#151515cc] hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <p className="bg-white text-gray-400 p-3 rounded-xl" style={pathName.includes("/course/") ? { background: "#020119" } : { background: "#fff" }}>
                                    <FaTelegram size={25} />
                                 </p>
                                 <p className="text-sm font-semibold" style={pathName.includes("/course/") ? { color: "#fff" } : {}}>
                                    Telegram
                                 </p>
                              </a>
                              <a href="tel:+998 90 197-71-00" className={`w-full flex items-center gap-5 p-1 rounded-2xl cursor-pointer duration-150 ease-in text-[#151515cc] hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <p className="bg-white p-3 text-gray-400 rounded-xl" style={pathName.includes("/course/") ? { background: "#020119" } : { background: "#fff" }}>
                                    <FaPhone size={20} />
                                 </p>
                                 <p className="text-sm font-semibold" style={pathName.includes("/course/") ? { color: "#fff" } : {}}>
                                    +998 90 197-71-00
                                 </p>
                              </a>
                              <a href="mailto:shakhabdumalikovich@gmail.com" className={`w-full flex items-center gap-5 p-1 rounded-2xl cursor-pointer duration-150 ease-in text-[#151515cc] hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <p className="text-gray-400 p-3 rounded-xl" style={pathName.includes("/course/") ? { background: "#020119" } : { background: "#fff" }}>
                                    <MdEmail size={20} />
                                 </p>
                                 <p className="text-sm font-semibold" style={pathName.includes("/course/") ? { color: "#fff" } : {}}>
                                    shakhabdumalikovich@gmail.com
                                 </p>
                              </a>
                           </div>
                        </div>
                        <div onClick={(e) => e.stopPropagation()} className={`col-span-4 max-xl:col-span-5 max-md:col-span-10 flex flex-col p-8 max-lg:p-5 max-md:p-3 rounded-2xl ${pathName.includes("/course/") ? "bg-[#020119]" : "bg-white"}`}>
                           <div className="flex items-center gap-4 mb-10 max-md:mb-5">
                              <div className={`w-fit flex gap-0.5 py-2 px-3 rounded-lg ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                              </div>
                              <p className={`font-semibold ${pathName.includes("/course/") ? "text-white" : "text-black"}`}>
                                 {lang.menu.Social}:
                              </p>
                           </div>
                           <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
                              <Link href={"https://t.me/weprouz"} className={`text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <FaTelegram size={25} className="m-auto" />
                              </Link>
                              {/* <Link href={"https://www.facebook.com/wepro.uz"} className={`text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <FaFacebook size={25} className="m-auto" />
                              </Link> */}
                              <Link href={"https://www.instagram.com/wepro.uz/"} className={`text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <RiInstagramFill size={25} className="m-auto" />
                              </Link>
                              <Link href={"https://tiktok.com/weprouz"} className={`text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <FaTiktok size={25} className="m-auto" />
                              </Link>
                              <Link href={"https://uz.linkedin.com/in/khamidovshakh"} className={`text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <FaLinkedin size={25} className="m-auto" />
                              </Link>
                              <Link href={"https://www.youtube.com/@weproacademy2988"} className={`text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <FaYoutube size={25} className="m-auto" />
                              </Link>
                           </div>
                        </div>
                     </motion.div>
                  </motion.div>
               )}
            </AnimatePresence>
         </motion.header >
         {
            pathName.includes("/ru/course/") || pathName.includes("/uz/course/") ?
               null
               :
               <hr className="w-full relative z-50 mt-2" />
         }

      </>
   );
};

export default Header;
