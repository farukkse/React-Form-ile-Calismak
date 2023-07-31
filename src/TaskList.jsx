import { useEffect, useState } from "react";
import TaskListItem from "./TaskListItem";

function TaskList({ tasks, removeTask, editTask, doneTask, defaultFalse }) {

  const [priority, setPriority] = useState(false)
  const [filteredTasks, setFilteredTask] = useState(tasks)

  function handlePriorityFilter() {
    setPriority(prev => !prev)
  }

  // task bilgisi componente ulasinca filtera esitle
  useEffect(() => {
    setFilteredTask(tasks)
    setPriority(defaultFalse)

  }, [tasks])

  // priority bilgisi degisirse
  useEffect(() => {
    priority ? setFilteredTask(tasks.filter(item => item.priority === priority)) : setFilteredTask(tasks)
  }, [tasks, priority])

  if (tasks.length === 0) {
    return <></>
  }

  return (
    <>
      <div className="p-4 bg-light mb-5 border rounded" style={{overflowY:"scroll",maxHeight:600}}>
        <h4 className="mb-3">Görevler:
          <button onClick={handlePriorityFilter}
            className={`btn btn-sm ${!priority ? "btn-info" : "btn-primary"} float-end`}>
            {
              !priority ? 'Oncelikli Olanlari Goster' : 'Hepsini Goster ...'}</button>
        </h4>
        <ul className="list-group">
          {filteredTasks.map(
            (task) => (
              <TaskListItem key={task.uuid} task={task} editTask={editTask} removeTask={removeTask} doneTask={doneTask} />
            ))}
        </ul>
      </div >
    </>
  );
}

export default TaskList;
