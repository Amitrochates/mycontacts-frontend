import { Avatar } from "./Avatar";

export function ContactName (){
    return (
        <div className="flex justify-start rounded-full hover:bg-blue-600 p-2 m-5">
            <div>
              <Avatar/>            
            </div>
            <div className="ml-10 mt-5">
                name 
            </div>


        </div>
    )
}
