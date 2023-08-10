// importing all the images of the shoes over here
import shoe1 from '../static/best_sellers/best_seller_1.png'
import shoe2 from '../static/best_sellers/best_seller_2.png'
import shoe3 from '../static/best_sellers/best_seller_3.png'
import shoe4 from '../static/best_sellers/best_seller_4.png'
import shoe5 from '../static/best_sellers/best_seller_5.png'
import shoe6 from '../static/best_sellers/best_seller_6.png'
import shoe7 from '../static/best_sellers/best_seller_7.png'
import shoe8 from '../static/best_sellers/best_seller_8.png'

function Bestseller() {
    return (
        <div className="flex-col space-y-10 p-10">
            <div className="text-3xl md:text-7xl flex items-center justify-center font-semibold font-serif my-10">Bestseller Products</div>
            <div className="flex justify-center space-x-5">
                <button className="border-2 border-red-500 bg-red-600 text-white text-sm md:text-4xl px-2 py-1 md:px-8 md:py-4 font-serif font-semibold rounded-full">All</button>
                <button className="border-2 border-red-500 text-sm md:text-4xl px-2 py-1 md:px-8 md:py-4 font-serif font-semibold rounded-full">Nike</button>
                <button className="border-2 border-red-500 text-sm md:text-4xl px-2 py-1 md:px-8 md:py-4 font-serif font-semibold rounded-full">Puma</button>
                <button className="border-2 border-red-500 text-sm md:text-4xl px-2 py-1 md:px-8 md:py-4 font-serif font-semibold rounded-full">Addidas</button>
                <button className="border-2 border-red-500 text-sm md:text-4xl px-2 py-1 md:px-8 md:py-4 font-serif font-semibold rounded-full">Apex</button>
            </div>

            <div className="grid md:grid-cols-4 gap-5 md:gap-10  md:gap-y-24 md:pt-10">
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-gray-300 h-[250px] md:h-[700px] p-8">
                        <div className='w-full h-[630px] p-14 hover:p-4 duration-300 hover:duration-300 pt-32'>
                            <img src={shoe1} alt="" className="w-[600px] -rotate-[30deg]" />
                        </div>
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]">
                        <div className='w-full h-full bg-black flex-col justify-center md:space-y-5 p-2 md:p-10'>
                            <div className='text-white text-xl md:text-3xl w-full flex justify-center font-sans'>Men/Sports</div>
                            <div className='font-bold text-white text-2xl md:text-5xl flex justify-center font-serif py-4 md:py-0'>Running Sneaker Shoes</div>
                            <div className='font-semibold text-red-600 text-xl md:text-4xl flex justify-center pt-2 md:pt-5 '>$190.85</div>
                        </div>
                    </div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-gray-300 h-[250px] md:h-[700px] p-8">
                        <div className='w-full h-[630px]  p-14 hover:p-4 duration-300 hover:duration-300 pt-44 pl-20'>
                            <img src={shoe2} alt="" className="w-[390px] h-[200px] -rotate-[30deg]" />
                        </div>
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]">
                        <div className='w-full h-full bg-black flex-col justify-center md:space-y-5 p-2 md:p-10'>
                            <div className='text-white text-xl md:text-3xl w-full flex justify-center font-sans'>Men/Sports</div>
                            <div className='font-bold text-white text-2xl md:text-5xl flex justify-center font-serif py-4 md:py-0'>Running Sneaker Shoes</div>
                            <div className='font-semibold text-red-600 text-xl md:text-4xl flex justify-center pt-2 md:pt-5 '>$190.85</div>
                        </div>
                    </div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-gray-300 h-[250px] md:h-[700px] p-8">
                        <div className='w-full h-[630px] p-10'>
                            <img src={shoe3} alt="" className="w-full  p-14 hover:p-4 duration-300 hover:duration-300" />
                        </div>
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]">
                        <div className='w-full h-full bg-black flex-col justify-center md:space-y-5 p-2 md:p-10'>
                            <div className='text-white text-xl md:text-3xl w-full flex justify-center font-sans'>Men/Sports</div>
                            <div className='font-bold text-white text-2xl md:text-5xl flex justify-center font-serif py-4 md:py-0'>Running Sneaker Shoes</div>
                            <div className='font-semibold text-red-600 text-xl md:text-4xl flex justify-center pt-2 md:pt-5 '>$190.85</div>
                        </div>
                    </div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-gray-300 h-[250px] md:h-[700px] p-8">
                        <div className='w-full h-[630px] p-10'>
                            <img src={shoe4} alt="" className="w-full  p-14 hover:p-4 duration-300 hover:duration-300" />
                        </div>
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]">
                        <div className='w-full h-full bg-black flex-col justify-center md:space-y-5 p-2 md:p-10'>
                            <div className='text-white text-xl md:text-3xl w-full flex justify-center font-sans'>Men/Sports</div>
                            <div className='font-bold text-white text-2xl md:text-5xl flex justify-center font-serif py-4 md:py-0'>Running Sneaker Shoes</div>
                            <div className='font-semibold text-red-600 text-xl md:text-4xl flex justify-center pt-2 md:pt-5 '>$190.85</div>
                        </div>
                    </div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-gray-300 h-[250px] md:h-[700px] p-8">
                        <div className='w-full h-[630px] p-10'>
                            <img src={shoe5} alt="" className="w-full  p-14 hover:p-4 duration-300 hover:duration-300" />
                        </div>
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]">
                        <div className='w-full h-full bg-black flex-col justify-center md:space-y-5 p-2 md:p-10'>
                            <div className='text-white text-xl md:text-3xl w-full flex justify-center font-sans'>Men/Sports</div>
                            <div className='font-bold text-white text-2xl md:text-5xl flex justify-center font-serif py-4 md:py-0'>Running Sneaker Shoes</div>
                            <div className='font-semibold text-red-600 text-xl md:text-4xl flex justify-center pt-2 md:pt-5 '>$190.85</div>
                        </div>
                    </div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-gray-300 h-[250px] md:h-[700px] p-8">
                        <div className='w-full h-[630px] p-10'>
                            <img src={shoe6} alt="" className="w-full  p-14 hover:p-4 duration-300 hover:duration-300" />
                        </div>
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]">
                        <div className='w-full h-full bg-black flex-col justify-center md:space-y-5 p-2 md:p-10'>
                            <div className='text-white text-xl md:text-3xl w-full flex justify-center font-sans'>Men/Sports</div>
                            <div className='font-bold text-white text-2xl md:text-5xl flex justify-center font-serif py-4 md:py-0'>Running Sneaker Shoes</div>
                            <div className='font-semibold text-red-600 text-xl md:text-4xl flex justify-center pt-2 md:pt-5 '>$190.85</div>
                        </div>
                    </div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-gray-300 h-[250px] md:h-[700px] p-8">
                        <div className='w-full h-[630px] p-10'>
                            <img src={shoe7} alt="" className="w-full  p-14 hover:p-4 duration-300 hover:duration-300" />
                        </div>
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]">
                        <div className='w-full h-full bg-black flex-col justify-center md:space-y-5 p-2 md:p-10'>
                            <div className='text-white text-xl md:text-3xl w-full flex justify-center font-sans'>Men/Sports</div>
                            <div className='font-bold text-white text-2xl md:text-5xl flex justify-center font-serif py-4 md:py-0'>Running Sneaker Shoes</div>
                            <div className='font-semibold text-red-600 text-xl md:text-4xl flex justify-center pt-2 md:pt-5 '>$190.85</div>
                        </div>
                    </div>
                </div>
                <div className="bg-black w-full h-[400px] md:h-[1000px] flex-col ">
                    <div className="w-full bg-gray-300 h-[250px] md:h-[700px] p-8">
                        <div className='w-full h-[630px] p-10'>
                            <img src={shoe8} alt="" className="w-full  p-14 hover:p-4 duration-300 hover:duration-300" />
                        </div>
                    </div>
                    <div className="w-full bg-red-600 h-[150px] md:h-[300px]">
                        <div className='w-full h-full bg-black flex-col justify-center md:space-y-5 p-2 md:p-10'>
                            <div className='text-white text-xl md:text-3xl w-full flex justify-center font-sans'>Men/Sports</div>
                            <div className='font-bold text-white text-2xl md:text-5xl flex justify-center font-serif py-4 md:py-0'>Running Sneaker Shoes</div>
                            <div className='font-semibold text-red-600 text-xl md:text-4xl flex justify-center pt-2 md:pt-5 '>$190.85</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bestseller;