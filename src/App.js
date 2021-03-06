import React, { useState } from 'react';
import { createPopper } from '@popperjs/core';

import Button from '@material-ui/core/Button';

import './App.css';
// import FilterMenu from './components/FilterMenu';
import Login from './components/Login';
import Table from './components/Table';
import TableControls from './components/TableControls';
import TimeSelection from './components/TimeSelection';
import Header from './components/Header';
import AppleTesting from './components/AppleTesting';
import FacebookTest from './components/FacebookTest';
import Templates from './components/Templates';
// import testUtils from 'react-dom/test-utils';


const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');


var today2 = new Date();
const today = Math.floor(Date.now() / 86400000);
const API_KEY = process.env.REACT_APP_DATA_API_KEY;
const APPLE_API_KEY = process.env.REACT_APP_DATA_APPLE_API_KEY;
const FACEBOOK_API_KEY = process.env.REACT_APP_DATA_FACEBOOK_API_KEY;
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
  "start",
  "setup",
  "pop",
  "approve",
  "purchase",
  "fail",
  "restore",
  "restored",
  "paywall_loaded",
  "dismiss",
  "first_launch",
  "🍏 Free or paid app",
  "🍏 In-App Purchase",
  "🍏 Purchase",
  "🍏 Auto-renewable subscription",
  "🍏 Paid app",
  "🍏 App Bundle",
  "🍏 Subscription",
  "🍏 Redownload",
  "🍏 Redownload (Update)",
  "🍏 Restored In-App Purchase",
  "🍏 Update",



];
//////////////////////// 


