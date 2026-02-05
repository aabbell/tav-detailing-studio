import Image from "next/image"
export default function Services(){
    return(
    <section className="py-16 px-4 max-w-7x1 mx-auto lg:px-60">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore Our Services</h2>
            <p className="text-gray-600 max-w-2x1 mx-auto">
            From quick exterior washes to comprehensive detailing, we have the
            perfect service for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <Image
                src="/card1.jpg"
                alt="01 Image"
                width={600}
                height={400}
                className="object-cover w-full h-60 group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-xl">Basic Wash</h3>
                    <p className="text-sm text-gray-200 max-w-xs">
                        A quick and efficient wash that leaves your car looking fresh.
                    </p>
                </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <Image
                src="/card2.jpg"
                alt="02 Image"
                width={600}
                height={400}
                className="object-cover w-full h-60 group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-xl">Premium Wash</h3>
                    <p className="text-sm text-gray-200 max-w-xs">
                        High quality wash from a expert guarantees a clean and neat loo
                    </p>
                </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <Image
                src="/card3.jpg"
                alt="03 Image"
                width={600}
                height={400}
                className="object-cover w-full h-60 group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-xl">Deluxe Wash</h3>
                    <p className="text-sm text-gray-200 max-w-xs">
                        A thorough exterior wash plus tire and wheel cleaning.
                    </p>
                </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <Image
                src="/card4.jpg"
                alt="04 Image"
                width={600}
                height={400}
                className="object-cover w-full h-60 group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-xl">QuickShine</h3>
                    <p className="text-sm text-gray-200 max-w-xs">
                        Leave your car for 30 minutes and let our team do their magic.
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}