import React, { useState, useEffect } from 'react'
import { ApiCall } from "./services/services"
import { CustomLineChart } from "./lineChart"

export const DailyNumbers = (props) => {
    const [selectState, setSelectState] = useState("KA")
    const [data, setData] = useState([])

    const getDailyNumbers = async () => {
        try {
            let response = await ApiCall("https://api.covid19india.org/v4/min/timeseries.min.json")
            console.log("response for line chart:", response)
            let response2 = await ApiCall("https://api.covid19india.org/v4/min/data.min.json")
            const objToArray = Object.entries(response2)
            const filterArray = objToArray.filter(([key, value]) => key == selectState)
            const arrayToObj = Object.fromEntries(filterArray)
            console.log("filtered array:", arrayToObj[selectState].districts)
            let districts = arrayToObj[selectState].districts
            let data = []
            Object.keys(arrayToObj[selectState].districts).map((key, i) => {
                let obj = {
                    district: key,
                    state: selectState,
                    id: i + 1,
                    ...arrayToObj[selectState].districts[key].total
                }
                data.push(obj)
            })
            console.log("data:", data)
            setData(data)
            // let newState = Object.keys(response2).filter((key)=>{
            //     if(key == selectState){
            //         let array = [{...response2[key]}]
            //         console.log("key:", key, response2[key], array)
            //         return array
            //     }
            //  })
            // console.log("response for newState:", newState)
        } catch (e) {
            console.log("error:", e)
        }
    }

    useEffect(() => {
        getDailyNumbers()
    }, [])

    return (
        <React.Fragment>
            <div className="text-black-50 text-center py-4" style={{fontSize:"20px",fontWeight:"bold"}}>Covid-Status</div>
            <div className="d-flex justify-content-center">
                <CustomLineChart className="px-5" data={data} xDataKey="district" yDataKey="tested" stroke="#bdaece" fill="#8f4bdc" height="400px" width="50%" selectKey="id" xFont={12} yFont={12} yColor="#8f4bdc"/>
                <CustomLineChart data={data} xDataKey="district" yDataKey="confirmed" stroke="#e65858" fill="red" height="400px" width="50%" selectKey="id" xFont={12} yFont={12}/>
            </div>
            <div className="d-flex justify-content-center">
                <CustomLineChart className="px-5" data={data} xDataKey="district" yDataKey="vaccinated" stroke="#a1bed6" fill="#5894c5" height="400px" width="50%" selectKey="id" xFont={12} yFont={12} yColor="#5894c5"/>
                <CustomLineChart data={data} xDataKey="district" yDataKey="recovered" stroke="#a0da9f" fill="#339c31" height="400px" width="50%" selectKey="id" xFont={12} yFont={12} yColor="#339c31" />
            </div>
        </React.Fragment>
    )
}