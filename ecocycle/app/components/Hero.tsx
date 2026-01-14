

export default function Hero() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
                    {/* Left Column */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                                Ecocycle
                            </h1>
                            <p className="text-xl md:text-2xl font-semibold text-green-600">
                                recycle right, every time!
                            </p>
                        </div>
                        
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Make a positive impact on our planet today with our easy to use recycling guide. Learn what you can recycle, how to prepare it and where to take it. Get started today and join the EcoCycle movement towards a more sustainable future.
                        </p>
                        
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 w-fit">
                            Show me how
                        </button>
                    </div>

                    {/* Right Column - Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src="https://picsum.photos/500/500?random=1"
                            alt="Recycling"
                            className="w-full max-w-md h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}