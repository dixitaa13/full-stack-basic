import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
function App() {
  const [jokes,setjokes] = useState([]);

  useEffect(()=>{
     axios.get('http://localhost:3000/jokes')
     .then((response)=>{
       setjokes(response.data)
     })
     .catch((error)=>{
       console.log(error)
     })
  })
  return (
    <>
      <h1>Dixita</h1>
      <p>Jokes: {jokes.length}</p>


      {
        jokes.map((joke,index)=>{
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        })
      }
    </>
  )
}

export default App
