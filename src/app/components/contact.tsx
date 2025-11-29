export default function Contact(){
    return(
        <section className="py-20 px-6 md:px-12 lg:px-60">
            <div className="max-w-6x1 mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10">
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
                    <div className="p-10">
                        <form action="" className="space-y-5">
                            <div>
                                <label className="bloc font-medium mb-1">Full Name</label>
                                <input 
                                type="text"
                                placeholder="Your Full Name"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                </div>
                                <div>
                                <label className="block font-medium mb-1">Email</label>
                                <input 
                                type="email"
                                placeholder="Your Email"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                </div>
                                <div>
                                <label className="block font-medium mb-1">Phone Number</label>
                                <input 
                                type="text"
                                placeholder="Your Phone Number"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                </div>
                                <div>
                                <label className="block font-medium mb-1">Choose Sevices</label>
                                <select className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">Basic Wash</option>
                                    <option value="">Premium Wash</option>
                                    <option value="">Deluxe Wash</option>
                                    <option value="">QuickShine</option>
                                
                                </select>
                                </div>
                                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Submit</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}