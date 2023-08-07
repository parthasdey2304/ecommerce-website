function Special_collection() {
    return (
        <div className="bg-blue-600 w-full h-[400px] md:h-[1200px] p-4 md:py-20 md:px-52 flex space-x-5">
            <div className="h-full w-[25%] bg-black flex-col space-y-28 p-4 md:px-16 md:py-28">
                <div className="text-5xl font-serif font-semibold text-white flex items-center justify-center">New Trend Edition</div>
                <div className="border-[10px] border-gray-400 w-[500px] h-[500px]"></div>
                <div className="flex justify-center">
                    <div className="underline underline-offset-[16px] text-white font-semibold text-4xl">Explore All</div>
                </div>
            </div>
            <div className="h-full w-[70%] bg-white flex-col space-y-5">
                <div className="flex justify-between p-10">
                    <div className="text-7xl font-semibold font-serif w-[40%]">Nike Special</div>
                    <div className="w-full h-1 border-1 border-gray-300 bg-gray-300 mt-8"></div>
                </div>

                <div className="w-full h-[870px] border bg-black flex space-x-5 p-5">
                    <div className="bg-green-600 w-full h-full">
                        <div className="bg-red-600 w-full h-[600px]"></div>
                    </div>
                    <div className="bg-green-600 w-full h-full">
                        <div className="bg-red-600 w-full h-[600px]"></div>
                    </div>
                    <div className="bg-green-600 w-full h-full">
                        <div className="bg-red-600 w-full h-[600px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Special_collection;