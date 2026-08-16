import reactIcon from '../assets/react.svg'
function Profile() {
    return (
        // parent div
        <div className='h-110 w-100 border bg-purple-500 flex flex-col rounded-3xl overflow-hidden'>

            <div className="red bg-red-500 rounded-3xl flex justify-center relative flex-2">

                <div className=' overflow-hidden p-8 py-10 border-white border-6 flex allign-center justify-center rounded-full absolute -bottom-15 bg-linear-65 from-black to-red-500'>
                    <img className="h-25 " src={reactIcon} alt="" />
                </div>

            </div>
            <div className="about  flex-3">
                <div className='mt-16 p-5 flex gap-1 flex-col justify-center items-center text-center'>

                    <h1 className='text-xl font-bold '>React JS</h1>
                    <h2 className='text-lg font-semibold'>Javascript Library</h2>
                    <div className='h-0.5 w-full bg-red-600'></div>
                    <p >React is a JavaScript library created by Facebook for building user interface (UI) components.   
                    </p>
                </div>

            </div>
        </div>
    )
}
export default Profile;