function Footer() {
    return (
        <div className="bg-gray-100 h-[1000px] md:h-[600px] flex-col p-4 md:p-0">
            <div className="md:flex justify-between w-full h-[300px]">
                <a href="" className="md:p-24"><span className="self-center text-6xl md:text-7xl font-semibold whitespace-nowrap text-gray-800 font-serif"><span className="text-red-600">Snea</span>karz</span></a>

                <div className="flex justify-between space-x-5 p-20">
                    <button className="w-24 h-24 bg-gray-300 hover:bg-red-400 hover:text-white duration-200 hover:duration-150 pl-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                    </button>
                    <button className="w-24 h-24 bg-gray-300 hover:bg-red-400 hover:text-white duration-200 hover:duration-150 pl-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                    </button>
                    <button className="w-24 h-24 bg-gray-300 hover:bg-red-400 hover:text-white duration-200 hover:duration-150 pl-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </button>
                    <button className="w-24 h-24 bg-gray-300 hover:bg-red-400 hover:text-white duration-200 hover:duration-150 pl-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* this is the grey color bar */}
            <div className="border-2 border-gray-300 bg-gray-300 md:mx-32"></div>

            <div className="mt-10 p-28 md:flex space-x-5 bg-gray-100">
                <div className="w-1/4 h-[700px] flex-col p-10">
                    <div className="text-6xl font-serif font-semibold">Contact Us</div>
                    <div className="bg-red-600 w-1/3 h-1.5 mt-5"></div>
                    <div className="w-full h-[500px] mt-5 flex-col space-y-10 pt-20">
                        <div className="text-5xl">&#x1F4CD; <span className="px-4 text-3xl text-black font-serif font-medium">Chowhati, A-Block, Pin : 700149</span></div>
                        <div className="text-5xl">&#x260E; <span className="px-4 text-3xl text-black font-serif">+91 62896 52321</span></div>
                        <div className="text-5xl">&#x2709; <span className="px-4 text-3xl text-black font-serif">parthasdeyofficial@gmail.com</span></div>
                    </div>
                </div>
                <div className="w-1/4 h-[700px] flex-col p-10">
                    <div className="text-6xl font-serif font-semibold">My Account</div>
                    <div className="bg-red-600 w-1/3 h-1.5 mt-5"></div>
                    <div className="w-full h-[500px] mt-5 flex-col space-y-5 pt-20">
                        <div className="text-black text-4xl hover:text-red-400 font-serif">&gt; <a href="#"> My Account</a></div>
                        <div className="text-black text-4xl hover:text-red-400 font-serif">&gt; <a href="#"> View Cart</a></div>
                        <div className="text-black text-4xl hover:text-red-400 font-serif">&gt; <a href="#"> Wishlist</a></div>
                        <div className="text-black text-4xl hover:text-red-400 font-serif">&gt; <a href="#"> Compare</a></div>
                        <div className="text-black text-4xl hover:text-red-400 font-serif">&gt; <a href="#"> New Products</a></div>
                    </div>
                </div>
                <div className="w-1/4 h-[700px] flex-col p-10">
                    <div className="text-6xl font-serif font-semibold">Opening Time</div>
                    <div className="bg-red-600 w-1/3 h-1.5 mt-5"></div>
                    <div className="w-full h-[500px] mt-5 flex space-x-5">
                        <div className="w-[300px] flex-col space-y-8 py-20">
                            <div className="text-black font-semibold font-serif text-3xl">Mon :</div>
                            <div className="text-black font-semibold font-serif text-3xl">Tue :</div>
                            <div className="text-black font-semibold font-serif text-3xl">Wed :</div>
                            <div className="text-black font-semibold font-serif text-3xl">Thu :</div>
                            <div className="text-black font-semibold font-serif text-3xl">Fri :</div>
                        </div>
                        <div className="w-[300px] flex-col space-y-8 py-20">
                            <div className="text-black font-meduim font-serif text-3xl">9AM - 10pm</div>
                            <div className="text-black font-meduim font-serif text-3xl">9AM - 10pm</div>
                            <div className="text-black font-meduim font-serif text-3xl">9AM - 10pm</div>
                            <div className="text-black font-meduim font-serif text-3xl">9AM - 10pm</div>
                            <div className="text-black font-meduim font-serif text-3xl">9AM - 10pm</div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 h-[700px] flex-col p-10">
                    <div className="text-6xl font-serif font-semibold">Newsletter</div>
                    <div className="bg-red-600 w-1/3 h-1.5 mt-5"></div>
                    <div className="w-full h-[500px] mt-24 flex-col">
                        <div className="text-black text-3xl font-serif leading-relaxed">Authoritatively morph 24/7 potentialities with error-free partnerships.</div>
                        <div className="w-full flex justify-between pt-10">
                            <input type="text" name="" id="newsletter" placeholder="Email Address" className="w-[70%] p-8 text-4xl border-none" />
                            <button className="bg-red-500 text-4xl font-serif text-white px-6">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-4xl text-white font-medium flex justify-center bg-black h-32 pt-8">&copy; 2023 <span className="mx-4 text-red-600">Sneakarz</span>. All Rights Reserved</div>
        </div>
    );
}

export default Footer;