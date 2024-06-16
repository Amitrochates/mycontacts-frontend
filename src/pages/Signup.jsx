import { TopBar } from "../components/TopBar"
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const url = import.meta.env.VITE_BACKEND_URL;

 function onClickHandler() { 
        axios.post(`${url}/api/users/register`, {
        username,
        email,
        password
    }).then((response) => {
        console.log("created user")
    })}
    return(
        <div className='flex flex-col items-center bg-customGray-dark min-h-screen p-10'>

            <div className="w-screen">
                <TopBar/>
            </div>
            <div className="flex flex-col justify-center items-center bg-customGray-light rounded-3xl p-5 m-10 w-auto">
                <div className="text-gray-100 text-xl p-2 pt-2 font-bold">
                    Signup
                </div>
                <div className="text-gray-100 text-sm pt-1 pb-5 font-semibold">
                    Create an account to start adding your contacts.
                </div>
                <div className="text-gray-100">

                    <input onChange={(e) => (setEmail(e.target.value))} className="rounded-full bg-customGray-dark m-2 p-2" placeholder="email"/>
                </div>
                <div  className="text-gray-100">
                    <input onChange={(e) => (setUsername(e.target.value))} className="rounded-full bg-customGray-dark m-2 p-2" placeholder="username"/>
                </div>
                <div  className="text-gray-100">
                    <input onChange={(e) => (setPassword(e.target.value))} className="rounded-full bg-customGray-dark m-2 p-2" placeholder="password"/>
                </div>
                <button onClick={onClickHandler} className="bg-blue-700 rounded-full m-2 p-2 w-20">
                    Sign up
                </button>

                <div className=" flex text-gray-100 text-sm p-2 pt-6 font-xs">
                    <div>Already have an account?</div>
                    <Link className="pl-2 underline" to={"/signin"}>Login</Link>
                </div>
            </div>
    </div>
    )
}
