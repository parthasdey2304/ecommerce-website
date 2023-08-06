function Collections_carousel() {
    return (
        <div className="w-full h-[400px] md:h-[800px] p-16">
            <div className="bg-white w-full h-full overflow-x-scroll flex space-x-10 p-10">
                <div className="h-full w-[400px] md:w-1/3 bg-blue-600"></div>
                <div className="h-full w-[400px] md:w-1/3 bg-pink-300"></div>
                <div className="h-full w-[400px] md:w-1/3 bg-red-600"></div>
            </div>
        </div>
    );
}

export default Collections_carousel;