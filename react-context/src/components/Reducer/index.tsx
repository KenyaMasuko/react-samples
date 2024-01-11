import { Title } from "@/components/Title";
import React from "react";

// uncontrolled component vs controlled component
const AddTask: React.FC<{ handleAdd: (title: string) => void }> = React.memo(
  ({ handleAdd }) => {
    const ref = React.useRef<HTMLInputElement>(null);
    console.log("rendered");

    // const [title, setTitle] = React.useState("");

    const handleAddTask = (ref: HTMLInputElement | null) => {
      const title = ref?.value;
      if (!title) return;

      handleAdd(title);
      ref.value = "";
    };

    return (
      <div>
        <input type="text" ref={ref} />
        {/* <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> */}
        <button onClick={() => handleAddTask(ref.current)}>Add</button>
        {/* <button onClick={() => handleAdd(title)}>Add</button> */}
      </div>
    );
  }
);

const TaskList: React.FC<{
  tasks: Task[];
  handleTaskToggle: (id: number) => void;
}> = ({ tasks, handleTaskToggle }) => {
  return (
    <div>
      <ul style={{ paddingLeft: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              listStyle: "none",
              display: "flex",
              gap: "10px",
            }}
          >
            <input type="checkbox" onChange={() => handleTaskToggle(task.id)} />
            {task.done ? "✅" : "❌"}
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

type Task = {
  id: number;
  title: string;
  done: boolean;
};

type Action =
  | ({
      type: "add";
    } & Pick<Task, "title">)
  | ({ type: "toggle" } & Pick<Task, "id">);

const taskReducer = (tasks: Task[], action: Action) => {
  switch (action.type) {
    case "add":
      return [
        ...tasks,
        {
          id: Math.random(),
          title: action.title,
          done: false,
        },
      ];
    case "toggle":
      return tasks.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task
      );
  }
};

const initialState: Task[] = [{ id: 1, title: "Task 1", done: false }];

export const Reducer = () => {
  const [state, dispatch] = React.useReducer(taskReducer, initialState);

  const handleAddTask = React.useCallback((title: string) => {
    dispatch({
      type: "add",
      title,
    });
  }, []);

  const handleToggleTask = React.useCallback((id: number) => {
    dispatch({
      type: "toggle",
      id,
    });
  }, []);

  return (
    <div>
      <Title title="Reducer" />
      <AddTask handleAdd={handleAddTask} />
      <TaskList tasks={state} handleTaskToggle={handleToggleTask} />
    </div>
  );
};
