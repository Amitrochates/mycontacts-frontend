import { ContactName } from "./ContactName";

export function ContactList (){
    return (
        <div className="flex flex-col p-4 m-4 h-full bg-customGray text-gray-100 rounded-3xl">
           <ContactName/>
           <ContactName/>
           <ContactName/>
        </div>
    )
}