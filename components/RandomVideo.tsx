"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { FaPlay } from 'react-icons/fa';

interface RandomVideoProps {
    reviews: any
    homePage: any
}

const RandomVideo: React.FC<RandomVideoProps> = ({ reviews, homePage }) => {
    const [randomNumber, setRandomNumber] = useState<string | null>("0");
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    useEffect(() => {
        // const interval = setInterval(() => {
        const randomVideo = Math.floor(Math.random() * 8);
        setRandomNumber(randomVideo.toString());
        // }, 10000);

        // return (() => clearInterval(interval))
    }, []);

    return (
        <div className='max-md:hidden h-full relative row-span-2 flex p-5 max-2xl:p-3 rounded-[22px] overflow-hidden'>
            <AnimatePresence>
                {
                    reviews.map((item: { _id: string; name: string; url: string }) => (
                        randomNumber === item._id && (
                            <motion.div
                                key={item._id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.div className="absolute top-0 left-0 w-full h-full">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${item.url}`}
                                        allowFullScreen
                                    ></iframe>
                                </motion.div>
                                <div className="absolute bottom-3 left-3 flex gap-2">
                                    <button className="bg-white px-6 max-2xl:px-4 rounded-xl">
                                        <FaPlay size={20} color="black" />
                                    </button>
                                    <div className="backdrop-blur-[7px] rounded-xl p-3 max-2xl:p-2 bg-[#ffffff99]">
                                        <p className="text-xs font-helveticaNeueBold">
                                            {homePage.howOur.look}
                                        </p>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    ))
                }
            </AnimatePresence>
        </div>
    );
}

export default RandomVideo;
