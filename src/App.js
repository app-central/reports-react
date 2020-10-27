import React, { useState } from 'react';

import reports from './resources/reports.json'
import './App.css';
import Line from './components/Line';


const today = Math.floor(Date.now() / 86400000);
const API_KEY = process.env.REACT_APP_DATA_API_KEY;
const PASS_KEY = process.env.REACT_APP_PASS_KEY;


function App() {
  
  const [data, setData] = useState([])
  const [order, setOrder] = useState('htl')
  const [dates, setDates] = useState([])
  const [pass, setPass] = useState('')


  const login = () =>{
    if(pass === PASS_KEY){
      getData();
    }else{
      alert("wrong passowrd");
    }
  }

  async function getData() {

    let reportsArr = [];

    let lambdaReport = await getDataFromLambda()

    console.log(lambdaReport)

    lambdaReport.map((line) => {
      reportsArr = [...reportsArr, line]
    })
    console.log(reportsArr);
    sortRep(reportsArr);
    daysCheck();
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

  const daysCheck = () =>{
    let newDates = [];

    let lastDate = 0;
    for (let i = 0; i < data.length; i++) {
      if(data[i].date === lastDate){
        lastDate = data[i].date;
        newDates = [...newDates, i]     
       }else{
        continue;
      }
    }
    console.log("new dates" + newDates);
    setDates(newDates);
  }

  

  const getDate = (day,index) => {
    // for (let i = 0; i < dates.length; i++) {
    //   if(dates[i] == index){
    //     return "";
    //   }
    // }
   if(day === dates){

      return "";
   }else{
     
   }
    


    if ((today - day) === 0){
      return "Today"

    }
    else if (today - day === 1){

      return "Yesterday"

    }
    else {

      return new Date(day * 86400000).toLocaleDateString()

    }
  }

  return (
    <div className="App">
      <h1> Reports</h1>

      <button onClick={() => { login() }}> show reports</button>
      <input onChange={(e) => setPass(e.target.value)} >  </input>

      <table>
        <tr>
          <th></th>
          {
            data.map((line, index) => {
              return (
                <th>{line.app} {getDate(line.day,index)}
                </th>
              )
            })
          }

          <th></th>
        </tr>

        <tr>
          <th>PaymentSheetView_appear_NATIVE</th>
          {
            data.map((line, index) => {
              return (
                <td>{line.PaymentSheetView_appear_NATIVE}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>app_launch_NATIVE</th>
          {
            data.map((line, index) => {
              return (
                <td>{line.app_launch_NATIVE}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>app_launch_SDK</th>
          {
            data.map((line, index) => {
              return (
                <td>{line.app_launch_SDK}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>approve_NATIVE</th>
          {
            data.map((line, index) => {
              return (
                <td>{line.approve_NATIVE}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>approve_SDK</th>
          {
            data.map((line, index) => {
              return (
                <td>{line.approve_SDK}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>fail_NATIVE</th>
          {
            data.map((line, index) => {
              return (
                <td>{line.fail_NATIVE}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>fail_SDK</th>
          {
            data.map((line, index) => {
              return (
                <td>{line.fail_SDK}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>pop_SDK</th>
          {
            data.map((line, index) => {
              return (
                <td>{line.pop_SDK}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>purchase_NATIVE</th>
          {
            data.map((line, index) => {
              return (
                <td>{line.purchase_NATIVE}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>purchase_SDK</th>
          {
            data.map((line, index) => {
              return (
                <td>{line.purchase_SDK}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>first_launch</th>
          {
            data.map((line, index) => {
              return (
                <td>{line.first_launch}</td>
              )
            })
          }
        </tr>

      </table>
      <br />
      <br />

      <br />
      <br />

      {/* 
      <table>
        <tr>
          <th>app (S)</th>
          <th>day (N)</th>
          <th>PaymentSheetView_appear_NATIVE (N)</th>
          <th>app_launch_NATIVE (N)</th>
          <th>app_launch_SDK (N)</th>
          <th>approve_NATIVE (N)</th>
          <th>approve_SDK (N)</th>
          <th>fail_NATIVE (N)</th>
          <th>fail_SDK (N)</th>
          <th>pop_SDK (N)</th>
          <th>purchase_NATIVE (N)</th>
          <th>purchase_SDK (N)</th>
          <th>first_launch (N)</th>
        </tr>

        {
          data.map((line, index) => {
            return (
              <tr>
                <td>{line.app}</td>
                <td>{line["day"]}</td>
                <td>{line.PaymentSheetView_appear_NATIVE}</td>
                <td>{line.app_launch_NATIVE}</td>
                <td>{line.app_launch_SDK}</td>
                <td>{line["approve_NATIVE"]}</td>
                <td>{line["approve_SDK"]}</td>
                <td>{line["fail_NATIVE"]}</td>
                <td>{line["fail_SDK"]}</td>
                <td>{line["pop_SDK"]}</td>
                <td>{line["purchase_NATIVE"]}</td>
                <td>{line["purchase_SDK"]}</td>
                <td>{line["first_launch"]}</td>

              </tr>

            );

          })
        }
      </table> */}

    </div>
  );
}

export default App;
