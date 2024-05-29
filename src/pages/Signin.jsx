import { TopBar } from "../components/TopBar"

import { Avatar } from "../components/Avatar"

export const Signin = () => {
    return(
        <div className='flex flex-col items-center bg-customGray-dark min-h-screen p-10'>

            <div className="w-screen">
                <TopBar/>
            </div>
            <div className="flex flex-col justify-center items-center bg-customGray-light rounded-3xl p-5 m-10 w-auto">
                <div className="text-gray-100 text-xl p-2 pt-2 font-bold">
                    Signin
                </div>
                <div className="text-gray-100 text-sm pt-1 pb-5 font-semibold">
                    Enter your email and password to login.
                </div>
                <div>

                    <input className="rounded-full bg-customGray-dark m-2 p-2" placeholder="email"/>
                </div>
                <div>
                    <input className="rounded-full bg-customGray-dark m-2 p-2" placeholder="password"/>
                </div>
                <button className="bg-blue-700 rounded-full m-2 p-2 w-20">
                    Sign in
                </button>

                <div className="text-gray-100 text-sm p-2 pt-6 font-xs">
                    <div>Dont have an account? </div>
                </div>
            </div>
    </div>
    )
}
