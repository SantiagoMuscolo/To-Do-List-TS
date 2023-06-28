import { FC, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import './style.css';
import { Task } from "../../types/types";

interface Props {
    tasklist: Task[];
    setTasklist: React.Dispatch<React.SetStateAction<Task[]>>;
    task: Task;
    setTask: React.Dispatch<React.SetStateAction<Task>>;
}

export const ShowTask: FC<Props> = ({ tasklist, setTasklist, setTask }) => {

    const handleDelete = (id: Key | null | undefined) => {
        const updatedTasklist = tasklist.filter((task: Task) => task.id !== id);
        setTasklist(updatedTasklist);
    }

    const handleEdit = (id: Key | null | undefined) => {
        const updatedTasklist = tasklist.find((task: Task) => task.id === id)
        if (updatedTasklist) {
            setTask(updatedTasklist);
        }
    }


    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">To Do</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <button className="clearAll" onClick={() => setTasklist([])}>Clear All</button>
            </div>
            <ul>
                {tasklist.map((task: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; time: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (<li key={task.id}>
                    <p>
                        <span className="name">{task.name}</span>
                        <span className="time">{task.time}</span>
                    </p>
                    <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
                    <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
                </li>))}
            </ul>
        </section>
    )
}
