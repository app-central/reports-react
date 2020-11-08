import React, { useState } from 'react';
import { createPopper } from '@popperjs/core';

import Button from '@material-ui/core/Button';

import './App.css';
import FilterMenu from './components/FilterMenu';
import Login from './components/Login';
import Table from './components/Table';
import TableControls from './components/TableControls';
import TimeSelection from './components/TimeSelection';


const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');


var today2 = new Date();
// console.log(tday);
const today = Math.floor(Date.now() / 86400000);
console.log(today);
const API_KEY = process.env.REACT_APP_DATA_API_KEY;
const PASS_KEY = process.env.REACT_APP_PASS_KEY;
const DEFAULT_NEXT = ["first_launch",
  "app_launch_NATIVE",
  "app_launch_SDK",
  "thumbnail_tap_NATIVE",
  "thumbnail_tap_SDK",
  "PaymentSheetView_appear_NATIVE",
  "PaymentSheetView_appear_NATIVE/app_launch_NATIVE",
  "pop_SDK",
  "pop_SDK/app_launch_SDK",
  "approve_NATIVE",
  "approve_NATIVE/PaymentSheetView_appear_NATIVE",
  "approve_SDK",
  "approve_SDK/pop_SDK",
  "purchase_NATIVE",
  "purchase_NATIVE/approve_NATIVE",
  "purchase_SDK",
  "purchase_SDK/approve_SDK",
  "fail_NATIVE",
  "fail_SDK",
];
const DEFAULT_EVENTS = [
  "setup",
  "pop",
  "approve",
  "purchase",
  "fail",
  "restore",
  "restored",
  "paywall_loaded",
  "dismiss",
  "first_launch"
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
  const handleSetPass = (passowrd) => {
    setPass(passowrd)
  }

/////////////////////// time and date related functions
  const resetTimes = () => {
    settFrom(0);
    settTo(today)
  }
  const handleFrom = (time) => {
    settFrom(time);
    console.log("from: " + time)
  }
  const handleTo = (time) => {
    settTo(time)
    console.log("to: " + time)
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

//////////////////////event handeling functions
  const resetEvents = () => {
    setDisplayedEvents(DEFAULT_EVENTS);
  }
  const clearEvents = () => {
    setDisplayedEvents([]);
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
  const addAllEvents = () => {
    let newArr = [];

// for(let event of events){
//   console.log(event);
// }
    console.log(events);
    for (let i = 0; i < events.length; i++) {
      if (events[i] === "app" || events[i] === "day") {
        continue;
      } else {
        newArr = [...newArr, events[i]];
      }
    }
    setDisplayedEvents(newArr);
  }
  const handleObjectEvents = (eventsArr) => {
    let newArr = []
    for (let i = 0; i < eventsArr.length; i++) {
      newArr = [...newArr, { label: eventsArr[i], value: eventsArr[i] }]
    }
    setEventsObject(newArr);
  }
  const getEvents = (dataArr) => {
    let eventsNames = [];
    for (let i = 0; i < dataArr.length; i++) {

      for (var event in dataArr[i]) {
        let isNew = true;
        for (let j = 0; j < eventsNames.length; j++) {
          if (event === eventsNames[j] || dataArr[i].event === null) {
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

///////////////////// apps handeling functions
  const getApps = (dataArr) => {
    let newApps = [];
    let exists = false;
    for (let i = 0; i < dataArr.length; i++) {
      for (let j = 0; j < newApps.length; j++) {
        if (dataArr[i].app === newApps[j]) {
          exists = true;
          break;
        }

      }
      if (!exists)
        newApps = [...newApps, dataArr[i].app];
      exists = false;
    }
    setApps(newApps);
    setDisplayedApps(newApps);
    updateDispalyedData(dataArr);

  }
  const resetApps = () => {
    setData(ogData);
    getApps(ogData);
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
  const setNextMoviesEvetns = () => {
    setDisplayedEvents(DEFAULT_NEXT);
  }
  const setNextMoviesApp = () => {
    // setDisplayedApps(["oded.Movies"])
    setData([]);
    setDisplayedApps([]);
    addApp("oded.Movies");
  }

///////////////////////// custom Sort functions
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

/////////////// data pulling 
  async function getData() {

    let reportsArr = [];
    setLoading(true);
    let lambdaReport = await getDataFromLambda()
    setLoading(false);
    // console.log(lambdaReport)

    lambdaReport.map((line) => {
      reportsArr = [...reportsArr, line]
    })


    let allData = {1456890:{"oded.Movies":{app_launch:6,pop:9},"com.aspAdblock":{app_launch:3,pop:0}}}

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

  const changeName = (name) => {

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
      ["PaymentSheetView_appear_NATIVE/app_launch_NATIVE"]: "Pop Native / App Launch Native Rate",
      ["pop_SDK/app_launch_SDK"]: "Pop SDK/ app Launch SDK Rate",
      ["approve_NATIVE/PaymentSheetView_appear_NATIVE"]: "Approve Native/ Pop Native Rate",
      ["approve_SDK/pop_SDK"]: "Approve SDK / Pop SDK Rate",
      ["purchase_NATIVE/approve_NATIVE"]: "Purchase Native/ Approve Native Rate",
      ["purchase_SDK/approve_SDK"]: "Purchase SDK/ Approve SDK Rate"



    }

    if (!nameMap[name]) {
      return name;
    } else {
      // return nameMap[n] + " (" + name + ")";
      return nameMap[name];
    }
    return nameMap[name] || name;
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

  const generateNewEvents = (dataArr) => { // make new events for the rates between events
    for (let i = 0; i < dataArr.length; i++) {
      dataArr[i]["PaymentSheetView_appear_NATIVE/app_launch_NATIVE"] = (Math.floor((dataArr[i].PaymentSheetView_appear_NATIVE / dataArr[i].app_launch_NATIVE) * 100)) + "%";
      dataArr[i]["pop_SDK/app_launch_SDK"] = (Math.floor((dataArr[i].pop_SDK / dataArr[i].app_launch_SDK) * 100)) + "%";
      dataArr[i]["approve_NATIVE/PaymentSheetView_appear_NATIVE"] = (Math.floor((dataArr[i].approve / dataArr[i].PaymentSheetView_appear_NATIVE) * 100)) + "%";
      dataArr[i]["approve_SDK/pop_SDK"] = (Math.floor((dataArr[i].approve / dataArr[i].pop_SDK) * 100)) + "%";
      dataArr[i]["purchase_NATIVE/approve_NATIVE"] = (Math.floor((dataArr[i].purchase / dataArr[i].approve_NATIVE) * 100)) + "%";
      dataArr[i]["purchase_SDK/approve_SDK"] = Math.floor((dataArr[i].purchase / dataArr[i].approve_SDK) * 100) + "%";

    }
    setData(dataArr);
  }

  
  return (
    <div className="App">

      <div className="header">
        <h1 onClick={() => { logout() }}> Reports</h1>
        <br /> <br />
        <Login login={login} logout={logout} handleSetPass={handleSetPass} start={start} />

      </div>


      <TimeSelection loading={loading} start={start} resetTimes={resetTimes} handleTo={handleTo} handleFrom={handleFrom} getToday={getToday} />

      <div className="row">
        <div className="col-6">
          <TableControls setNextMoviesEvetns={setNextMoviesEvetns} head={"Events"} resetEvents={resetEvents} clearEvents={clearEvents} addAll={addAllEvents} start={start} loading={loading} removeEvent={removeEvent} addEvent={addEvent} events={events} displayedEvents={displayedEvents} events={events} />

        </div>
        <div className="col-6">
          <TableControls setNextMoviesEvetns={setNextMoviesApp} head={"Apps"} resetEvents={resetApps} clearEvents={clearApps} addAll={resetApps} start={start} loading={loading} removeEvent={removeApp} addEvent={addApp} events={apps} displayedEvents={displayedApps} />

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
