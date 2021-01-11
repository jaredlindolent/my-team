import React, { useState, useEffect } from "react";
import './Style.css';
import Search from './Search';

const MyTeam = () => {
  const [team, setTeam] = useState([]);

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
  }, [])

  useEffect(() => {

  }, [team])

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default MyTeam;
