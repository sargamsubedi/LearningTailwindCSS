import HeroNavbar from "../components/HeroNavbar"

import mid from '../assets/imgforhero/Frame 145.png'
import small from '../assets/imgforhero/Frame 146.png'
import big from '../assets/imgforhero/Group 1053.png'

function Hero() {
    return (
        <div className=" font-[Inter] h-screen w-screen bg-linear-45 from-pink-100 to-white flex flex-col">
            <header>
                <HeroNavbar />
            </header>
            <main className="flex-1 flex ">
                {/* for contents */}
                <div className=" flex-1 flex flex-col justify-center items-center ">

                    <div className="flex flex-col gap-7 width-fit m-auto">

                        <div className="text-purple-300 text-lg">
                            <p>Your personal</p>
                            <p>Hair specialist</p>
                        </div>

                        <div>
                        <p className="text-6xl font-[literata] text-green-900 font-medium">
                            Carefree Hair 
                        </p>
                        <p className="text-6xl font-[literata] text-green-900 font-medium">
                           Services
                        </p>
                        </div>


                        <button className="py-2 px-6 max-w-fit rounded bg-green-700">Book Appointment</button>                        
                    </div>
                </div>
                {/* for images */}
                <div className=" flex-1 flex justify-center items-center">
                    <div className="relative flex justify-center items-center size-full">
                        <img src={big} alt="" className="absolute size-110 " />
                        <img src={mid} alt="" className="absolute size-40 right-50 bottom-35"/>
                        <img src={small} alt="" className="absolute size-20 right-90 bottom-35"/>
                    </div>
                </div>

            </main>
        </div>
    )


}
export default Hero