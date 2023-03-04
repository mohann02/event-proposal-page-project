import { useEffect, useState } from "react";
import Header from "./header/header";

import Card from "./Card"
import './Venue.css';



const Venue = () => {
  const [proposals, setProposals] = useState([]);
  const fetchProposals = () => {
    try {
      let arr = [
        {
            name: "Vendor Name",
            budget: 20000,
            city: 'Bangalore'
        },
        {
            name: "Vendor Name",
            budget: 20000,
            city: 'Bangalore'
        },
        {
            name: "Vendor Name",
            budget: 20000,
            city: 'Bangalore'
        },
        {
            name: "Vendor Name",
            budget: 20000,
            city: 'Bangalore'
        },
        {
            name: "Vendor Name",
            budget: 20000,
            city: 'Bangalore'
        },
       
      ];
      setProposals(arr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProposals();
    console.log(proposals);
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
      <div className="main-section">
            <section className="top-background"></section>
            <h2 className="heading">Selected</h2>
            <section className="card">
            <div className="img-container">
                <img src={''} alt="Random " />
            </div>
            <div className="text-container">
                <h2>Vendor name</h2>
                <h4>20000/-</h4>
                <p>Bangalore</p>
            </div>
        </section>
        </div>
        </div>
        <div>
        <h2 className="heading">Proposals</h2>
        <section className="cards-container">
            
                {
                    proposals.map((proposal, index)=>{
                        return(
                            <Card proposal={proposal} key={index}/>
                        )
                    })
                }
            </section>
            
        </div>
    </div>
  );
};

export default Venue;
