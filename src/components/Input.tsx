import React, { useState } from 'react'

interface TodoInputProps {
    onEnteredTodo: (newTodo: string) => void
}

export default function Input({ onEnteredTodo }: TodoInputProps) {
    const [newTodo, setNewTodo] = useState<string>('')
    const inputRef = React.createRef<HTMLInputElement>();
    return (
        <div className='input' >
            <input type='text'
                ref={inputRef}
                value={newTodo}
                onChange={(e) => {

                    setNewTodo(e.target.value)
                }}

                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        console.log("enter clicked");
                        onEnteredTodo(newTodo);
                        setNewTodo('');

                    }
                }}

            />
            <button onClick={() => {
                onEnteredTodo(newTodo)
                setNewTodo(''); // clear the input field
            }}>Add</button>
        </div>
    )
}
