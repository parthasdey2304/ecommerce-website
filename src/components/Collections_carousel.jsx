import men from '../static/img/men-shoes.png'
import women from '../static/img/female-shoes.png'
import sports from '../static/img/sports-shoes.png'

function Collections_carousel() {
    return (
        <div className="w-full h-[400px] md:h-[1000px] p-10">
            <div className="bg-white w-full h-full overflow-x-scroll md:overflow-hidden flex space-x-10 p-10">
                <div className="h-full w-[400px] md:w-1/3 bg-blue-300 p-10">
                    <div className="text-5xl items-center flex justify-center font-bold font-serif py-20 text-white">MENS COLLECTION</div>
                    <div className="w-full h-[400px] pl-20">
                        <img src={men} alt="Mens shoes" className='' />
                    </div>
                    <div className="flex justify-center p-10">
                        <button className="border bg-white text-blue-600 font-semibold font-serif text-4xl py-6 px-10">Explore All</button>
                    </div>
                </div>
                <div className="h-full w-[400px] md:w-1/3 bg-pink-300 p-10">
                    <div className="text-5xl items-center flex justify-center font-bold font-serif py-20 text-black">WOMENS COLLECTION</div>
                    <div className="w-full h-[400px] pl-32">
                        <img src={women} alt="Womens shoes" className='z-50 -pt-20' />
                    </div>
                    <div className="flex justify-center p-10">
                        <button className="border bg-white text-pink-400 font-semibold font-serif text-4xl py-6 px-10">Explore All</button>
                    </div>
                </div>
                <div className="h-full w-[400px] md:w-1/3 bg-red-400 p-10">
                    <div className="text-5xl items-center flex justify-center font-bold font-serif py-20 text-white">SPORTS COLLECTION</div>
                    <div className="w-full h-[400px] pl-24">
                        <img src={sports} alt="Sports shoes" className='' />
                    </div>
                    <div className="flex justify-center p-10">
                        <button className="border bg-white text-red-600 font-semibold font-serif text-4xl py-6 px-10">Explore All</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collections_carousel;