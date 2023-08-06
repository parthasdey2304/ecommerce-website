import shoes from '../static/img/banner-shoes.png'

function Banner() {
    return (
        <div className="w-full h-[900px] bg-gradient-to-r from-red-600 to-white md:flex space-x-0 space-y-4 md:space-y-0 md:space-x-10 p-8">
            <div className="w-full h-1/2 md:h-full">
                <div className='w-full h-full md:p-28'>
                    <div className='w-full h-full md:p-16 flex-col space-y-5'>
                        <div className='text-4xl md:text-7xl font-serif text-white'>New Winter</div>
                        <div className='text-6xl md:text-9xl font-bold font-serif text-white'><span className=''>Shoe</span> Collection</div>
                        <div className='text-xl md:text-3xl font-serif text-white '>Step into Winter's Wonderland: Warmth, Style, and Adventure Awaits!</div>
                        <div className='pt-4 md:pt-10 '>
                            <button className='px-8 md:px-10 py-4 md:py-6 border-2 text-3xl md:text-5xl rounded-2xl bg-white text-red-600 font-serif font-semibold'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-1/2 md:h-full flex justify-center">
                <img src={shoes} alt="Banner Shoes" className='m-2 my-16 -rotate-45 -ml-10 z-40' />
                <div className='bg-red-600 w-72 h-72 md:w-[800px] md:h-[800px] rounded-full -z-1 absolute shadow-2xl shadow-red-500 mt-16 md:mt-0 -skew-y-[20deg] p-2 md:p-6'>
                    <div className='bg-white w-full h-full rounded-full'></div>
                </div>
            </div>
        </div>
    );
}

export default Banner;