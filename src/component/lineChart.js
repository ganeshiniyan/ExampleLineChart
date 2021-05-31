import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  // CustomizedDot
} from "recharts";

export const CustomLineChart = (props) => {
  const {xDataKey, yDataKey, xFont=15, yFont=15, yColor="red"} = {...props}
  console.log("props:", props)
  const CustomizedDot = (props) => {
    const { cx, cy, stroke, fill, payload, value, data, selectKey="id" } = { ...props };
    // if (payload.visible) {
    if (payload[selectKey] == data.length) {
      return (
        <circle
          className="circle-highligter"
          cx={cx}
          cy={cy}
          r={6}
          stroke={stroke}
          strokeWidth={10}
          fill={fill}
          strokeOpacity= "0.7"
          style={{position:"relative"}}
          >
          </circle>
      );
    } else {
      return("")
    }
  };

  return (
    <div style={{ width: props.width||"100%", height: props.height||"200px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={1000}
          height={300}
          data={props.data}
          margin={{
            top: 5,
            right: 0,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDashoffset="1" />
          <XAxis dataKey={xDataKey} axisLine={false} fontSize={xFont} tickLine={false} dy={10}/>
          <YAxis orientation='right' interval={0} axisLine={false} fontSize={yFont} tickLine={false}/>
          <Tooltip cursor={false} />
          <Legend/>
          <Line
            type="monotone"
            // strokeDasharray="3 3"
            dataKey={yDataKey}
            stroke={yColor}
            strokeWidth="5"
            dot={{
              stroke: "red",
              strokeWidth: 1,
              r: 10,
              fill: "#e65858",
              strokeOpacity: "0.5",
            }}
            dot = {<CustomizedDot data={props.data} {...props}/>}
            activeDot = {<CustomizedDot data={props.data} {...props}/>}
            // dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
