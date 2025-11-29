import Image from "next/image"
export default function Header(){
    return( 
    <section className="px-6 md:px-12 lg:px-50 py-15 max-w-7x1 mx-auto">
    <div className="py-35 px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="">
        <h1 className="text-5xl font-bold leading-tight mb-6">
            Your Car <br /> Deserves <br /><span className="text-blue-600">The Best Shine</span>
        </h1>
        <p className="text-lg text-gray-800 mb-8">
            Professional car wash services that come to you. Boo in minutes get your car sparing clean without leaving your home or office
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Book Now →
        </button>
        </div>
        <div className="relative">
        <Image
        src="/headercar.jpg"
        alt = "header"
        width={600}
        height={600}
        className="rounded-2xl object-cover w-full h-[420px]:"
        />
        </div>
    </div>
    </section>
    )
} 