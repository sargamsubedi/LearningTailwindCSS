function Navbar() {
    const navbarItems = ["home", "features", "pricing", "about"]
    return (
        <nav className="flex justify-between md:justify-start md:gap-16 p-5 sticky top-1 mt-10">
            {/* for logo */}
            <div className="flex items-center gap-1 p-2">
                <div className="bg-blue-400  size-10 rounded-full"></div>
                <div>TalentAI</div>
            </div>
            {/* nav buttons */}
            <div className=" hidden  md:flex justify-center  items-center gap-10">

                {
                    navbarItems.map((item)=> <a href="" key={item} className=" px-4 py-1 bg-blue-100 rounded-md hover:bg-blue-200 transition" >{item} </a>)
                }
   
                <button className="border px-4 py-1 text-black bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 transition">Login</button>
            </div>
            <button className="md:hidden border px-4 py-1 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 transition flex justify-center items-center">
                <img className="size-6" src="hamburger.svg" alt="" />
            </button>
        </nav>
    )
}

export default Navbar;