import React from "react";
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

function Chart({ data }) {

    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={data} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="time"
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="cases.total" name="CASES"
                        stroke="blue" activeDot={{ r: 8 }} />
                    <Line dataKey="deaths.total" name="DEATHS"
                        stroke="green" activeDot={{ r: 8 }} />
                    <Line dataKey="tests.total" name="TESTS"
                        stroke="yellow" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;