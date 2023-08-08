function Footer() {
    return (
        <div className="w-full h-[400px] md:h-[1500px] flex-col">
            <div className="flex justify-between w-full h-[300px]">
                <div className="p-24"><span className="self-center text-4xl md:text-7xl font-semibold whitespace-nowrap text-gray-800 font-serif"><span className="text-red-600">Snea</span>karz</span></div>

                <div className="flex justify-between space-x-5 p-20">
                    <button className="w-28 h-28 bg-gray-500"></button>
                    <button className="w-28 h-28 bg-gray-500"></button>
                    <button className="w-28 h-28 bg-gray-500"></button>
                    <button className="w-28 h-28 bg-gray-500"></button>
                </div>
            </div>

            <div className="border-2 border-gray-300 bg-gray-300 mx-32"></div>

            <div className="mt-40 p-24 flex space-x-5">
                <div className="border-2 w-1/4 h-[700px] flex-col p-10">
                    <div className="text-6xl font-serif font-semibold">Contact Us</div>
                    <div className="bg-red-600 w-1/3 h-1.5 mt-5"></div>
                    <div></div>
                </div>
                <div className="border-2 w-1/4 h-[700px] flex-col p-10">
                    <div className="text-6xl font-serif font-semibold">My Account</div>
                    <div className="bg-red-600 w-1/3 h-1.5 mt-5"></div>
                </div>
                <div className="border-2 w-1/4 h-[700px] flex-col p-10">
                    <div className="text-6xl font-serif font-semibold">Opening Time</div>
                    <div className="bg-red-600 w-1/3 h-1.5 mt-5"></div>
                </div>
                <div className="border-2 w-1/4 h-[700px] flex-col p-10">
                    <div className="text-6xl font-serif font-semibold">Newsletter</div>
                    <div className="bg-red-600 w-1/3 h-1.5 mt-5"></div>
                </div>
            </div>

            <div className="text-4xl text-white font-medium flex justify-center bg-black h-32 pt-12">&copy; 2023 <span className="mx-4 text-red-600">Sneakarz</span>. All Rights Reserved</div>
        </div>
    );
}

export default Footer;