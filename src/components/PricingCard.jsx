function PricingCard({ card }) {
    return (
        <div className="w-full max-w-90 bg-slate-100 flex flex-col  rounded-3xl  overflow-hidden">
            <div className="bg-white rounded-2xl p-5 justify-around shadow-xl shadow-black/50">

                <div
                    className={`${card.backgroundColor} h-30 rounded-2xl p-4 flex flex-col justify-around`}
                >

                    <div className="bg-white px-4 py-1 rounded-3xl max-w-fit font-bold text-sm text-slate-800">{card.cardType}</div>

                    <div><span className=" font-bold text-2xl ">${card.price}</span>/month</div>
                </div>
                <div className=" my-6 pr-2 flex flex-col justify-between gap-5">
                    <p className="font-bold">{card.bestFor}</p>
                    <button className="font-bold py-1 bg-black text-white rounded-xl">Select Plan</button>
                </div>
            </div>
            <div className="flex items-center p-5 h-50 text-gray-700">
                <div>
                    {
                        card.perks.map((perk, index) => <p key={index}>{perk}</p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default PricingCard;