import React from 'react'
import { supabase } from '../lib/supabase'


export default async function Page() {
    const { data: customers, error } = await supabase.from("customer").select("*").order("created_at", {ascending:false})
    console.log(customers)
    if (error){
        return <p>Error loading customers</p>
    }

    const now = new Date()
    
    const upcomingSchedule = customers.filter((c) => {
        const scheduleDateTime = new Date(`${c.date}T${c.time}`)
        return scheduleDateTime >= now
    })

    const pastSchedule = customers.filter((c) => {
        const scheduleDateTime = new Date(`${c.date}T${c.time}`)
        return scheduleDateTime < now
    })
  return (
    <div className='p-8'>
        <h1 className='text-2xl font-bold mb-6'>Customers</h1>
        <div>
            <h2 className='text-xl font-semibold mb-4'>Upcoming Schedules</h2>
                <table className='w-full border'>
                    <thead>
                <tr className='bg-gray-50'>
                    <th className='border p-2'>Name</th>
                    <th className='border p-2'>Phone</th>
                    <th className='border p-2'>Car Type</th>
                    <th className='border p-2'>Service</th>
                    <th className='border p-2'>Created</th>
                    <th className='border p-2'>Date</th>
                    <th className='border p-2'>Time</th>
                </tr>
            </thead>
            <tbody>
                {upcomingSchedule.map((c)=> (
                    <tr key={c.id}>
                        <td className='border p-2'>{c.name}</td>
                        <td className='border p-2'>{c.phone}</td>
                        <td className='border p-2'>{c.car}</td>
                        <td className='border p-2'>{c.services}</td>
                        <td className='border p-2'>
                            {new Date(c.created_at).toLocaleString()}
                        </td>
                        <td className='border p-2'>{c.date}</td>
                        <td className='border p-2'>{c.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-4'>Passed Schedules</h2>
        <table className='w-full border'>
            <thead>
                <tr className='bg-gray-50'>
                    <th className='border p-2'>Name</th>
                    <th className='border p-2'>Phone</th>
                    <th className='border p-2'>Car Type</th>
                    <th className='border p-2'>Service</th>
                    <th className='border p-2'>Created</th>
                    <th className='border p-2'>Date</th>
                    <th className='border p-2'>Time</th>
                </tr>
            </thead>
            <tbody>
                {pastSchedule.map((c)=> (
                    <tr key={c.id}>
                        <td className='border p-2'>{c.name}</td>
                        <td className='border p-2'>{c.phone}</td>
                        <td className='border p-2'>{c.car}</td>
                        <td className='border p-2'>{c.services}</td>
                        <td className='border p-2'>
                            {new Date(c.created_at).toLocaleString()}
                        </td>
                        <td className='border p-2'>{c.date}</td>
                        <td className='border p-2'>{c.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}
