function Header() {
    return (
        <div className="Header w-full">
            <nav className="bg-white border-gray-200 w-full md:p-6">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
                    <span className="self-center text-4xl md:text-7xl font-semibold whitespace-nowrap text-gray-800 font-serif"><span className="text-red-600">Snea</span>karz</span>
                </a>
                <div className="flex items-center md:order-2">
                    <button type="button" className="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    <div className="w-8 md:w-16 h-8 md:h-16 rounded-full bg-white border-2 md:border-[4px] border-black"></div>
                    </button>
                    {/* <!-- Dropdown menu -->  */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow border" id="user-dropdown">
                    <div className="px-4 py-3">
                        <span className="block md:text-2xl text-gray-900  font-serif">Partha Sarathi Dey</span>
                        <span className="block md:text-2xl  text-gray-500 truncate dark:text-gray-400 font-serif">support@parthasarathidey.tech</span>
                    </div>
                    <ul className="py-2 pr-10" aria-labelledby="user-menu-button">
                        <li>
                        <a href="#" className="block px-4 py-2 md:text-2xl text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 font-serif">Dashboard</a>
                        </li>
                        <li>
                        <a href="#" className="block px-4 py-2 md:text-2xl text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 font-serif">Settings</a>
                        </li>
                        <li>
                        <a href="#" className="block px-4 py-2 md:text-2xl text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 font-serif">Earnings</a>
                        </li>
                        <li>
                        <a href="#" className="block px-4 py-2 md:text-2xl text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 font-serif">Sign out</a>
                        </li>
                    </ul>
                    </div>
                    <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:mt-6" id="navbar-user">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-500 rounded-lg bg-gray-50 md:flex-row md:space-x-20 md:mt-0 md:border-0 md:bg-white">
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-red-600 md:p-0 md:text-3xl font-serif font-semibold" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0 md:text-3xl font-semibold font-serif">About</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0 md:text-3xl font-semibold font-serif">Products</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0 md:text-3xl font-semibold font-serif">Shop</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0 md:text-3xl font-semibold font-serif">Blog</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0 md:text-3xl font-semibold font-serif">Contact</a>
                    </li>
                </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;