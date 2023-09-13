
export default function TaskList({tasks, onDeleteTask}) {
  return (
    <ul>
        {tasks.map((task) => (
            <li key={task.id}>
                {task.text}
                <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </li>
        ))}
    </ul>
  );
}

