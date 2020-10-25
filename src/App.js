import React, { useState } from 'react';

import reports from './resources/reports.json'
import './App.css';
import Line from './components/Line';



function App() {

  const [data, setData] = useState([1, 2, 3, 4])
  const [order, setOrder] = useState('htl')

  async function getData() {
    let reportsArr = [];

    let lambdaReport = await getDataFromLambda()

    console.log(lambdaReport)

    reports.map((line) => {
      reportsArr = [...reportsArr, line]
    })
    console.log(reportsArr);
    sortRep(reportsArr);

    setData(reportsArr)
  }

  async function getDataFromLambda(){
    return fetch('https://pqzj791d65.execute-api.us-east-1.amazonaws.com/default/reports-json')
    .then(data => data.json())
  }

  function sortRep(arr) {
    if(order === "lth"){
      arr.sort((day1, day2) => {
        if (day1["day (N)"] < day2["day (N)"])
          return -1;
        if (day1["day (N)"] > day2["day (N)"])
          return 1;
      });  
    }else if(order === "htl"){
      arr.sort((day1, day2) => {
        if (day1["day (N)"] > day2["day (N)"])
          return -1;
        if (day1["day (N)"] < day2["day (N)"])
          return 1;
      });  
    }
    
  }

  return (
    <div className="App">
      <h1> Reports</h1>
      
      <button onClick={() => { getData() }}> show reports</button>
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
                <td>{line["app (S)"]}</td>
                <td>{line["day (N)"]}</td>
                <td>{line["PaymentSheetView_appear_NATIVE (N)"]}</td>
                <td>{line["app_launch_NATIVE (N)"]}</td>
                <td>{line["app_launch_SDK (N)"]}</td>
                <td>{line["approve_NATIVE (N)"]}</td>
                <td>{line["approve_SDK (N)"]}</td>
                <td>{line["fail_NATIVE (N)"]}</td>
                <td>{line["fail_SDK (N)"]}</td>
                <td>{line["pop_SDK (N)"]}</td>
                <td>{line["purchase_NATIVE (N)"]}</td>
                <td>{line["purchase_SDK (N)"]}</td>
                <td>{line["first_launch (N)"]}</td>

              </tr>

            );

          })
        }
      </table>

    </div>
  );
}

export default App;
