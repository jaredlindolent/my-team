import React, { useState, useEffect } from "react";
import './Style.css';
import Search from './Search';

const MyTeam = () => {
  const [team, setTeam] = useState([]);
  const [searchField, setSearchField] = useState([]);
  const [members, setMembers] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [resultsPanel, setResultsPanel] = useState(false);

  const loadData = async () => {
    const endpoint = 'https://jsonplaceholder.typicode.com/users';
    await fetch(endpoint)
      .then(res => res.json())
      .then((result) => {
        setTeam(result);
      }, (error) => { console.error(error) });
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (members.length > 0) {
      setShowCard(true);
      setResultsPanel(false);
    }
  }, [members]);

  const onSearchChangeHandler = (value) => {
    setResultsPanel(false);
    setSearchField([]);
    setSearchField(value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setResultsPanel(false);
    setMembers([]);
    let found = [];
    if (searchField !== '') {
      if (team.find(item => item.name === searchField) !== undefined) {
        found.push(team.find(item => item.name === searchField));
      }
      if (team.find(item => item.email === searchField) !== undefined) {
        found.push(team.find(item => item.email === searchField));
      }
      if (found.length > 0) {
        setMembers(found);
      } else {
        setResultsPanel(true);
        setShowCard(false);
      }
    }
  }

  return (
    <div className="App">
      <form onClick={onSubmitHandler}>
        <h1 className="title">Search for My Team</h1>
        <div>
          <div style={{ float: "left" }}>
            <Search onSearchChanged={onSearchChangeHandler} props={team} />
          </div>
          <div style={{ float: "right" }}>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>

      {showCard ?
        <>
          {members.map((item, index) => (
            <div key={index} className="card">
              <div className="container">
                <h4><b>{item.name}</b></h4>
                <p><b>E-mail:</b> {item.email}</p>
                <p><b>Address:</b> {item.address.suite} {item.address.street}, {item.address.city}, {item.address.zipcode}</p>
                <p><b>Phone:</b> {item.phone}</p>
                <p><b>Website:</b> {item.website}</p>
                <p><b>Company Name:</b> {item.company.name}</p>
                <p><b>Catch phrase:</b> {item.company.catchPhrase}</p>
              </div>
            </div>
          ))}
        </>
        : null}

      {resultsPanel ?
        <>
          <div className="results-panel" style={{ backgroundColor: '#FFCCBB' }}>
            <div><p>No results were found for <b>{searchField}</b>, please try again.</p></div>
          </div>
        </>
        : null}
    </div >
  );
}

export default MyTeam;
