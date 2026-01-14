
export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="shrink-0">
                        <span className="text-2xl font-bold text-green-700">EcoCycle</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-8">
                        <a
                            href="#recycle-guide"
                            className="text-gray-700 hover:text-green-700 transition font-medium"
                        >
                            Recycle Guide
                        </a>
                        <a
                            href="#recycle-centers"
                            className="text-gray-700 hover:text-green-700 transition font-medium"
                        >
                            Recycle Centers
                        </a>
                        <a
                            href="#quiz"
                            className="text-gray-700 hover:text-green-700 transition font-medium"
                        >
                            Quiz
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="p-2 rounded-md text-gray-700 hover:text-green-700">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}