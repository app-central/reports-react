import React, { useState } from 'react';
import { createPopper } from '@popperjs/core';

import Button from '@material-ui/core/Button';

import './App.css';
import FilterMenu from './components/FilterMenu';
import Login from './components/Login';
import Table from './components/Table';
import TableControls from './components/TableControls';


const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');

var date = new Date('2012.08.10').getTime() / 86400000;
console.log(date);

var today2 = new Date();
// console.log(tday);
const today = Math.floor(Date.now() / 86400000);
console.log(today);
const API_KEY = process.env.REACT_APP_DATA_API_KEY;
const PASS_KEY = process.env.REACT_APP_PASS_KEY;
const DEFAULT_EVENTS = ["first_launch",
  "app_launch_NATIVE",
  "app_launch_SDK",
  "thumbnail_tap_NATIVE",
  "thumbnail_tap_SDK",
  "PaymentSheetView_appear_NATIVE",
  "pop/app_launch_NATIVE",
  "pop_SDK",
  "pop/app_launch_SDK",
  "approve_NATIVE",
  "approve/PaymentSheetView_appear_NATIVE",
  "approve_SDK",
  "approve/pop_SDK",
  "purchase_NATIVE",
  "purchase/approve_NATIVE",
  "purchase_SDK",
  "purchase/approve_SDK",
  "fail_NATIVE",
  "fail_SDK",
];



