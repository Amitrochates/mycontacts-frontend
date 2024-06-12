import { useEffect, useState } from "react";
import { ContactName } from "./ContactName";
import axios from "axios";
export function ContactList ({contacts, setContacts, setSelectedid, setMode}){

    const url = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        axios.get(`${url}/api/contacts/`,{
            headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token")
            }}).then(response => {
                setContacts(response.data.contacts)
               
            })
    },[setContacts])

    return (
        <div className="flex flex-col p-4 m-4 h-full bg-customGray text-gray-100 rounded-3xl" >
           {contacts?.map(contact => <ContactName key={contact._id} name={contact.name} id={contact._id} setSelectedid={setSelectedid} setMode={setMode}/>)}
           
        </div>
    )
}