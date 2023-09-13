import { useState } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function UseReducerExample() {
    const [tasks, setTasks] = useState(
        [
            {id: 0, text: 'Task 1'},
            {id: 1, text: 'Task 2'},
        ]
    );

    const handleAddTask = text => {
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                text: text,
            },
        ]);
    }


  const handleDeleteTask = taskId => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

    return <div>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
        />
    </div>
}

