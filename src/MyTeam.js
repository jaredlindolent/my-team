import React, { useState, useEffect } from "react";
import './style.css';
import Search from './Search';

const MyTeam = () => {
  const [team, setTeam] = useState([]);
  const [searchField, setSearchField] = useState([]);
  const [members, setMembers] = useState([]);
  const [showCard, setShowCard] = useState(false);

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
    }
  }, [members]);

  const onSearchChangeHandler = (value) => {
    setSearchField([]);
    setSearchField(value);
  }

  const onSubmitHandler = () => {
    setMembers([]);
    let found = team.find(item => item.name === searchField);
    if (found !== undefined) {
      setMembers(members => [...members, found]);
    } else { setShowCard(false) }
  }

  return (
    <div className="App">
      <Search onSearchChanged={onSearchChangeHandler} props={team} />
      <button type="submit" onClick={onSubmitHandler}>Submit</button>

      {showCard ?
        <>
          {members.map(item => (
            <div key={item.id} className="card">
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
    </div>
  );
}

export default MyTeam;
