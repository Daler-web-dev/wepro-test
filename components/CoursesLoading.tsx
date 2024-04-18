interface CoursesLoadingProps {
}

const CoursesLoading: React.FC<CoursesLoadingProps> = () => {
    return (
        <>
            <div className="overflow-x-scroll no-scroll">
                <div className={`max-w-[1728px] w-full mx-auto grid grid-flow-col grid-rows-2 grid-cols-[450px] max-2xl:grid-cols-[400px] max-lg:grid-cols-[310px] gap-7 max-2xl:gap-5 mb-3 px-36 max-3xl:px-16 max-lg:px-5 max-sm:px-4 py-5`}>
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7].map((item: number) => (
                            <div key={item} className="bg-gray-200 min-w-[460px] max-2xl:min-w-[400px] max-lg:min-w-[310px] animate-pulse rounded-3xl max-xl:rounded-2xl p-2">
                                <div className="max-lg:hidden h-48 rounded-lg w-full mb-4 bg-gray-200 dark:bg-gray-400"></div>
                                <div className="px-3 max-lg:px-0 mt-5 max-lg:mt-0 flex flex-col">
                                    <div className="h-8 max-lg:h-6 rounded-full w-3/4 mb-4 bg-gray-200 dark:bg-gray-400"></div>
                                    <div className="flex flex-wrap gap-2 mb-5 max-2xl:mb-3">
                                        {
                                            [0, 1, 2, 3, 4, 5, 6, 7].map((item: number) => {
                                                return (
                                                    <div key={item} className="h-7 max-lg:h-5 w-20 max rounded-full bg-gray-200 dark:bg-gray-400"></div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="h-5 rounded-full w-2/3 mb-3 bg-gray-200 dark:bg-gray-400"></div>
                                    <div className="h-5 rounded-full w-2/3 mb-4 bg-gray-200 dark:bg-gray-400"></div>

                                    <div className="mt-7 h-12 max-lg:h-11 w-2/3 max-sm:w-11 rounded-lg max-sm:rounded-full bg-gray-200 dark:bg-gray-400"></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default CoursesLoading;