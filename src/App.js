import React, { useState } from 'react';

import './App.css';
import Login from './components/Login';
import Table from './components/Table';


const today = Math.floor(Date.now() / 86400000);
const API_KEY = process.env.REACT_APP_DATA_API_KEY;
const PASS_KEY = process.env.REACT_APP_PASS_KEY;


function App() {

  const [start, setStart] = useState(false)
  const [data, setData] = useState([])
  const [order, setOrder] = useState('htl')
  // const [dates, setDates] = useState([])
  const [pass, setPass] = useState('')


  const login = () => {
    if (pass === PASS_KEY) {
      getData();
      setStart(true);
    } else {
      alert("wrong passowrd");
    }
  }
  const logout = () =>{
    setStart(false)
    setPass("");
  }

  const handleSetPass = (p) =>{
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
    setData(reportsArr);


  }

  async function getDataFromLambda() {
    return fetch(API_KEY)
      .then(data => data.json())
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

  // const daysCheck = () =>{
  //   let newDates = [];

  //   let lastDate = 0;
  //   for (let i = 0; i < data.length; i++) {
  //     if(data[i].date === lastDate){
  //       lastDate = data[i].date;
  //       newDates = [...newDates, i]     
  //      }else{
  //       continue;
  //     }
  //   }
  //   setDates(newDates);
  // }



  const getDate = (day, index) => {
    // for (let i = 0; i < dates.length; i++) {
    //   if(dates[i] == index){
    //     return "";
    //   }
    // }
    //  if(day === dates){

    //     return "";
    //  }else{

    //  }



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
      <h1> Reports</h1>
     <Login login={login} logout={logout} handleSetPass={handleSetPass} start={start} />

      <br />
      <br />

        <Table data={data} getDate={getDate}  start={start} />
     

      
     
    </div>
  );
}

export default App;
