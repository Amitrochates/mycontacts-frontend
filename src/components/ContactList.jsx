import { useEffect, useState } from "react";
import { ContactName } from "./ContactName";
import axios from "axios";
export function ContactList ({setSelectedid}){

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5001/api/contacts/",{
            headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token")
            }}).then(response => {
                setContacts(response.data.contacts)
                //console.log(response.data.contacts)
                //console.log("list")
            })
    },[])

    return (
        <div className="flex flex-col p-4 m-4 h-full bg-customGray text-gray-100 rounded-3xl" key={contacts.id}>
           {contacts?.map(contact => <ContactName name={contact.name} id={contact._id} setSelectedid={setSelectedid}/>)}

        </div>
    )
}