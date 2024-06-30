
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export function LeftBar ({setMode, setSelectedid}){

const navigate = useNavigate();
    return (
        <div className="flex flex-col p-5 m-5 h-full bg-customGray text-gray-100 rounded-3xl min-h-screen">
           <div className="rounded-full  text-gray-800  bg-gray-200  hover:bg-blue-600 p-2 m-5" onClick={() => {setMode('create'); setSelectedid(null)}}>
                Add Contact
            </div>
            <div className="rounded-full text-gray-800 bg-gray-200 hover:bg-blue-600 p-2 m-5" onClick={() => {window.localStorage.removeItem("token"); navigate("/signin"); toast.success(`You've been Signed out`);}}>
                Signout
            </div>
        </div>
    )
}