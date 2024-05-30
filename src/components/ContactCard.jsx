import { Avatar } from "./Avatar";
import { useState } from "react";
export function ContactCard(){
    const [name, useName] = useState("");
    const [email, useEmail] = useState("");
    const [phone, usePhone] = useState("");


    
    return (
        <div className="flex flex-col justify-center items-center bg-customGray-light rounded-3xl m-10">
            <div className="p-4">
            <Avatar/>
            </div>
            <div className="p-4 text-gray-100">
            name
            </div>
            <div className="flex">
                <div className="p-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                    </svg>
                </div>
                <div className="p-4 text-gray-400">
                email
                </div>
                
            </div>
            <div className="flex">
                <div className="p-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                <div className="p-4 text-gray-400">
                phone
                </div>
                
            </div>
        </div>
        
    )
}