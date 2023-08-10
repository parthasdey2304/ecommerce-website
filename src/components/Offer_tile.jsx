import shoes1 from '../static/offer_tile/shoes_1.jpg'
import shoes2 from '../static/offer_tile/shoes_2.jpg'

function Offer_tile() {
    return (
        <div className="w-full h-[500px] md:h-[700px] md:flex space-y-0 md:space-x-10 md:p-20 px-4 py-20">
            <div className="w-full md:w-1/2 h-[250px] md:h-full bg-white">
                <img src={shoes1} alt="" className='w-full md:h-[540px] opacity-75 -z-50' />
            </div>
            <div className="w-full md:w-1/2 h-[250px] md:h-full bg-white">
                <img src={shoes2} alt="" className='w-full md:h-[540px] opacity-75 -z-50' />
            </div>
        </div>
    );
}

export default Offer_tile;