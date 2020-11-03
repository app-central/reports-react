import React, { useState } from 'react';

import './App.css';
import FilterMenu from './components/FilterMenu';
import Login from './components/Login';
import Table from './components/Table';


const today = Math.floor(Date.now() / 86400000);
const API_KEY = process.env.REACT_APP_DATA_API_KEY;
const PASS_KEY = process.env.REACT_APP_PASS_KEY;
const DEFAULT_EVENTS = ["PaymentSheetView_appear_NATIVE","app_launch_NATIVE","app_launch_SDK","approve_NATIVE","approve_SDK","fail_NATIVE","fail_SDK","pop_SDK","purchase_NATIVE","purchase_SDK","first_launch" ];

function App() {

  const [start, setStart] = useState(false)
  const [data, setData] = useState([])
  const [order, setOrder] = useState('htl')
  const [pass, setPass] = useState('')
  const [events, setEvents] = useState([])
  const [displayedEvents , setDisplayedEvents] = useState(DEFAULT_EVENTS)

  const resetEvents = () =>{
    setDisplayedEvents(DEFAULT_EVENTS);
  }
  const clearEvents = () =>{
    setDisplayedEvents([]);
  }

  const changeName = (n) =>{

    let nameMap = {PaymentSheetView_appear_NATIVE:"Pop Native",
                   app_launch_NATIVE:"App Launch Native",
                   app_launch_SDK:"Approve Native",
                   approve_NATIVE:"Approve Native",
                   approve_SDK:"Approve SDK",
                   approve_SDK:"Approve SDK",
                   fail_NATIVE:"Fail Native",
                   fail_SDK:"Fail SDK",
                   pop_SDK:"Pop SDK",
                   purchase_NATIVE:"Purchase Native",
                   purchase_SDK:"Purchase SDK",
                   first_launch:"Fisrt Launch"
                  }

    return nameMap[n] || n;   
  }

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
    // console.log(reportsArr);

    setData(reportsArr);
    getEvents(reportsArr);


  }

  async function getDataFromLambda() {
    return fetch(API_KEY)
      .then(data => data.json())
  }

  const getEvents = (d) => {
    let eventsNames = [];
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
  const addEvent = (event) =>{
  console.log(event);
  for (let i = 0; i < displayedEvents.length; i++) {
    if(displayedEvents[i] === event)
      return;
  }

  setDisplayedEvents([...displayedEvents,event ]);
  }
    return (
    <div className="App">
      <div className="header">
        <h1> Reports</h1>
        <br/> <br/> 
        <Login login={login} logout={logout} handleSetPass={handleSetPass} start={start} />
        
      </div>
      <FilterMenu today={today} start={start} clear={clearEvents}  resetEvents={resetEvents} addEvent={addEvent} events={events}  />

      

      <Table changeName={changeName} data={data} getDate={getDate} start={start}  events={displayedEvents}/>




    </div>
  );
}

export default App;
