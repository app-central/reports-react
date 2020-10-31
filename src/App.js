import React, { useState } from 'react';

import './App.css';
import FilterMenu from './components/FilterMenu';
import Login from './components/Login';
import Table from './components/Table';


const today = Math.floor(Date.now() / 86400000);
const API_KEY = process.env.REACT_APP_DATA_API_KEY;
const PASS_KEY = process.env.REACT_APP_PASS_KEY;


function App() {

  const [start, setStart] = useState(false)
  const [data, setData] = useState([])
  const [order, setOrder] = useState('htl')
  const [pass, setPass] = useState('')
  const [events, setEvents] = useState([])


  const login = () => {
    if (pass === PASS_KEY) {
      getData();
      setStart(true);
    } else {
      alert("wrong passowrd");
    }
  }
  const logout = () => {
    setStart(false)
    setPass("");
  }

  const handleSetPass = (p) => {
    setPass(p)
  }

  async function getData() {

    let reportsArr = [];

    let lambdaReport = await getDataFromLambda()

    // console.log(lambdaReport)

    lambdaReport.map((line) => {
      reportsArr = [...reportsArr, line]
    })
    sortRep(reportsArr);
    // daysCheck();
    console.log(reportsArr);

    setData(reportsArr);
    getEvents(reportsArr);


  }

  async function getDataFromLambda() {
    return fetch(API_KEY)
      .then(data => data.json())
  }

  const getEvents = (d) => {
    let eventsNames = [];
    console.log("-----test----" + d.length);
    for (let i = 0; i < d.length; i++) {

      for (var event in d[i]) {
        let isNew = true;
        for (let j = 0; j < eventsNames.length; j++) {
          if (event === eventsNames[j] || d[i].event === null) {
            isNew = false;
          }
        }
        if (isNew) {
          eventsNames = [...eventsNames, event];
        }
      }
    }
    eventsNames.sort();
    console.log(eventsNames);
    setEvents(eventsNames);

  }

  function sortRep(arr) {
    if (order === "lth") {
      arr.sort((day1, day2) => {
        if (day1.day < day2.day)
          return -1;
        if (day1.day > day2.day)
          return 1;
      });
    } else if (order === "htl") {
      arr.sort((day1, day2) => {
        if (day1.day > day2.day)
          return -1;
        if (day1.day < day2.day)
          return 1;
      });
    }

  }

  const getDate = (day, index) => {

    if ((today - day) === 0) {
      return "Today"
    }
    else if (today - day === 1) {
      return "Yesterday"
    }
    else {
      return new Date(day * 86400000).toLocaleDateString()
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1> Reports</h1>
        <Login login={login} logout={logout} handleSetPass={handleSetPass} start={start} />
        
      </div>
      <br />
      <br />

      <Table data={data} getDate={getDate} start={start} />

      <FilterMenu events={events} />



    </div>
  );
}

export default App;
