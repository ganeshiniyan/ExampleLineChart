import React, { PureComponent } from "react";
import {DailyNumbers} from "./component/dailyNumbers"
import "bootstrap/dist/css/bootstrap.min.css"
const data = [
  {
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    id: 1
  },
  {
    name: "B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    id: 2
  },
  {
    name: "C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    id: 3
  },
  {
    name: "D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    id: 4
  },
  {
    name: "E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    id: 5
  },
  {
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    id: 6
  },
  {
    name: "G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    id: 7
  },
];


export const App = () => {
  return(
    <DailyNumbers/>
  )
}
