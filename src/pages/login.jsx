function Login() {
    return (
        <div className="min-h-screen bg-black flex justify-center items-center">
            <div className="w-250 bg-violet-100 rounded-xl flex flex-col-reverse md:flex-row py-6">

                <div className="md:flex-1 flex flex-col gap-4 px-11 py-3 box-border">
                    <h1 className="text-2xl font-bold">Welcome Back</h1>
                    <p>Today is a new day. Its your day. You shape it. Sign in to start managing your projects</p>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Example@gmail.com" className="bg-green-100/50 rounded-lg p-1 border border-gray-200 focus:outline-none" />
                    </div>

                    <div className="flex flex-col">

                        <label htmlFor="password">Password</label>

                        <input type="password" name="password" id="password" placeholder="At least 8 characters " className="bg-green-100/50 rounded-lg p-1 border border-gray-200 focus:outline-none" />


                    </div>

                    <div className="flex justify-end">

                        <a href="#" className="text-blue-400">Forgot Password?</a>
                    </div>
                    <button className="p-2  text-white rounded-lg bg-slate-900 hover:cursor-pointer">Sign in</button>

                    {/* for signin with google/facebook */}
                    <div>
                        {/* for desktop */}
                        <div className="flex-col gap-4 hidden md:flex">
                            <div className="relative flex items-center justify-center">
                                <div className="bg-slate-400 h-1 w-full"></div>
                                <p className="absolute bg-violet-100 px-2">Or</p>
                            </div>

                            <button className="border px-3 py-2 rounded-lg bg-green-100/50 text-gray-800 text-center hover:cursor-pointer">sign in with google</button>
                            <button className="border px-3 py-2 rounded-lg bg-green-100/50 text-gray-800 text-center hover:cursor-pointer">sign in with facebook</button>
                        </div>
                        {/* for mobile */}

                        <div className="flex-col gap-4 flex md:hidden">
                            <div className="relative flex items-center justify-center">
                                <div className="bg-slate-400 h-1 w-full"></div>
                                <p className="absolute bg-violet-100 px-2">Or sign in with</p>
                            </div>
                            <div className="flex justify-around">

                                <button className="border px-3 py-2 rounded-lg bg-green-100/50 text-gray-800 text-center hover:cursor-pointer">google</button>
                                <button className="border px-3 py-2 rounded-lg bg-green-100/50 text-gray-800 text-center hover:cursor-pointer">facebook</button>
                            </div>
                        </div>


                    </div>
                    <div className="flex gap-1 justify-center">
                        <p>Don't you have an account?</p> <a href="#" className="text-blue-400">Sign Up</a>
                    </div>

                </div>
                <div className=" md:flex-1 p-4 ">
                    <img src="flowerpot.png" alt="" className="h-40 rounded-lg w-full md:h-full object-cover object-center" />

                </div>

            </div>
        </div>
    )
}

export default Login;