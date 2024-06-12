import { useState } from 'react'
import { ContactCard } from '../components/ContactCard'
import { ContactList } from '../components/ContactList'
import { LeftBar } from '../components/LeftBar'
import { TopBar } from '../components/TopBar'

export const Dashboard = () => {
    

    const [selectedid, setSelectedid] = useState()
    const [contacts, setContacts] = useState([]);
    const [mode, setMode] = useState('view');


    const handleDelete = (id) => {
        setContacts(contacts.filter(contact => contact._id !== id));
        setSelectedid(null); 
        setMode('view');// Clear the selected contact after deletion
    };

    const handleSave = (contact) => {
        if(mode === 'create'){
            setContacts([...contacts, contact])
        }
        else if(mode === 'edit'){
           
            setContacts(contacts.map(c => c._id === contact._id ? contact: c))
        }
        setMode('view')
    }

    return (
        <div className='flex flex-col bg-customGray-dark min-h-screen p-10 min-w-screen'>

            <div>
            <TopBar/>
            </div>
            <div className='grid grid-cols-12 gap-4 pt-5'>
                <div className='col-span-2'>
                    <LeftBar setMode={setMode} setSelectedid={setSelectedid}/>
                </div>
                <div className='col-span-6'>
                    <ContactList contacts={contacts} setContacts={setContacts} setSelectedid={setSelectedid} setMode={setMode}/>
                </div>
                <div className='bg-customGray rounded-3xl col-span-4'>
                {selectedid || mode === 'create' ? (
                        <ContactCard
                            id={selectedid}
                            onDelete={handleDelete}
                            mode={mode}
                            setSelectedid={setSelectedid}
                            onSave={handleSave}
                            setMode={setMode}
                        />
                    ) : (
                        <p>Select a contact to view details or create a new contact.</p>
                    )}
                </div>
                
            </div>
    </div>
    )
}