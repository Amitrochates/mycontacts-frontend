import { TopBar } from "../components/TopBar"

export const Signup = () => {
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
                <div>

                    <input className="rounded-full bg-customGray-dark m-2 p-2" placeholder="email"/>
                </div>
                <div>
                    <input className="rounded-full bg-customGray-dark m-2 p-2" placeholder="username"/>
                </div>
                <div>
                    <input className="rounded-full bg-customGray-dark m-2 p-2" placeholder="password"/>
                </div>
                <button className="bg-blue-700 rounded-full m-2 p-2 w-20">
                    Sign up
                </button>

                <div className="text-gray-100 text-sm p-2 pt-6 font-xs">
                    <div>Already have an account?</div>
                </div>
            </div>
    </div>
    )
}
