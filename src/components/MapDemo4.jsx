import React from 'react'

export const MapDemo4 = () => {
    var cities = [
        {id : 1, name : "Ahmedabad",pop:800000, AQI : 302},
        {id : 2, name : "Delhi",pop:1000000, AQI : 502},
        {id : 3, name : "Dehradun",pop:700000, AQI : 202}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo4</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>POPULATION</th>
                    <th>AQI</th>
                </tr>
            </thead>
            <tbody>
                {
                    cities.map((city) =>{
                        return <tr>
                            <td>{city.id}</td>
                            <td>{city.name}</td>
                            <td>{city.pop}</td>
                            <id>{city.AQI}</id>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