const PRODUCT_TYPE_IDENTIFIER = {
  ///https://help.apple.com/app-store-connect/#/dev63c6f4502

  "1": "🍏 Free or paid app",
  "1F": "🍏 Free or paid app",
  "1T": "🍏 Free or paid app",
  "F1": "🍏 Free or paid app",

  "1E": "🍏 Paid app",
  "1EP": "🍏 Paid app",
  "1EU": "🍏 Paid app",


  "1-B": "🍏 App Bundle",
  "F1-B": "🍏 App Bundle",

  "7": "🍏 Update",
  "7F": "🍏 Update",
  "7T": "🍏 Update",
  "F7": "🍏 Update",


  "IA1": "🍏 Purchase",
  "IA1-M": "🍏 Purchase",

  "IA9": "🍏 Subscription",
  "IA9-M": "🍏 Subscription",

  "FI1": "🍏 In-App Purchase",
  "IAC": "🍏 In-App Purchase",
  "IAC-M": "🍏 In-App Purchase",

  "IAY": "🍏 Auto-renewable subscription",
  "IAY-M": "🍏 Auto-renewable subscription",

  "IA3": "🍏 Restored In-App Purchase",

  "3": "🍏 Redownload(Update)",

  "3F": "🍏 Redownload",
  "3T": "🍏 Redownload",
  "F3": "🍏 Redownload"
}

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
  const [hideFilters, setHideFilters] = useState(false)
  const [appleData, setAppleData] = useState(null)
  const [appleData2, setAppleData2] = useState(null)
  const [loadingStatus, setLoadingStatus] = useState("")
  const [appsIdMap, setAppsIdMap] = useState()
  const [facebookData, setFacebookData] = useState()
  const [fbCampaigns, setFbCampaigns] = useState([])
  ///login functions
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
  /////////////// data pulling 
  async function getData() { // pulling data from lambda and apple and arranging it in the states - main function that start everything in the app

    let reportsArr = [];
    setLoading(true);
    setLoadingStatus("Fetching SDK data...");
    let lambdaReport = await getDataFromLambda();
    setLoadingStatus("Fetching Apple data...");
    let appleReport = await getAppleDataFromLambda();
    setLoadingStatus("Fetching Facebook data...");

    // let facebookData = await getDataFromFacebook();
    // setFacebookData(facebookData);
    // getFbApps(facebookData);

    setLoadingStatus("Done!");

    setLoading(false);

    lambdaReport.map((line) => {
      reportsArr = [...reportsArr, line]
    })
    /////////{ handeling with the data from apple
    convertPstDate(reportsArr);
    setAppsIdMap(appleReport.appsId);

    // addFbData(facebookData, reportsArr);

    appleDataToString(dataToArray(appleReport.data), appleReport.appsId);
    appleDataToString(dataToArray(appleReport.data2), appleReport.appsId);
    appleDataToString(dataToArray(appleReport.data3), appleReport.appsId);
    appleDataToString(dataToArray(appleReport.data4), appleReport.appsId);
    appleDataToString(dataToArray(appleReport.data5), appleReport.appsId);
    appleDataToString(dataToArray(appleReport.data6), appleReport.appsId);
    appleDataToString(dataToArray(appleReport.data7), appleReport.appsId);


    addAppleData(appleDataToString(dataToArray(appleReport.data), appleReport.appsId), reportsArr);
    addAppleData(appleDataToString(dataToArray(appleReport.data2), appleReport.appsId), reportsArr);
    addAppleData(appleDataToString(dataToArray(appleReport.data3), appleReport.appsId), reportsArr);
    addAppleData(appleDataToString(dataToArray(appleReport.data4), appleReport.appsId), reportsArr);
    addAppleData(appleDataToString(dataToArray(appleReport.data5), appleReport.appsId), reportsArr);
    addAppleData(appleDataToString(dataToArray(appleReport.data6), appleReport.appsId), reportsArr);
    addAppleData(appleDataToString(dataToArray(appleReport.data7), appleReport.appsId), reportsArr);

    ///////////////////////////////} 
    sortRep(reportsArr);


    getApps(reportsArr);
    generateNewEvents(reportsArr);
    setData(reportsArr);
    setOgData(reportsArr);
    getEvents(reportsArr);
    setAppleData(appleDataToString(dataToArray(appleReport.data), appleReport.appsId));
    setAppleData2(appleDataToString(dataToArray(appleReport.data2), appleReport.appsId));
  }
  async function getDataFromLambda() {
    return fetch(API_KEY)
      .then(data => data.json())


  }
  ///// facebook
  async function getDataFromFacebookApi(next) {
    if (next != false) {
      return fetch(next)
        .then(data => data.json())
    } else {
      return fetch(FACEBOOK_API_KEY)
        .then(data => data.json())
    }


  }
  async function getDataFromFacebook() {
    let next = false;
    let data = [];
    let tmp;
    tmp = await getDataFromFacebookApi(false);
    data = [...data, ...tmp.data];
    console.log("test fb one", data, tmp.paginig);
    next = tmp.paging.next;


    while (next) {
      tmp = await getDataFromFacebookApi(next);
      data = [...data, ...tmp.data];
      next = tmp.paging.next
    }




    console.log("test fb two", data);
    return data;
  }
  const getFbApps = (data) => {
    let fbApps = [];
    let exist = false;
    for (let i = 0; i < data.length; i++) {
      exist = false
      for (let j = 0; j < fbApps.length; j++) {
        if (fbApps[j] === data[i].campaign_name) {
          exist = true;
        }
      }
      if (!exist)
        fbApps = [...fbApps, data[i].campaign_name]

    }
    setFbCampaigns(fbApps);
  }
  const convertFacebookDate = (fbDate) => { /// change the date from apple to unix time like the rest of the reports data
    return Math.floor(new Date(fbDate) / 86400000);
  }
  const addFbData = (data, reports) => {
    for (let i = 0; i < data.length; i++) {
      // "🔵 cost",
      // "🔵 impressions",
      // "🔵 clicks",
      // "🔵 ctr",
      // "🔵 installs",
      // "🔵 spi",
      let ctr = parseFloat(data[i].ctr);
      let cpi = parseFloat(getCPI(data[i].cost_per_action_type));
      if (cpi) {
        cpi = cpi.toFixed(2);
      }
      if (ctr) {
        ctr = ctr.toFixed(2);
      }
      reports.push({
        app: data[i].campaign_name,
        day: convertFacebookDate(data[i].date_start),

        "🔵 Cost": data[i].spend + "₪",
        "🔵 Impressions": data[i].impressions,
        "🔵 Clicks": data[i].clicks,
        "🔵 CTR": ctr + "%",
        "🔵 Installs": getInstalls(data[i].actions),
        "🔵 CPI": cpi + "₪"
      })
    }
  }
  const getInstalls = (action) => {

    for (let i = 0; i < action.length; i++) {
      if (action[i].action_type === "mobile_app_install")
        return action[i].value
    }
    return "";
  }
  const getCPI = (cpat) => {
    for (let i = 0; i < cpat.length; i++) {
      if (cpat[i].action_type === "omni_app_install")
        return cpat[i].value
    }
    return "";
  }
  ///// apple 
  async function getAppleDataFromLambda() {
    return fetch(APPLE_API_KEY)
      .then(data => data.json())

  }
  const appleDataToString = (data, idMap) => {  /// change the apple identifire nuber to the bundle id, and product identifier to its description
    let ptyIndex = -1;
    let appleIdentifierIndex = -1;
    for (let i = 0; i < data[0].length; i++) {
      if (data[0][i] === "Product Type Identifier") {
        ptyIndex = i;
      }
      if (data[0][i] === "Apple Identifier") {
        appleIdentifierIndex = i;
      }
    }
    for (const key in idMap) { /// some values are integers , converting them to string
      if (!isNaN(idMap[key])) {
        idMap[key] = (idMap[key]).toString();
      }
    }

    let changed = false;
    let notChanged = [];
    for (let i = 1; i < data.length; i++) {
      changed = false;
      for (const key in idMap) {
        if (idMap[key] === data[i][appleIdentifierIndex]) {
          data[i][appleIdentifierIndex] = key;
          changed = true;
          continue;
        }
      }
      if (!changed) {
        notChanged.push(i);
        continue;
      }
    }
    for (let i = 0; i < notChanged.length; i++) {
      let tmp = getAppNameBySKU(data, notChanged[i], appleIdentifierIndex);
      if (tmp != undefined) {
        data[notChanged[i]][appleIdentifierIndex] = tmp;
      }
    }
    for (let i = 0; i < data.length; i++) {

      for (const key in PRODUCT_TYPE_IDENTIFIER) {
        if (key === data[i][ptyIndex]) {
          data[i][ptyIndex] = PRODUCT_TYPE_IDENTIFIER[key];
        }
      }
    }
    // setAppleData(data);
    return data;
  }
  const getAppNameBySKU = (data, index, appleIdentifierIndex) => { /// gets the bundle id from the parent of the event 
    let skuIndex = -1;
    let parentIdentifierIndex = -1;
    for (let i = 0; i < data[0].length; i++) {
      if (data[0][i] === "SKU")
        skuIndex = i;
      if (data[0][i] === "Parent Identifier")
        parentIdentifierIndex = i;

    }
    let parentName = data[index][parentIdentifierIndex]
    for (let i = 0; i < data.length; i++) {
      if (data[i][skuIndex] === parentName && data[i][skuIndex] != "") {
        console.log("sku:  " + data[i][appleIdentifierIndex]);
        return data[i][appleIdentifierIndex];
      }
    }
    return;
  }
  const addAppleData = (appleData, reports) => { /// add the apple data with the rest od the report
    if (!appleData) {
      return;
    }
    let dateIndex = -1;
    let nameIndex = -1;
    let eventIndex = -1;
    let unitsIndex = -1;
    let deviceIndex = -1;
    let priceIndex = -1;
    let currencyIndex = -1;
    // let newarr = appleData;
    // let dataCollected = [];
    for (let i = 0; i < appleData[0].length; i++) {
      if (appleData[0][i] === "Apple Identifier") {
        nameIndex = i;
      } if (appleData[0][i] === "Units") {
        unitsIndex = i;
      } if (appleData[0][i] === "Product Type Identifier") {
        eventIndex = i;
      } if (appleData[0][i] === "Begin Date") {
        dateIndex = i;
      } if (appleData[0][i] === "Customer Price") {
        priceIndex = i;
      } if (appleData[0][i] === "Currency of Proceeds") {
        currencyIndex = i;
      } if (appleData[0][i] === "Device") {
        deviceIndex = i;
      }
    }

    let used = false;
    for (let i = 1; i < appleData.length; i++) {
      used = false;

      for (let j = 0; j < reports.length; j++) {

        if (reports[j].day === convertAppleDate(appleData[i][dateIndex]) && reports[j].app === appleData[i][nameIndex]) {
          if (reports[j][appleData[i][eventIndex]]) {
            let val = parseInt(appleData[i][unitsIndex]) + parseInt(reports[j][appleData[i][eventIndex]]);
            reports[j][appleData[i][eventIndex]] = val;
          } else {
            reports[j][appleData[i][eventIndex]] = parseInt(appleData[i][unitsIndex]);

          }
          used = true;

        }
      }


      if (!used) { /// if the same app in the same day wasnt fount add new object to data with apple data
        reports.push({ app: appleData[i][nameIndex], day: convertAppleDate(appleData[i][dateIndex]), [appleData[i][eventIndex].toString()]: appleData[i][unitsIndex] });

      }
    }

  }
  const convertAppleDate = (appleDate) => { /// change the date from apple to unix time like the rest of the reports data
    let index = 0;
    let datearr = []
    for (let i = 0; i < appleDate.length; i++) {
      if (appleDate[i] === "/") {
        datearr.push(parseInt(appleDate.substr(index, i - index), 10));

        index = i + 1;
      }
      if (i === appleDate.length - 1) {
        datearr.push(appleDate.substr(index, i));
      }
    }
    return Math.floor(new Date(datearr[2], datearr[0] - 1, datearr[1]) / 86400000) + 1;
  }
  const dataToArray = (d) => { ///convert the tsv string to a 2d array 

    let bigArr = [];
    let counter = 0;
    let arrLine = [];
    let startIndex = 0;
    let isSlash = false;

    for (let i = 0; i < d.length; i++) {
      if (d[i] === "\t") {
        arrLine.push(d.substr(startIndex, i - startIndex));

        startIndex = i + 1;
        isSlash = false;
        continue;
      }
      if (d[i] === "\n") {
        arrLine.push(d.substr(startIndex, i - startIndex));
        bigArr[counter] = arrLine;
        arrLine = [];
        startIndex = i + 1;
        isSlash = false;
        counter++
        continue

      }
    }
    console.log("res" + bigArr.length);
    return bigArr;
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
  const setUnityEvents = () => { // handler to the unity event button
    setDisplayedEvents(["start", "🍏 Free or paid app", "🍏 Subscription"]);
  }
  const setFBEvents = () => { // handler to the unity event button
    setDisplayedEvents(["🔵 Cost", "🔵 Impressions", "🔵 Clicks", "🔵 CTR", "🔵 Installs", "🔵 CPI",
    ]);
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
  const setFBapps = () => {
    setData([]);
    setDisplayedApps([]);
    let newData = []

    for (let j = 0; j < fbCampaigns.length; j++) {

      for (let i = 0; i < ogData.length; i++) {
        if (ogData[i].app === fbCampaigns[j]) {
          newData = [...newData, ogData[i]];
        }
      }
    }

    sortRep(newData);

    setData(newData)

    setDisplayedApps([...fbCampaigns]);
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
    tmp.substring(1, 3);
    for (let j = 0; j < displayedEvents.length; j++) {
      for (let i = 0; i < displayedEvents.length - 1; i++) {

        if (app[displayedEvents[i]] < app[displayedEvents[i + 1]] || !app[displayedEvents[i]] || isNaN(app[displayedEvents[i]])) {
          tmp = displayedEvents[i];
          displayedEvents[i] = displayedEvents[i + 1];
          displayedEvents[i + 1] = tmp;
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
  const convertPstDate = (data) => {
    for (let i = 0; i < data.length; i++) {
      data[i].day = convertTime(data[i].day);
      console.log(data[i].day + " to: " + convertTime(data[i].day));
    }
  }
  const convertTime = (date) => {
    let index = 0;
    let datearr = []
    for (let i = 0; i < date.length; i++) {
      if (date[i] === "-") {
        datearr.push(parseInt(date.substr(index, i - index), 10));

        index = i + 1;
      }
      if (i === date.length - 1) {
        datearr.push(date.substr(index, i));
      }
    }
    return Math.floor(new Date(datearr[0], datearr[1] - 1, datearr[2]) / 86400000) + 1;
    new Date()
  }


  ////////////////////////////
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
  //////////////////

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

      <Header logout={logout} start={start} loading={loading} />
      <br /> <br />
      <Login login={login} logout={logout} handleSetPass={handleSetPass} start={start} />


      <TimeSelection hide={hideFilters} loading={loading} start={start} resetTimes={resetTimes} handleTo={handleTo} handleFrom={handleFrom} getToday={getToday} />

      <div className="row">
        <Templates resetEvents={resetEvents} resetApps={resetApps} setFBEvents={setFBEvents} setFBapps={setFBapps} start={start} loading={loading} />
      </div>
      <div className="row">

        <div className="col-6">
          <TableControls setFBEvents={setFBEvents} setUnityEvents={setUnityEvents} hide={hideFilters} setNextMoviesEvetns={setNextMoviesEvetns} head={"Events"} resetEvents={resetEvents} clearEvents={clearEvents} addAll={addAllEvents} start={start} loading={loading} removeEvent={removeEvent} addEvent={addEvent} events={events} displayedEvents={displayedEvents} events={events} />

        </div>
        <div className="col-6">
          <TableControls setFBapps={setFBapps} hide={hideFilters} setNextMoviesEvetns={setNextMoviesApp} head={"Apps"} resetEvents={resetApps} clearEvents={clearApps} addAll={resetApps} start={start} loading={loading} removeEvent={removeApp} addEvent={addApp} events={apps} displayedEvents={displayedApps} />

        </div>
      </div>

      <Table loadingStatus={loadingStatus} tFrom={tFrom} tTo={tTo} sortByName={sortByName} sortAppEvents={sortAppByValue} loading={loading} changeName={changeName} data={data} getDate={getDate} start={start} events={displayedEvents} />



      <br />
      <br />
      {/* <AppleTesting idmap={PRODUCT_TYPE_IDENTIFIER} appleData={appleData} start={start} loading={loading} /> */}
      {/* <AppleTesting idmap={PRODUCT_TYPE_IDENTIFIER} appleData={appleData2} start={start} loading={loading} /> */}

      {/* <FacebookTest facebookData={facebookData} /> */}
    </div>
  );
}

export default App;
