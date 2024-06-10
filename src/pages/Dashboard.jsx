import { useState } from 'react'
import { ContactCard } from '../components/ContactCard'
import { ContactList } from '../components/ContactList'
import { LeftBar } from '../components/LeftBar'
import { TopBar } from '../components/TopBar'
export const Dashboard = () => {
    const [selectedid, setSelectedid] = useState()
    return (
        <div className='flex flex-col bg-customGray-dark min-h-screen p-10 min-w-screen'>

            <div>
            <TopBar/>
            </div>
            <div className='grid grid-cols-12 gap-4 pt-5'>
                <div className='col-span-2'>
                    <LeftBar/>
                </div>
                <div className='col-span-6'>
                    <ContactList setSelectedid={setSelectedid}/>
                </div>
                <div className='bg-customGray rounded-3xl col-span-4'>
                    <ContactCard id={selectedid}/>
                </div>
                
            </div>
    </div>
    )
}