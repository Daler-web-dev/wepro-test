interface HeroLoadingProps {
}

const HeroLoading: React.FC<HeroLoadingProps> = () => {
    return (
        <>
            <div className="w-full min-h-[650px] max-3xl:min-h-[550px] max-lg:min-h-[350px] max-sm:min-h-[300px] max-xs:min-h-[270px] flex flex-col p-5 max-xl:p-4 max-sm:px-2 max-sm:py-4 rounded-3xl animate-pulse bg-gray-400">
                <div className="bg-gray-300 mt-auto px-6 max-xl:px-3 max-sm:px-2 rounded-3xl max-lg:rounded-xl max-sm:rounded-lg">
                    <div className="max-lg:hidden py-6 max-2xl:py-4 text-center border-b border-[#1515151a]">
                        <h1 className="text-3xl max-lg:text-2xl font-helveticaNeueBold">
                            С нуля до PRO за 5 месяца
                        </h1>
                        <p className="text-[#00000099] text-sm font-helveticaNeueBold">
                            Wepro - это сеть IT-школ в Самарканде
                        </p>
                    </div>
                    <div className="px-14 max-3xl:px-5 max-xl:px-0 py-6 max-3xl:py-4 max-lg:py-2 max-sm:py-1">
                        <ul className="flex items-center justify-between gap-5 max-2xl:gap-4 max-lg:gap-3 max-md:gap-2 overflow-scroll no-scroll">
                            {
                                [0, 1, 2, 3, 4, 5, 6, 7, 8].map((el: number) => (
                                    <li key={el} className="bg-gray-400 px-20 max-2xl:px-16 max py-5 rounded-lg"></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroLoading;