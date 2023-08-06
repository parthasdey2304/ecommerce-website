function Bestseller() {
    return (
        <div className="flex-col space-y-10 p-10">
            <div className="text-3xl md:text-7xl flex items-center justify-center font-semibold font-serif my-10">Bestseller Products</div>
            <div className="flex justify-center space-x-5">
                <button className="border-2 border-red-500 bg-red-600 text-whitetext-sm md:text-4xl px-2 py-1 md:px-8 md:py-4 font-serif font-semibold rounded-full">All</button>
                <button className="border-2 border-red-500 text-sm md:text-4xl px-2 py-1 md:px-8 md:py-4 font-serif font-semibold rounded-full">Nike</button>
                <button className="border-2 border-red-500 text-sm md:text-4xl px-2 py-1 md:px-8 md:py-4 font-serif font-semibold rounded-full">Puma</button>
                <button className="border-2 border-red-500 text-sm md:text-4xl px-2 py-1 md:px-8 md:py-4 font-serif font-semibold rounded-full">Addidas</button>
                <button className="border-2 border-red-500 text-sm md:text-4xl px-2 py-1 md:px-8 md:py-4 font-serif font-semibold rounded-full">Apex</button>
            </div>

            <div className="grid md:grid-cols-4 gap-5 md:gap-10  md:gap-y-24 md:pt-10">
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-blue-600 h-[250px] md:h-[700px] p-8">
                        <img src="" alt="" className="bg-black w-full h-full" />
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]"></div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-blue-600 h-[250px] md:h-[700px] p-8">
                        <img src="" alt="" className="bg-black w-full h-full" />
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]"></div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-blue-600 h-[250px] md:h-[700px] p-8">
                        <img src="" alt="" className="bg-black w-full h-full" />
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]"></div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-blue-600 h-[250px] md:h-[700px] p-8">
                        <img src="" alt="" className="bg-black w-full h-full" />
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]"></div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-blue-600 h-[250px] md:h-[700px] p-8">
                        <img src="" alt="" className="bg-black w-full h-full" />
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]"></div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-blue-600 h-[250px] md:h-[700px] p-8">
                        <img src="" alt="" className="bg-black w-full h-full" />
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]"></div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-blue-600 h-[250px] md:h-[700px] p-8">
                        <img src="" alt="" className="bg-black w-full h-full" />
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]"></div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-blue-600 h-[250px] md:h-[700px] p-8">
                        <img src="" alt="" className="bg-black w-full h-full" />
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]"></div>
                </div>
            </div>
        </div>
    );
}

export default Bestseller;