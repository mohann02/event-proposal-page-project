import React, { useState, useEffect } from 'react';
import "./ProposalsData.css";
import Edit from "../../images/pencil-edit-button.png"
import Delete from "../../images/bin.png";
import Search from "../../images/search.png";
import { FaFilter } from "react-icons/fa";
import Header from '../header/header';
function ProposalsData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/proposalsData');
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
              <input type="text" id='search' placeholder='Search projects' />
            </section>
          </section>
          <section className='filter-create-container'>

            <span><FaFilter /></span>
            <button className='create-button'>CREATE</button>
          </section>
        </section>
        {data.map(item => (
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
                <button><img src={Delete} alt="delete" /></button>
              </section>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProposalsData;

