import React, { useEffect, useState } from 'react';
import './TrendCard.css'
import {TrendData} from '../../Data/TrendData.js'
import { getTrends } from '../../api/TrendRequest'

const TrendCard = () => {
    const [trends, setTrends] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getTrends();
          setTrends(response.data); // Assuming the data is in the `data` property of the response
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching trends:', error);
        }
      };
  
      fetchData();
    }, []);
    console.log('Trends:', trends);
  return (
   <div className="TrendCard">
       <h3>Persona Peaks : Trendsetter Tags </h3>
       <ul>
        {Array.isArray(trends) &&
          trends.map((item, index) => (
            <span key={index}>{item}<br/></span>
          ))}
      </ul>
        
   </div>
  )
}

export default TrendCard
