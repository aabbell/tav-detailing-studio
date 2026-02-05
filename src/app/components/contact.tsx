"use client"
import { useState } from "react"
import { supabase } from "../lib/supabase"


export default function Contact(){
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        car:"",
        services:"",
        time:"",
        date:"",
    })
    const [errors, setErrors] = useState<{
        name?:string;
        phone?: string;
        car?: string;
        services?: string;
        time?:string;
        date?:string;
        general?:string
    }>({})
    const [show, setShow] = useState(false)
    const [appointment, setAppointment] = useState<any[]>([])


    async function fetchAppointment(name: string, phone: string) {
    const { data, error } = await supabase
        .from("customer")
        .select("name, phone, car, services, date, time")
        .eq("name", name)
        .eq("phone", phone)

    if (error) {
        console.error(error)
    } else {
        setAppointment(data || [])
    }
}


    function handleCheckAppointment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!formData.name || !formData.phone) {
        alert("Please enter name and phone")
        return
    }

    fetchAppointment(formData.name, formData.phone)
}



    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ){
        const { name, value } = e.target
        setFormData((prev)=> ({
            ...prev,
            [name]: value
        })) 
    }


    async function handleSubmit(
         e: React.FormEvent<HTMLFormElement>
    ){
        e.preventDefault()

        const newErrors: typeof errors = {};

        if (!formData.name.trim()){
            newErrors.name = "Full name is required"
        }

        if (!formData.phone.trim()){
            newErrors.phone = "Phone number is required"
        }

        if(!formData.car.trim()){
            newErrors.car = "Car type is required"
        }

        if(!formData.services.trim()){
            newErrors.services = "Services is required"
        }


        if(!formData.date || !formData.time){
            newErrors.general = "Please select date and time"
        }else{
            const selectedDateTime = new Date(`${formData.date}T${formData.time}`)
        const now = new Date()


        if (selectedDateTime < now){
            newErrors.date = "Date can't be in the past"
        }

        const hour = selectedDateTime.getHours()

        if(hour < 9 || hour >= 18){
            newErrors.time = "Time must be between 9AM and 6PM"                    
        }
        }
        if (Object.keys(newErrors).length > 0){
            setErrors(newErrors)
            return
        }

        setErrors({})
        

        const {error} = await supabase.from("customer").insert([formData])

        if(error){
            console.error(error)
        }
        else{
            setFormData({name:"", phone:"", car:"", services:"", time:"",date:""})
        }
        
    }
  

    return(
        <section className="py-20 px-6 md:px-12 lg:px-60">
            <div className="max-w-6x1 mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3x1 font-semibold mb-4">Let's Get in Touch</h2>
                            <p className="text-blue-100 mb-6">
                                Need to get in touch with us? Fill out the form with your inquiry.
                            </p>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold">Telephone</h3>
                                    <p className="text-blue-100">0923625008</p>
                                </div>
                            <div>
                                <h3 className="font-semibold">Phone Hours Supports</h3>
                                <p className="text-blue-100"> Mon - Sat (12:00 - 12:00)</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Support Contact</h3>
                                <p className="text-blue-100">email</p>
                            </div>
                        </div>
                        </div>
                        <div>
                            <button 
                            className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer align-text-bottom" 
                            onClick={() => 
                                { 
                                    setShow(true) 
                                }
                            }>
                                Check Your Schedule
                            </button>
                        </div>
                    </div>
                    <div className="p-10">

                        {
                            !show &&(
                                <form onSubmit={handleSubmit} className="space-y-5"> 
                            <div>
                                <label className="bloc font-medium mb-1">Full Name</label>
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}                                 
                                <input 
                                name="name"
                                type="text"
                                placeholder="Abebe Mola"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500
                                    ${errors.name ? "border-red-500 focus:ring-red-500": "focus:ring-blue-500"} 
                                    `}
                                />
                                
                                </div>
                                <div>
                                <label className="block font-medium mb-1">Phone Number</label>
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                )}  
                                <input 
                                name="phone"
                                type="text"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="09-xx-xxx-xxx"
                                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500
                                    ${errors.phone ? "border-red-500 focus:ring-red-500": "focus:ring-blue-500"} 
                                    `}
                                />
                                </div>
                                <div>
                                <label className="block font-medium mb-1">Choose Car Type</label>
                                {errors.car && (
                                    <p className="text-red-500 text-sm mt-1">{errors.car}</p>
                                )}  
                                <select className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500
                                ${errors.car ? "border-red-500 focus:ring-red-500": "focus:ring-blue-500"} 
                                `}
                                name="car"
                                value={formData.car}
                                onChange={handleChange}
                                >
                                    <option value="">Select a Car</option>
                                    <option value="hatchback">Hatchback</option>
                                    <option value="coupe">Coupe</option>
                                    <option value="sedan">Sedan</option>
                                    <option value="suv">SUV</option>
                                    <option value="van">Van</option>
                                </select>

                                </div>
                                <div>
                                <label className="block font-medium mb-1">Choose Sevices</label>
                                {errors.services && (
                                    <p className="text-red-500 text-sm mt-1">{errors.services}</p>
                                )}  
                                <select className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500
                                ${errors.services ? "border-red-500 focus:ring-red-500": "focus:ring-blue-500"} 
                                `}
                                name="services"
                                value={formData.services}
                                onChange={handleChange}
                                >
                                    <option value="">Select a Service</option>
                                    <option value="Basic Wash">Basic Wash</option>
                                    <option value="Premium Wash">Premium Wash</option>
                                    <option value="Deluxe Wash">Deluxe Wash</option>
                                    <option value="QuickShine">QuickShine</option>
                                
                                </select>
                                </div>
                                <div>
                                    <label>Schedule Date</label>
                                    {errors.date && (
                                    <p className="text-red-500 text-sm mt-1">{errors.date}uu</p>
                                )} 
                                {errors.general && (
                                    <p className="text-red-500 text-sm mt-1">{errors.general}</p>
                                )} 
                                    <input 
                                    type="date"
                                    name="date"
                                    value={formData.date} 
                                    onChange={handleChange}
                                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500
                                        ${errors.date ? "border-red-500 focus:ring-red-500": "focus:ring-blue-500"} 
                                        ${errors.general ? "border-red-500 focus:ring-red-500": "focus:ring-blue-500"} 
                                        `}

                                    />
                                    
                                </div>
                                <div>
                                    <label>Schedule Time</label>
                                    {errors.time && (
                                    <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                                )}
                                {errors.general && (
                                    <p className="text-red-500 text-sm mt-1">{errors.general}</p>
                                )}   
                                    <input 
                                    type="time"
                                    name="time"
                                    value={formData.time} 
                                    onChange={handleChange}
                                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 
                                        ${errors.time ? "border-red-500 focus:ring-red-500": "focus:ring-blue-500"} 
                                        ${errors.general ? "border-red-500 focus:ring-red-500": "focus:ring-blue-500"}
                                        `}
                                    />
                                    
                                </div>

                                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">Submit</button>
                            
                        </form>
                            )
                        }
                        {
                            show && (
                                <div className="space-y-4">
                                    <h2 className="text-xl font-semibold">Your Appointment</h2>
                                    <form onSubmit={handleCheckAppointment} className="space-y-3"> 
                                        <input 
                                        name="name"
                                        type="text"
                                        placeholder="Abebe Mola"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                         <input 
                                            name="phone"
                                            type="text"
                                            placeholder="09-xx-xxx-xxx"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">Submit</button>
                                    </form>
                                    {appointment.length === 0 && (
                                        <p className="text-gray-500">No appointment found</p>
                                    )}

                                    {
                                        appointment.map((item, index) => (
                                            <div
                                            key={index}
                                            className="border rounded-lg p-4 shadow-md"
                                            >
                                                <p>Name:{item.name}</p>
                                                <p>Phone:{item.phone}</p>
                                                <p>Car:{item.car}</p>
                                                <p>Service:{item.services}</p>
                                                <p>Date:{item.date}</p>
                                                <p>Address: Shegole in Front of Anbessa Garage</p>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => setShow(false)}
                                            className="mt-4 text-blue-600 underline cursor-pointer"
                                            >
                                            Back to Form
                                            </button>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}