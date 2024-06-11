

export function LeftBar (){
    return (
        <div className="flex flex-col p-5 m-5 h-full bg-customGray text-gray-100 rounded-3xl min-h-screen">
           <div className="rounded-full  text-gray-800  bg-gray-200  hover:bg-blue-600 p-2 m-5">
                Add Contact
            </div>
            <div className="rounded-full text-gray-800 bg-gray-200 hover:bg-blue-600 p-2 m-5">
                Signout
            </div>
        </div>
    )
}