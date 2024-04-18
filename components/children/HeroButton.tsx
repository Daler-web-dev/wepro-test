"use client"

import { ModalContext } from "@/context";
import { useContext } from "react";

interface HeroButtonProps {
    homePage: any
}

const HeroButton: React.FC<HeroButtonProps> = ({ homePage }) => {
    const { openModal } = useContext(ModalContext)

    const onOpen = () => {
        openModal("", "classic", "");
    };

    return (
        <button onClick={onOpen} className="bg-[#151FE1] text-[#ffffff] w-full font-helveticaNeueBold py-3 rounded-lg border-2 border-[#151FE1]">
            {homePage.Hero.buttton}
        </button>
    );
}

export default HeroButton;