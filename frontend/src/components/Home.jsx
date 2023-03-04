import { useEffect, useState } from "react";
import Card from "./Card"
import './Home.css';
import Header from './UserHeader';


const Home = ()=>{
    const [proposals, setProposals] = useState([]);
    const fetchProposals = ()=>{
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
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                },
                {
                    name: "Vendor Name",
                    budget: 20000,
                    city: 'Bangalore'
                }
            ];
            setProposals(arr);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchProposals();
        console.log(proposals);
 
    }, []);
    return(
        <>
        <div >
            <Header/>
        </div>
        <div className="main-section">
            <section className="top-background"></section>
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
        </>
    )   
}
export default Home;