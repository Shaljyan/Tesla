import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart() {

    const data = [
        {
          name: 'A',
          "Active User": 200,
          pv: 800,
          amt: 2400,
        }, 
        {
          name: 'B',
          "Active User": 8000,
          pv: 6000,
          amt: 2210,
        },
        {
          name: 'C',
          "Active User": 6000,
          pv: 2500,
          amt: 2290,
        },
        {
          name: 'Page D',
          "Active User": 500,
          pv: 6780,
          amt: 2000,
        },
        {
            name: 'E',
            "Active User": 8500,
            pv: 800,
            amt: 2400,
          }, 
          {
            name: 'F',
            "Active User": 8000,
            pv: 6000,
            amt: 2210,
          },
         

      ];


  return (
    <div className='chart'>
        <h3 className='chartTitle'>Media Staats</h3>
        <ResponsiveContainer aspect={5 / 1 } >
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="black" />
                <Line type="monotone" dataKey="Active User" stroke="rgba(0, 255, 145, 0.8)" />
                <Line type="monotone" dataKey="pv" stroke="rgba(0, 0, 255, 0.8)" />
            
            </LineChart>
        </ResponsiveContainer>
        </div>
  )
}
