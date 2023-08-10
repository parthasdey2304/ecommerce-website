// importing all the images of the shoes
import shoe1 from '../static/special_collection/special_collection_1.png'
import shoe2 from '../static/special_collection/special_collection_2.png'
import shoe3 from '../static/special_collection/special_collection_3.png'
import shoe4 from '../static/special_collection/special_collection_4.png'

function Special_collection() {
    return (
        <div className="w-full h-[1600px] md:h-[1270px] p-4 md:py-20 md:px-52 md:flex space-x-5">
            <div className="h-[450px] md:h-full md:w-[25%] bg-black flex-col md:space-y-28 p-4 md:px-16 md:py-28">
                <div className="text-xl md:text-5xl font-serif font-semibold text-white flex items-center justify-center">New Trend Edition</div>
                <div className="border-[10px] border-gray-400 h-[250px] w-[250px] md:w-[500px] md:h-[500px] ml-12 md:ml-0 mt-10 md:mt-0">
                    <img src={shoe4} alt="shoes4 demo image nike special" className='w-[500px]' />
                </div>
                <div className="flex justify-center">
                    <div className="underline underline-offset-[16px] text-white font-semibold md:text-4xl pt-10 md:pt-0">Explore All</div>
                </div>
            </div>
            <div className="h-full w-full md:w-[70%] bg-white flex-col space-y-5">
                <div className="flex justify-between pt-10 md:pt-0 md:p-10">
                    <div className="text-3xl md:text-7xl font-semibold font-serif w-full md:w-[40%]">Nike Special</div>
                    <div className="hidden md:flex w-full h-1 border-1 border-gray-300 bg-gray-300 mt-8"></div>
                </div>

                <div className="w-full h-[600px] md:h-[950px] md:border-2 flex space-x-5 md:p-5 overflow-x-scroll md:overscroll-x-none">
                    <div className="bg-white w-full h-full">
                        <div className="bg-gray-200 w-full h-[400px] md:h-[600px] p-10">
                            <img src={shoe1} alt="shoe image" className='w-full p-14 hover:p-4 duration-300 hover:duration-300' />
                        </div>
                        <div className="w-full h-[300px] md:h-[300px]">
                        <div className='w-full h-full bg-black flex-col justify-center space-y-5 p-2 md:p-10'>
                            <div className='text-white text-2xl md:text-3xl w-full flex justify-center font-sans'>Men/Sports</div>
                            <div className='font-bold text-white text-2xl md:text-5xl flex justify-center items-center font-serif'>Running Sneaker Shoes</div>
                            <div className='font-semibold text-red-600 text-xl md:text-4xl flex justify-center pt-5 '>$190.85</div>
                        </div>
                    </div>
                    </div>
                    <div className="bg-white w-full h-full">
                        <div className="bg-gray-200 w-full h-[600px] p-10">
                            <img src={shoe2} alt="shoe image" className='w-full p-14 hover:p-4 duration-300 hover:duration-300' />
                        </div>
                        <div className="w-full h-[150px] md:h-[300px]">
                        <div className='w-full h-full bg-black flex-col justify-center space-y-5 p-10'>
                            <div className='text-white text-3xl w-full flex justify-center font-sans'>Men/Sports</div>
                            <div className='font-bold text-white text-5xl flex justify-center font-serif items-center'>Running Sneaker Shoes</div>
                            <div className='font-semibold text-red-600 text-4xl flex justify-center pt-5 '>$190.85</div>
                        </div>
                    </div>
                    </div>
                    <div className="bg-white w-full h-full">
                        <div className="bg-gray-200 w-full h-[600px] p-20">
                            <img src={shoe3} alt="shoe image" className='w-full rotate-[20deg] p-14 hover:p-4 duration-300 hover:duration-300' />
                        </div>
                        <div className="w-full h-[150px] md:h-[300px]">
                        <div className='w-full h-full bg-black flex-col justify-center space-y-5 p-10'>
                            <div className='text-white text-3xl w-full flex justify-center font-sans'>Men/Sports</div>
                            <div className='font-bold text-white text-5xl flex justify-center font-serif'>Running Sneaker Shoes</div>
                            <div className='font-semibold text-red-600 text-4xl flex justify-center pt-5 '>$190.85</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Special_collection;