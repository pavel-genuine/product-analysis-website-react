import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('dash.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])


    return (
      
       
            <div className='dash-board'>
              <div>
              <h5 style={{ color:'#82ca9d'}}>Bar Chart of Investment Vs Revenue Vs Sell</h5>
                <BarChart className='bar' title="Chart of PU x UV" width={300} height={300} data={data}>
                
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              
             <Bar dataKey="sell" stackId="a" fill="#ffc658" />
             <Bar dataKey="investment" stackId="a" fill="#8884d8" />
             <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
             <Legend   style={{ buttom: 0, right: 0 }} />

            </BarChart>
              </div>


            
        <div>
        <h5 style={{color:'#82ca9d'}}>Pie Chart of Investment Vs Revenue Vs Sell</h5>

        <PieChart width={300} height={350}>
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={100} fill="#8884d8" label />

          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#ffc658" label />
        </PieChart>

        </div>


       <div>
       <h5 style={{ color:'#82ca9d'}}>Area Chart of Investment Vs Revenue Vs Sell</h5>

       <AreaChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <Tooltip /> 

          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Legend   style={{ buttom: 0, right: 0 }} />

        </AreaChart>
       </div>
  
            </div>
          



        
    );
};

export default Dashboard;