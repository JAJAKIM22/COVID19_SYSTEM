import React, { useState } from "react";
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

function CovidStat() {
    const [userInput, setUserInput] = useState("");
    const [userDate, setUserDate] = useState("2022-11-16");
    const [data, setData] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '05b4a1e1d0msh7eefee18e7eb6e6p150558jsn3c0c2db9d4ee',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    const handleSearch = (e) => {
        setUserInput(e.target.value);

    };
    const handleDate = (e) => {
        setUserDate(e.target.value);
    };


    const handleSubmit = (props) => {
        props.preventDefault();
        fetch(`https://covid-193.p.rapidapi.com/history?country=${userInput}&day=${userDate}`, options)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.response)
                setData(data.response);
            });
    };

    const pdata = [
        {
            name: 'MongoDb',
            student: 11,
            fees: 120
        },
        {
            name: 'Javascript',
            student: 15,
            fees: 12
        },
        {
            name: 'PHP',
            student: 5,
            fees: 10
        },
        {
            name: 'Java',
            student: 10,
            fees: 5
        },
        {
            name: 'C#',
            student: 9,
            fees: 4
        },
        {
            name: 'C++',
            student: 10,
            fees: 8
        },
    ];


    return (
        <div className="covid">
            <h2>COVID-19 STATISTICS</h2>
            <div className="covidForm">
                <form className="covidForm" onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <input onChange={handleSearch} placeholder="Enter Country Name" />
                        <br />
                    </div>
                    <div class="mb-3">
                        <input type="date" onChange={handleDate} />
                        <br />
                    </div>
                    <button type="submit" class="btn btn-outline-success">Search</button>
                </form>
                <br />
            </div>
            <div>
                {/* Showing the details of the country */}
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Continent</th>
                            <th>Time</th>
                            <th>Active_Cases</th>
                            <th>New_Cases</th>
                            <th>Recovered_Cases</th>
                            <th>Total_Cases</th>
                            <th>Total_Deaths</th>
                            <th>Total_Tests</th>
                            <th>Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((statData, index) => {
                            return (
                                <tr key={index}>
                                    <td>{statData.country} </td>
                                    <td>{statData.continent} </td>
                                    <td>{statData.time} </td>
                                    <td>{statData.cases.active} </td>
                                    <td>{statData.cases.new} </td>
                                    <td>{statData.cases.recovered} </td>
                                    <td>{statData.cases.total} </td>
                                    <td>{statData.deaths.total} </td>
                                    <td>{statData.tests.total} </td>
                                    <td>{statData.population} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart data={pdata} margin={{ right: 300 }}>
                        <CartesianGrid />
                        <XAxis dataKey="name"
                            interval={'preserveStartEnd'} />
                        <YAxis></YAxis>
                        <Legend />
                        <Tooltip />
                        <Line dataKey="student"
                            stroke="blue" activeDot={{ r: 8 }} />
                        <Line dataKey="fees"
                            stroke="green" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default CovidStat;