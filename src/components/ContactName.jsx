import { Avatar } from "./Avatar";

export function ContactName ({name, id, setSelectedid, setMode}){
   // console.log("contact name id " + id)
    return (<>
        <div className="flex justify-start rounded-full hover:bg-blue-600 p-2 m-5" onClick = {() => {setSelectedid(id); setMode('view')} }>
            <div>
              <Avatar name = {name}/>            
            </div>
            <div className="ml-10 mt-5">
                {name} 
            </div>
           


        </div>
        </>
    )
}
