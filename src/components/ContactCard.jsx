import { Avatar } from "./Avatar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export function ContactCard({id, onDelete, mode, setMode, setSelectedid, onSave}){
    const [contact, setContact] = useState([]);
    
  //  console.log("contact card id " + id)
    useEffect( () => { 
        axios.get(`http://localhost:5001/api/contacts/${id}`, {
        headers:{
            Authorization: "Bearer " + window.localStorage.getItem("token")
        }}
    ).then(response => {
            setContact(response.data.contact)
           // console.log("inside card")
            //console.log(response.data.contact)
            
        }
    )
    }, [id])
    
    if (!contact) {
        return <div>Select a contact to view details</div>;
    }

  const handleDelete = () => { 
    axios.delete(`http://localhost:5001/api/contacts/${id}`, {
    headers:{
        Authorization: "Bearer " + window.localStorage.getItem("token")
    }}
    ).then(response => {
            console.log(response.data)
            onDelete(id);           
        }
    )}   
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setContact(prevState => ({
            ...prevState, 
            [name]: value
        }))
    }
    const handleSubmit = () => {
        if(mode === 'create'){
            axios.post(`http://localhost:5001/api/contacts`, contact, {
                headers: {
                    Authorization: "Bearer " + window.localStorage.getItem("token")
                }
            }).then(response => {onSave(response.data.contact) 
                
            })
        } else if (mode === 'edit'){
            axios.put(`http://localhost:5001/api/contacts/${id}`, contact, {
                headers: {
                    Authorization: "Bearer " + window.localStorage.getItem("token")
                }
            }).then(response => {onSave(response.data.updatedContact)
               
            })
        }


    }
    return (
        <div className="flex flex-col justify-center items-center bg-customGray-light rounded-3xl m-10">

        {mode === 'view' ? (
            <>
            <div className="p-4">
                <Avatar name={contact.name}/>
            </div>
            <div className="p-4 text-gray-100">
            {contact.name}
            </div>
            <div className="flex">
                <div className="p-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                    </svg>
                </div>
                <div className="p-4 text-gray-400">
                {contact.email}
                </div>
                
            </div>
            <div className="flex">
                <div className="p-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                <div className="p-4 text-gray-400">
                {contact.phone}
                </div>
                
            </div>

            <div className="flex justify-evenly p-5 m-5 w-full">
                <div className="p-4 text-gray-400 hover:bg-blue-700 rounded-full" onClick ={ () => {setMode('edit'); setSelectedid(id)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </div>
                <div className="p-4 text-gray-400 hover:bg-blue-700 rounded-full" onClick ={handleDelete} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </div>

            </div>
            </>
        ) : (
                <>
            
                {/* <div>FORM FORM FORM </div> */}
            <form className="p-4 text-gray-300">
               {mode === 'create' ? ('Create new User'):('Edit this user')}
            
            <div className="flex">
                <div className="p-4 text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
               </div>
                <div className="p-4 text-gray-100">
                        {/* name */}
                        <input className="rounded-full bg-gray-400 text-black" name="name" value={contact.name} onChange={handleChange} placeholder="Name"/>
                </div>
            </div>
            <div className="flex">
                <div className="p-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                    </svg>
                </div>
                <div className="p-4 text-gray-400">
                    
                        {/* email */}
                        <input className="rounded-full bg-gray-400 text-black" name="email" value={contact.email} onChange={handleChange} placeholder="Name"/>
                    
                </div>
                
            </div>
            <div className="flex">
                <div className="p-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                <div className="p-4 text-gray-400">
                    
                        {/* phone */}
                    <input className="rounded-full bg-gray-400 text-black" name="phone" value={contact.phone} onChange={handleChange} placeholder="Name"/>
                    
                </div>
                
            </div>

            <div className="flex justify-evenly p-5 m-5 w-full">
                 <div className="p-4 text-gray-400 rounded-full hover:bg-green-800" onClick={() => {handleSubmit()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            <div className="p-4 text-gray-400 hover:bg-red-800 rounded-full" onClick={() => {setMode('view')}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
            </div>
            
            </form>
                </>
        )

}
        </div>
        
    )
   

}