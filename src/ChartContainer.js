import React, { useEffect, useState } from "react";
import Chart from "./Chart";

function ChartContainer() {
    const [chart, setChart] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '05b4a1e1d0msh7eefee18e7eb6e6p150558jsn3c0c2db9d4ee',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    useEffect(() => {
        fetch(`https://covid-193.p.rapidapi.com/history?country=usa&day=2022-11-19`, options)
            .then((res) => res.json())
            .then((chart) => {
                console.log(chart.response)
                setChart(chart.response);
            });
    }, []);

    console.log(chart)
    return (
        <div>
            <Chart data={chart} />
        </div>
    );
}
export default ChartContainer;