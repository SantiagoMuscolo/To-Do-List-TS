import { Key } from "react";

export interface TaskListProps {
    tasklist: Task[];
    setTasklist: React.Dispatch<React.SetStateAction<Task[]>>;
    task: Task;
    setTask: React.Dispatch<React.SetStateAction<Task>>;
}

export interface Task {
    id: Key | null | undefined;
    name: string;
    time: string;
}