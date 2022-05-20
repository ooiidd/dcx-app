import React, {useEffect, useState} from 'react';
import "../css/Home.css";
import axios from "axios";
import {ChartList} from "./ChartList";
export const Home=()=>{
    function leftPad(value) { if (value >= 10) { return value; } return `0${value}`; }
    let today = new Date();
    let year = today.getFullYear();
    let month = (today.getMonth()+1);
    let date = (today.getDate());
    let hour = leftPad(today.getHours());
    let time = year+'년 '+ month+'월 '+date+'일 '+hour+":00";
    const [chartType,setChartType] = useState("domestic");
    const [chartList, setChartList] = useState([]);
    useEffect(()=>{
        axios({
            method : "get",
            url : `http://localhost:3300/v1/chart/${chartType}`
        }).then((res)=>{
            setChartList(res.data.chartList);
        })
    },[chartType]);
    const chartTypeChange= (chartType) =>{
        setChartType(chartType);
    }
    useEffect(()=>{
        console.log(chartList);
    },[chartList]);
    return(
        <div>
            <h1 className="mid">음악 차트</h1>
            <h4 className="mid">{time}</h4>
            <div className="inline">
                <a onClick={()=>chartTypeChange("domestic")} href="#"><p className= {chartType==="domestic" ? "emphasize" : "black"}>국내</p></a>
                <a onClick={()=>chartTypeChange("overseas")} href="#"><p className= {chartType==="overseas" ? "emphasize" : "black"}>해외</p></a>
            </div>
            <div>
            <ChartList chartList={chartList}>

            </ChartList>
            </div>
        </div>
    )
}