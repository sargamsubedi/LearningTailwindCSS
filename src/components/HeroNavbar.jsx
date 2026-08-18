function HeroNavbar()
{
    return(
        <nav className="bg-white p-3 px-10 flex justify-between">
            <div className="font-[literata] text-xl text-green-700">Hairstylist</div>
            <div className="flex gap-6 font-extralight text-zinc-500 text-lg">
                <a href="#">Home</a>
                <a href="#">Livia</a>
                <a href="#">Offering</a>
                <a href="#">Service</a>
                <a href="#">Academy</a>
                <a href="#">Gallery</a>
                <a href="#">Contact</a>
                <a href="#">More</a>
            </div>
            <div>
                <img src="shoppingCart.svg" alt="" />
            </div>
        </nav>
    )
}

export default HeroNavbar;