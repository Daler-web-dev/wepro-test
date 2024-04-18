interface GroupsLoadingProps {

}

const GroupsLoading: React.FC<GroupsLoadingProps> = () => {
    return (
        <>
            <div className="custom-container py-3 max-sm:py-2 overflow-scroll no-scroll">
                <div className="grid grid-flow-col grid-rows-2 grid-cols-[450px] max-2xl:grid-cols-[400px] max-lg:grid-cols-[310px] gap-7 max-2xl:gap-5 mb-7 max-2xl:mb-5 p-3 max-sm:p-2">
                    {
                        [0, 1, 2, 3, 4, 5].map((item: number) => (
                            <div key={item} className="w-[450px] max-2xl:w-[400px] max-lg:w-[310px] rounded-[20px] overflow-hidden animate-pulse bg-gray-300">
                                <div className="min-h-[222px] max-lg:min-h-[150px] m-2 rounded-2xl bg-gray-400"></div>


                                <div className="px-7 max-2xl:px-4 pb-6 max-sm:p-4 flex flex-col flex-grow">
                                    <div className="h-8 max-lg:h-6 w-3/4 mb-4 max-lg:mb-2 max-2xl:mb-3 rounded-full bg-gray-400"></div>

                                    <div className="h-6 max-lg:h-4 w-3/5 mb-0.5 rounded-full bg-gray-400"></div>
                                    <div className="h-6 max-lg:h-4 w-3/5 mb-0.5 rounded-full bg-gray-400"></div>
                                    <div className="h-6 max-lg:h-4 w-3/5 mb-5 rounded-full max-xl:mb-4 bg-gray-400"></div>

                                    <div className="h-11 max-lg:h-9 w-1/2 max-md:w-full mt-10 rounded-lg bg-gray-400"></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default GroupsLoading;