import React, { useState, useEffect } from 'react';
import "./ProposalsData.css";
import Edit from "../../images/pencil-edit-button.png"
import Delete from "../../images/bin.png";
import Search from "../../images/search.png";
import { FaFilter } from "react-icons/fa";
import Header from '../header/header';

import axios from 'axios';

import { Link } from "react-router-dom"
function ProposalsData() {
  const [proposals, setProposals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/proposalsData');
        // console.log(response);
        const data = await response.json();
        setProposals(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

   // delete handling
const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/proposalDelete/${id}`);
    setProposals(proposals.filter((eachData) => eachData._id !== id));
  } catch (error) {
    console.log(error);
  }
};



  // delete handling
  // const handleDelete = (id) => {
  //   let newDelete = proposals.filter((eachData) => {
  //     return eachData._id !== id;
  //   })
  //   setProposals(newDelete)
  // }

  //searching
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const results = !searchTerm
  ? proposals
  : proposals.filter((each) =>
      each.eventName.toLowerCase().includes(searchTerm.toLowerCase())
    );


  return (
    <div className='total-container'>
      <section className='imported-header'>
        <Header />
      </section>
      <section className='total-proposals-container'>
        <section className='header-search-box'>
          <section className='proposals-search-container'>
            <h1>Proposals</h1>
            <section>
              <label htmlFor='search'><img src={Search} alt="search" /></label>
              <input type="text" id='search' placeholder='Search projects' onChange={handleSearch}/>
            </section>
          </section>
          <section className='filter-create-container'>

            <span><FaFilter /></span>
            <Link to="/">
            <button className='create-button'>CREATE </button>
            </Link>
          </section>
        </section>
        {results.map(item => (
          <div key={item._id} className="container">
            <section className='eventName-heading'>Event Name<p>{item.eventName}</p></section>
            <section className="events-container" style={{ display: "flex" }}>
              <section className="container-row" style={{ display: "flex" }}>
                <div>Event Type<p>{item.eventType}</p></div>
                <div>Proposal Type<p>{item.proposalType}</p></div>
                <div>From Date<p>{item.fromDate}</p></div>
                <div>To Date<p>{item.toDate}</p></div>
                <div>Budget<p>{item.budget}</p></div>
              </section>
              <section className='edit-delete-container'>
                <button><img src={Edit} alt="edit" /></button>
                <button onClick={() => { handleDelete(item._id) }}><img src={Delete} alt="delete" /></button>
              </section>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProposalsData;

