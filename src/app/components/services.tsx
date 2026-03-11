import Image from "next/image";
import Link from "next/link";
export default function Services() {
  return (
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
          <div
            className="absolute inset-0 flex  justify-center items-center text-white 
                                opacity-0 group-hover:opacity-100 transition duration-300 bg-black/70 p-6">
            <div>
                <h3 className="font-bold text-xl mb-3">Basic Wash Includes:</h3>

            <ul className="text-sm space-y-1 mb-4 list-disc pl-5">
              <li>Exterior Wash & Dry</li>
              <li>Windows(Inside & Out)</li>
              <li>Interior Vacuum</li>
            </ul>
            </div>
            <Link href="#Contact"   className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Book Now →
          </Link>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src="/card2.jpg"
            alt="02 Image"
            width={600}
            height={400}
            className="object-cover w-full h-60 group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold text-xl">Premium Wash</h3>
            <p className="text-sm text-gray-200 max-w-xs">
              High quality wash from a expert guarantees a clean and neat look
            </p>
          </div>
          <div
            className="absolute inset-0 flex  justify-center items-center text-white 
                                opacity-0 group-hover:opacity-100 transition duration-300 bg-black/70 p-6">
            <div>
                <h3 className="font-bold text-xl mb-3">Premium Wash Includes:</h3>

            <ul className="text-sm space-y-1 mb-4 list-disc pl-5">
              <li>Clay Bar Treatment</li>
              <li>Wax & Polish Protection</li>
              <li>Leather Clean & Condition</li>
              <li>Engine Bay Cleaning</li>
              <li>Headlight Restoration</li>
              <li>Odor Removal</li>
            </ul>
            </div>
            <Link href="#Contact"   className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Book Now →
          </Link>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src="/card4.jpg"
            alt="03 Image"
            width={600}
            height={400}
            className="object-cover w-full h-60 group-hover:scale-105 transition"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold text-xl">Standard Detail</h3>
            <p className="text-sm text-gray-200 max-w-xs">
              A thorough exterior wash plus tire and wheel cleaning.
            </p>
          </div>
          <div
            className="absolute inset-0 flex  justify-center items-center text-white 
                                opacity-0 group-hover:opacity-100 transition duration-300 bg-black/70 p-6">
            <div>
                <h3 className="font-bold text-xl mb-3">Standard Detail Includes:</h3>

            <ul className="text-sm space-y-1 mb-4 list-disc pl-5">
              <li>Full Interior Cleaning</li>
              <li>Dashboard & Console Wipe</li>
              <li>Door Panel Cleaning</li>
              <li>Carpet & Seat Cleaning</li>
            </ul>
            </div>
            <Link href="#Contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Book Now →
          </Link>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src="/card3.jpg"
            alt="04 Image"
            width={600}
            height={400}
            className="object-cover w-full h-60 group-hover:scale-105 transition"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold text-xl">Interior Wash</h3>
            <p className="text-sm text-gray-200 max-w-xs">
              A quick and efficient interior cleaning service.
            </p>
          </div>
          <div
            className="absolute inset-0 flex  justify-center items-center text-white 
                                opacity-0 group-hover:opacity-100 transition duration-300 bg-black/70 p-6">
            <div>
                <h3 className="font-bold text-xl mb-3">Interior Wash Includes:</h3>

            <ul className="text-sm space-y-1 mb-4 list-disc pl-5">
              <li>Full Interior Cleaning</li>
              <li>Leather Conditioning</li>
              <li>Dust Coating</li>
            </ul>
            </div>
            <Link href="#Contact"   className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Book Now →
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
