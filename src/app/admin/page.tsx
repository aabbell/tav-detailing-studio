import React from 'react'
import { supabase } from '../lib/supabase'


export default async function Page() {
    const { data: customers, error } = await supabase.from("customer").select("*").order("created_at", {ascending:false})
    console.log(customers)
    if (error){
        return <p>Error loading customers</p>
    }
  return (
    <div className='p-8'>
        <h1 className='text-2xl font-bold mb-6'>Customers</h1>
        <table className='w-full border'>
            <thead>
                <tr className='bg-gray-50'>
                    <th className='border p-2'>Name</th>
                    <th className='border p-2'>Phone</th>
                    <th className='border p-2'>Car Type</th>
                    <th className='border p-2'>Service</th>
                    <th className='border p-2'>Created</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((c)=> (
                    <tr key={c.id}>
                        <td className='border p-2'>{c.name}</td>
                        <td className='border p-2'>{c.phone}</td>
                        <td className='border p-2'>{c.car}</td>
                        <td className='border p-2'>{c.services}</td>
                        <td className='border p-2'>
                            {new Date(c.created_at).toLocaleString()}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}
