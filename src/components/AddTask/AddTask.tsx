import { FC } from 'react';
import './style.css';
import { Task } from '../../types/types';

interface Props {
    tasklist: Task[];
    setTasklist: React.Dispatch<React.SetStateAction<Task[]>>;
    task: Task;
    setTask: React.Dispatch<React.SetStateAction<Task>>;
}

export const AddTask: FC<Props> = ({ tasklist, setTasklist, task, setTask }) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (task.id) {
            const date = new Date();

            const updatedTasklist = tasklist.map((td: Task) => (
                td.id === task.id ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : td
            ))

            setTasklist(updatedTasklist)
            setTask({
                id: 0,
                name: '',
                time: '',
            })
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }

            setTasklist([...tasklist, newTask]);
            e.target.task.value = ''
            setTask({
                id: newTask.id,
                name: newTask.name,
                time: newTask.time,
            })
        }
    }


    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="add task" onChange={e => setTask({ ...task, name: e.target.value })} />
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}
