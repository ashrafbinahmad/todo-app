
interface DisplayProps {
    todos: string[]
}

export default function Display({ todos }: DisplayProps) {
    return (
        <div className="display">
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}
