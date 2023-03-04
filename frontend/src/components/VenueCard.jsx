import './Card.css';


const VenueCard = ({proposal})=>{
   
    return(
        <>
        <section className="card-container">
            
            <div className="text-container">
                <h2>{proposal.title}</h2>
                <p>{proposal.description}</p>
            </div>
        </section>

        
        </>
    )
}
export default VenueCard;