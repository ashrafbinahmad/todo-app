import React, { useState } from 'react';
import Display from './components/Display';
import Input from './components/Input';
import './App.css';

function App() {
  const [todos, setTodos] = useState<string[]>([])
  return (
    <div className="app">
      <Display todos={todos} />
      <Input onEnteredTodo={(newTodo) => {
        setTodos((previousTodos) =>
          [
            ...previousTodos,
            newTodo
          ]
        )
      }} />
    </div>
  );
}

export default App;
