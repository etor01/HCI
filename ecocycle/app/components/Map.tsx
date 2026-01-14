"use client";

export default function Map() {
    return (
        <>
            <section className="min-h-screen bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
                <div className="text-center max-w-md">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Find Centers Near You
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Discover eco-friendly recycling centers in your area
                    </p>
                    <button
                        onClick={() => document.getElementById('mapModal')?.showModal()}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:scale-105 text-lg"
                    >
                        View Centers Around Me
                    </button>
                </div>
            </section>

            <dialog
                id="mapModal"
                className="rounded-xl shadow-2xl max-w-2xl w-full"
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Nearby Recycling Centers
                        </h2>
                        <button
                            onClick={() => document.getElementById('mapModal')?.close()}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="bg-gray-200 rounded-lg h-96 flex flex-col items-center justify-center mb-4">
                        <div className="text-center">
                            <div className="text-gray-400 text-5xl mb-2">📍</div>
                            <p className="text-gray-600">Google Maps will load here</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-semibold text-gray-900">Center Name</h3>
                            <p className="text-sm text-gray-600">Distance & Address</p>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
}