function App() {

  const [start, setStart] = useState(false)
  const [data, setData] = useState([])
  const [order, setOrder] = useState('htl')
  const [pass, setPass] = useState('')
  const [events, setEvents] = useState([])
  const [displayedEvents, setDisplayedEvents] = useState(DEFAULT_EVENTS)
  const [eventsObject, setEventsObject] = useState([])
  const [loading, setLoading] = useState(false)
  const [apps, setApps] = useState([])
  const [displayedApps, setDisplayedApps] = useState([])
  const [displayedData, setdisplayedData] = useState([])
  const [ogData, setOgData] = useState([])
  const [tFrom, settFrom] = useState(0)
  const [tTo, settTo] = useState(today)


  const generateNewEvents = (d) => {
    for (let i = 0; i < d.length; i++) {
      d[i]["pop/app_launch_NATIVE"] = (Math.floor((d[i].pop / d[i].app_launch_NATIVE) * 100)) + "%";
      d[i]["pop/app_launch_SDK"] = (Math.floor((d[i].pop / d[i].app_launch_SDK) * 100)) + "%";
      d[i]["approve/PaymentSheetView_appear_NATIVE"] = (Math.floor((d[i].approve / d[i].PaymentSheetView_appear_NATIVE) * 100)) + "%";
      d[i]["approve/pop_SDK"] = (Math.floor((d[i].approve / d[i].pop_SDK) * 100)) + "%";
      d[i]["purchase/approve_NATIVE"] = (Math.floor((d[i].purchase / d[i].approve_NATIVE) * 100)) + "%";
      d[i]["purchase/approve_SDK"] = Math.floor((d[i].purchase / d[i].approve_SDK) * 100) + "%";

    }
    setData(d);
  }

  const resetTimes = () => {
    settFrom(0);
    settTo(today)
  }
  const handleFrom = (t) => {
    settFrom(t);
    console.log("from: " + t)
  }
  const handleTo = (t) => {
    settTo(t)
    console.log("to: " + t)
  }

  const getToday = () => {

    let day = today2.getDate().toString();
    if (day.length === 1) {
      day = "0" + day;
    }
    let month = (today2.getMonth() + 1).toString();

    if (month.length === 1) {
      month = "0" + month;
    }

    return today2.getFullYear() + "-" + (month) + "-" + day;
  }

  const resetEvents = () => {
    setDisplayedEvents(DEFAULT_EVENTS);
  }
  const clearEvents = () => {
    setDisplayedEvents([]);
  }
  const getApps = (d) => {
    let newApps = [];
    let exists = false;
    for (let i = 0; i < d.length; i++) {
      for (let j = 0; j < newApps.length; j++) {
        if (d[i].app === newApps[j]) {
          exists = true;
          break;
        }

      }
      if (!exists)
        newApps = [...newApps, d[i].app];
      exists = false;
    }
    setApps(newApps);
    setDisplayedApps(newApps);
    updateDispalyedData(d);

  }
  const resetApps = () => {
    setData(ogData);
    getApps(ogData);
  }
  const updateDispalyedData = () => {

    let newDispData = []
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < displayedApps.length; j++) {
        if (data[i].app === displayedApps[j]) {
          newDispData = [...newDispData, data[i]]
        }
      }
    }
    setdisplayedData(newDispData);
  }
  const removeApp = (app) => {
    let newDispApps = [];
    for (let i = 0; i < displayedApps.length; i++) {
      if (displayedApps[i] === app) {
        continue;
      } else {
        newDispApps = [...newDispApps, displayedApps[i]];
      }
    }
    setDisplayedApps(newDispApps);
    let newData = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].app === app)
        continue;
      else
        newData = [...newData, data[i]];
    }
    setData(newData);
  }
  const clearApps = () => {

    setData([]);
    setDisplayedApps([]);
  }
  const addApp = (app) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].app === app)
        return
    }
    let newData = []
    for (let i = 0; i < data.length; i++) {
      newData = [...newData, data[i]]

    }
    for (let i = 0; i < ogData.length; i++) {
      if (ogData[i].app === app) {
        newData = [...newData, ogData[i]];
      }
    }
    sortRep(newData);

    setData(newData)

    setDisplayedApps([...displayedApps, app]);
  }

  const checkIfChecked = (event) => {
    for (let i = 0; i < displayedEvents.length; i++) {
      if (event === displayedEvents[i])
        return true
    }
    return false;
  }

  const sortByName = () => {
    // displayedEvents.sort();

    displayedEvents.sort(
      function (a, b) {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
      }
    );
    setDisplayedEvents(displayedEvents);
    console.log(displayedEvents);


  }
  const changeName = (n) => {

    let nameMap = {
      PaymentSheetView_appear_NATIVE: "Pop Native",
      app_launch_NATIVE: "App Launch Native",
      app_launch_SDK: "App Launch SDK",
      approve_NATIVE: "Approve Native",
      approve_SDK: "Approve SDK",
      fail_NATIVE: "Fail Native",
      fail_SDK: "Fail SDK",
      pop_SDK: "Pop SDK",
      purchase_NATIVE: "Purchase Native",
      purchase_SDK: "Purchase SDK",
      first_launch: "Fisrt Launch",
      ["pop/app_launch_NATIVE"]: "Pop / App Launch Native",
      ["pop/app_launch_SDK"]: "Pop / app Launch SDK",
      ["approve/PaymentSheetView_appear_NATIVE"]: "Approve / Pop Native",
      ["approve/pop_SDK"]: "Approve / Pop SDK",
      ["purchase/approve_NATIVE"]: "Purchase / Approve Native",
      ["purchase/approve_SDK"]: "Purchase / Approve SDK"



    }

    if (!nameMap[n]) {
      return n;
    } else {
      // return nameMap[n] + " (" + n + ")";
      return nameMap[n];
    }
    return nameMap[n] || n;
  }

  const sortAppByValue = (app) => {
    let tmp = "";
    if (true) {
      for (let j = 0; j < displayedEvents.length; j++) {
        for (let i = 0; i < displayedEvents.length - 1; i++) {
          
          if (app[displayedEvents[i]] < app[displayedEvents[i + 1]] || !app[displayedEvents[i]] || isNaN(app[displayedEvents[i]])) {
            tmp = displayedEvents[i];
            displayedEvents[i] = displayedEvents[i + 1];
            displayedEvents[i + 1] = tmp;
          }
        }
      }
    } else {
      for (let j = 0; j < displayedEvents.length; j++) {
        for (let i = 0; i > displayedEvents.length - 1; i++) {
          if (app[displayedEvents[i]] < app[displayedEvents[i + 1]] || !app[displayedEvents[i + 1]]) {
            tmp = displayedEvents[i];
            displayedEvents[i] = displayedEvents[i + 1];
            displayedEvents[i + 1] = tmp;
          }
        }
      }
    }

    setDisplayedEvents(displayedEvents);
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
    setStart(false);
    setLoading(false);
    setPass("");
  }

  const handleSetPass = (p) => {
    setPass(p)
  }

  async function getData() {

    let reportsArr = [];
    setLoading(true);
    let lambdaReport = await getDataFromLambda()
    setLoading(false);
    // console.log(lambdaReport)

    lambdaReport.map((line) => {
      reportsArr = [...reportsArr, line]
    })
    sortRep(reportsArr);
    // daysCheck();
    // console.log(reportsArr);

    setData(reportsArr);
    setOgData(reportsArr);
    getApps(reportsArr);
    generateNewEvents(reportsArr);

    getEvents(reportsArr);


  }
  async function getDataFromLambda() {
    return fetch(API_KEY)
      .then(data => data.json())
  }
  const handleObjectEvents = (eventsArr) => {
    let newArr = []
    for (let i = 0; i < eventsArr.length; i++) {
      newArr = [...newArr, { label: eventsArr[i], value: eventsArr[i] }]
    }
    setEventsObject(newArr);
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
    handleObjectEvents(eventsNames)
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
  const addEvent = (event) => {
    console.log(event);
    for (let i = 0; i < displayedEvents.length; i++) {
      if (displayedEvents[i] === event)
        return;
    }

    setDisplayedEvents([...displayedEvents, event]);
  }
  const removeEvent = (event) => {
    let newArr = []
    for (let i = 0; i < displayedEvents.length; i++) {
      if (displayedEvents[i] === event)
        continue;
      else
        newArr = [...newArr, displayedEvents[i]];
    }
    setDisplayedEvents(newArr);
  }
  const addAll = () => {
    let newArr = [];
    for (let i = 0; i < events.length; i++) {
      if (events[i] === "app" || events[i] === "day") {
        continue;
      } else {
        newArr = [...newArr, events[i]];
      }
    }
    setDisplayedEvents(newArr);
  }
  return (
    <div className="App">

      <div className="header">
        <h1 onClick={() => { logout() }}> Reports</h1>
        <br /> <br />
        <Login login={login} logout={logout} handleSetPass={handleSetPass} start={start} />

      </div>
      {/* <FilterMenu eventsObject={eventsObject} displayedEvents={displayedEvents} checkIfChecked={checkIfChecked} today={today} start={start} clear={clearEvents} resetEvents={resetEvents} addEvent={addEvent} events={events} />
       */}
{/* 
      <TimeSelection loading={loading} start={start} resetTimes={resetTimes} handleTo={handleTo} handleFrom={handleFrom} getToday={getToday} /> */}

      <div className="row">
        <div className="col-6">
          <TableControls head={"Events"} resetEvents={resetEvents} clearEvents={clearEvents} addAll={addAll} start={start} loading={loading} removeEvent={removeEvent} addEvent={addEvent} events={events} displayedEvents={displayedEvents} events={events} />

        </div>
        <div className="col-6">
          <TableControls head={"Apps"} resetEvents={resetApps} clearEvents={clearApps} addAll={resetApps} start={start} loading={loading} removeEvent={removeApp} addEvent={addApp} events={apps} displayedEvents={displayedApps} />

        </div>
      </div>

      <Table tFrom={tFrom} tTo={tTo} sortByName={sortByName} sortAppEvents={sortAppByValue} loading={loading} changeName={changeName} data={data} getDate={getDate} start={start} events={displayedEvents} />



      <br />
      <br />
      <div>
    
       {
       }

      </div>

    </div>
  );
}

export default App;
