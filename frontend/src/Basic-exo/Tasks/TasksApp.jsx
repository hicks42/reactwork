import { useState, useEffect } from "react";
import { TasksCount } from "./components/TasksCount/TasksCount";
import { TasksInput } from "./components/TasksInput/TasksInput";
import { TasksList } from "./components/TasksList/TasksList";
import s from "./style.module.css";

export function TasksApp() {
  // const [tasksValue, setTasksValue] = useState("");
  // const [tasksList, setTasksList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // function updateTasksList(task) {
  //   setTasksList({
  //     ...State,
  //   });
  // }

  // useEffect(() => {
  //   setIsLoading(true);
  //   updateTasksList(task);
  // });
  return (
    <>
      <div className={s.tasks_container}>
        <h1>Taches a faire</h1>
        <TasksCount />
        <TasksInput />
        <div>
          <h5>list des taches enregistrées</h5>
          <TasksList />
          <div>
            tache
            <p> bouton effacer</p>
          </div>
        </div>
      </div>
    </>
  );
}
