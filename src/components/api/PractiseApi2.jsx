import axios from 'axios'
import React, {useState} from 'react'


export const PractiseApi2 = () => {
    const [users, setusers] = useState([])
    const getUsers = async () => {
    const response = await axios.get("https://dummyjson.com/comments")
    console.log(response)

    setusers(response.data.comments)
  }
  return (
    <div>
        <h1>PractiseApi2</h1>
        <button onClick={getUsers}>GET</button>

      <table
        border="0"
        cellPadding="10"
        style={{
          margin: "20px auto",
          borderCollapse: "collapse",
          border: "2px solid black"
        }}
      >
        <thead>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th style={{ borderRight: "1px solid black" }}>ID</th>
            <th style={{ borderRight: "1px solid black" }}>BODY</th>
            <th style={{ borderRight: "1px solid black" }}>LIKES</th>
            <th>PostId</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return (
                <tr key={user.id} style={{ borderBottom: "1px solid black" }}>
                  <td style={{ borderRight: "1px solid black" }}>{user.id}</td>
                  <td style={{ borderRight: "1px solid black" }}>{user.body}</td>
                  <td style={{ borderRight: "1px solid black" }}>{user.likes}</td>
                  <td>{user.postId}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}
