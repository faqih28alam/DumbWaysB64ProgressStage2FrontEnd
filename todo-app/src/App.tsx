// App.tsx
import './App.css'
import Card from './components/card'
import Button from './components/button'
// import { useState } from 'react';


function App() {

  return (
    <>
      <h1>To Do List: </h1>
      <Card />
      <p className="read-the-docs">
        Here are things you should do before sun goes down
      </p>
      <Button text={"Add Task"} />
      <Button text={"Delete Task"} />
      <Button text={"Edit Task"} />
      <Button text={"Complete Task"} />
    </>
  )
}

export default App
