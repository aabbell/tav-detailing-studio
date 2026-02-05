"use client"
import { useState } from "react"

export default function Prices(){
    type CarType = "Hatchbac" | "Coupe" | "Sedan" | "SUV" | "Van"
    const [selected, setSelected] = useState<CarType>("Sedan")
    type Service = {
        name : string;
        prices: Record<CarType, string>;
        times: Record<CarType, string>;
        features: string[];    
    }
    const services: Service[] = [
        {
            name: "Basic Wash",
            prices: {
                Hatchbac: "150br",
                Coupe: "170br",
                Sedan: "160br",
                SUV: "200br",
                Van: "220br"
            },
            times: {
                Hatchbac: "30min",
                Coupe: "35min",
                Sedan: "40min",
                SUV: "45min",
                Van: "50min"
            },
            features: ["Exterior Wash & Dry", "Windows (Inside & Out)", "Interior Vacuum"]
        },
        {
            name: "Premium Wash",
            prices:{
                Hatchbac: "200br",
                Coupe: "220br",
                Sedan: "210br",
                SUV: "250br",
                Van: "270br"
            },
            times:{
                Hatchbac: "45min",
                Coupe: "50min",
                Sedan: "50min",
                SUV: "60min",
                Van: "65min"
            },
            features: ["Clay Bar Treatment", "Wax & Polish Protection", "Leather Clean & Condition", "Engine Bay Cleaning","Headlight Restoration","Odor Removal"]
        },
        {
            name:"STANDARD DETAIL",
            prices:{
                Hatchbac: "250br",
                Coupe: "270br",
                Sedan: "260br",
                SUV: "300br",
                Van: "320br"
            },
            times:{
                Hatchbac: "60min",
                Coupe: "65min",
                Sedan: "75min",
                SUV: "80min",
                Van: "85min"
            },
            features: ["Full Interior Cleaning", 
                "Dashboard & Console Wipe", 
                "Door Panels & Cup Holders", 
                "Carpet & Seat Shampoo"]
        },
        {
            name: "Interior Wash",
            prices: {
                Hatchbac: "180br",
                Coupe: "190br",
                Sedan: "185br",
                SUV: "210br",
                Van: "230br"
            },
            times: {
                Hatchbac: "40min",
                Coupe: "45min",
                Sedan: "45min",
                SUV: "50min",
                Van: "55min"
            },
            features: ["Complete interior detail",
                 "Leather conditioning", 
                 "Dust coating"]
        }
    ]
    
    return(
        <section className="py-16 px-4 lg:px-60 bg-gray-50">
            <div className="mb-10 text-center">
                <h2 className="text-4xl font-bold mb-5">Choose Your Service</h2>
                <p className="text-gray-600">Exterior to interior and waxing to washing choose your preferred service and let your car give a fresh loo</p>
            </div>
            <div className="">
                <div className="flex justify-center bg-white mx-66 lg:mx-[520px] py-1 rounded-md shadow-sm">
                    <div onClick={() => setSelected("Hatchbac")} className={`${selected === "Hatchbac" ? "bg-blue-600 text-white" : "text-gray-500"} rounded-lg px-4 py-2 cursor-pointer`}>Hatchbac</div>
                    <div onClick={() => setSelected("Coupe")} className={`${selected === "Coupe" ? "bg-blue-600 text-white" : "text-gray-500"} rounded-lg px-4 py-2 cursor-pointer`}>Coupe</div>
                    <div onClick={() => setSelected("Sedan")} className={`${selected === "Sedan" ? "bg-blue-600 text-white" : "text-gray-500"} rounded-lg px-4 py-2 cursor-pointer`}>Sedan</div>
                    <div onClick={() => setSelected("SUV")} className={`${selected === "SUV" ? "bg-blue-600 text-white" : "text-gray-500"} rounded-lg px-4 py-2 cursor-pointer`}>SUV</div>
                    <div onClick={() => setSelected("Van")} className={`${selected === "Van" ? "bg-blue-600 text-white" : "text-gray-500"} rounded-lg px-4 py-2 cursor-pointer`}>Van</div>
                </div>
                    
                <div className="flex gap-5 mt-5 flex-wrap justify-center">
                    {services.map((service) => (
                        <div key={service.name} className="bg-white px-10 py-10 shadow-md rounded w-80 h-90 md:h110">
                            <h2 className="font-bold text-2xl mb-5 text-center">{service.name}</h2>
                            <p className="text-center text-blue-600 font-bold text-2xl">{service.prices[selected]}</p>
                            <p className="text-gray-600 text-center mb-5">{service.times[selected]}</p>
                            <ul className="text-gray-600 list-disc">
                                {service.features.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                  
                    
                </div>
                
                  

                             
                </div>

        </section>
    )
}