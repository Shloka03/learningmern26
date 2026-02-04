import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {
    var ipl=[
        {teamid:1, teamname:"CSK"},
        {teamid:2, teamname:"MI"},
        {teamid:3, teamname:"RCB"},
        {teamid:4, teamname:"DC"},
        {teamid:5, teamname:"RR"},
        {teamid:6, teamname:"SRH"},
        {teamid:7, teamname:"GT"},
        {teamid:8, teamname:"KKR"},
        {teamid:9, teamname:"PK"},
        {teamid:10, teamname:"LSG"}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Teams</h1>
        {
          ipl.map((i) =>{
            return <li>
              <Link to={`/teamdetail/${i.teamname}`}>{i.teamname}</Link>
            </li>
          })
        }
        
    </div>
  )
}
