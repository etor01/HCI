

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} EcoCycle. All rights reserved.
                </p>
            </div>
        </footer>
    );
}