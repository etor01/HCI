

export default function Accordian() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg shrink-0" />
                    <h1 className="text-3xl font-bold text-gray-800">Type of materials & How to recycle them</h1>
                </div>
                <p className="text-gray-600">Click on each section to view recycling guidelines</p>
            </div>

            {/* Horizontal Accordion */}
            <div className="flex gap-4 overflow-x-auto pb-4">
                {[
                    { name: 'Organic Waste', icon: '🌱' },
                    { name: 'Paper', icon: '📄' },
                    { name: 'Glass', icon: '🔷' },
                    { name: 'Metal', icon: '⚙️' },
                    { name: 'Plastic', icon: '♻️' },
                    { name: 'Biohazard/Chemical', icon: '☠️' }
                ].map((material) => (
                    <details key={material.name} className="shrink-0 w-80 bg-white border border-gray-300 rounded-lg hover:shadow-lg transition-shadow">
                        <summary className="p-4 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 flex items-center gap-3">
                            <span className="text-2xl">{material.icon}</span>
                            {material.name}
                        </summary>
                        <div className="px-4 pb-4 pt-2 border-t border-gray-200 text-gray-700 text-sm">
                            Add recycling guidelines for {material.name} here.
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
}