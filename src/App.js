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

    lambdaReport.map((line) => {
      reportsArr = [...reportsArr, line]
    })
    console.log(reportsArr);
    sortRep(reportsArr);

    setData(reportsArr)
  }

  async function getDataFromLambda() {
    return fetch('https://pqzj791d65.execute-api.us-east-1.amazonaws.com/default/reports-json')
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

  return (
    <div className="App">
      <h1> Reports</h1>

      <button onClick={() => { getData() }}> show reports</button>

      <table>
        <tr>
          <th></th>
          {
            data.map((line, index) => {
              return (
                <th>{line.app} {line.day}</th>
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
