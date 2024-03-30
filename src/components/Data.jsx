import React, { useEffect, useState } from 'react'
import './Data.css'


function Data() {
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch("veri.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            })
    }, []);
  return (
    <>
    <br />
    <div className='row row-cols-1 '>
        {data.map(item => (
            <div key={item.id} className="card-wifi1">
                
                    <h2 className='wifi'>{item.adi}</h2>
               
             
            </div>
        ))}
    </div>

</>
  )
}

export default Data





