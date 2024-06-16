import { Avatar } from "./Avatar";

export function TopBar (){
    return (
    <div className="flex justify-between p-4 ml-5 mr-5 bg-customGray text-gray-100 rounded-3xl">
       <div className="h-14 w-14">
        <img className="rounded-lg" src="https://i.ibb.co/RN97T18/contact-logo.png" alt="contact-logo" border="0" />
       </div>
       {/* <div className="">
            options
        </div> */}
       <div className="">
        
            <Avatar name = "h"/>
       </div>

    </div>
)}