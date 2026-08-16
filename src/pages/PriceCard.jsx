import PricingCard from "../components/PricingCard";

function PriceCard() {
    const cards = [
        {
            cardType: "STARTER",
            price: "25",
            backgroundColor:"bg-violet-200",
            bestFor: "Perfect for small teams",
            perks: ["3 Projects AI","Applicant Screening","AI Recruiter"]
        },
        {
            cardType: "PROFESSIONAL",
            price: "99",
            backgroundColor:"bg-amber-300",
            bestFor: "Perfect for Growing teams",
            perks: ["Unlimited Projects"," AI Applicant Screening","AI Recruiter","Risk Free Gurantee"]
        }
    ]
    return (

        <div className="min-h-screen p-5 bg-yellow-200 flex flex-col md:flex-row justify-center items-center gap-10">
            {
                cards.map(card=><PricingCard key={card.cardType} card={card} />)
            }
            
        </div>
    )
}

export default PriceCard;