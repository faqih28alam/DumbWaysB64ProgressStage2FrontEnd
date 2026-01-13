// App.tsx
import './App.css'
import Card from './components/card'
import Button from './components/button'
import Counter, { CounterProfile } from './components/counter'
import { useState } from 'react';
import TodoItem from './components/todoItem';

function App() {

  //trgger to re-render
  const [counter, setCount] = useState(0)

  //Dummy Data in State
  const [todos, setTodos] = useState([
    {id: 1, text: "Learn React", completed: false}, 
    {id: 2, text: "Learn Typescript", completed: false}
  ]);
  
  const toggleTodo = (id: any) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>To Do List: </h1>
      <Card />
      <p className="read-the-docs">
        Here are things you should do before sun goes down
      </p>
      <Button text={"Add Task"} evetOnClick={()=>{setCount(counter + 1);}} />
      <Button text={"Delete Task"} evetOnClick={()=>{setCount(counter - 1);}} />
      <Button text={"Edit Task"} evetOnClick={()=>{}} />
      <Button text={"Complete Task"} evetOnClick={()=>{}} />
      <Counter count={counter} />
      
      {counter <1 ? (<CounterProfile text={"All task completed"} />) : (<CounterProfile text={"Keep Going"} />) }
      
      <div>
      <h2>My To-Do List</h2>
      <ul>
        {todos.map(item => (
          <TodoItem 
            key={item.id} 
            task={item} 
            onToggle={() => toggleTodo(item.id)} 
          />
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
