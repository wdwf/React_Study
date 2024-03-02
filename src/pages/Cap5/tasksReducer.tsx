type taskProps = {
  id: number;
  text: string;
  done: boolean;
};

function tasksReducer(tasks: taskProps[], action: any) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

// function handleAddTask(text: string) {
//   dispatch({
//     type: "added",
//     id: nextId++,
//     text: text,
//   });
// }

// function handleChangeTask(task: taskProps) {
//   dispatch({
//     type: "changed",
//     task: task,
//   });
// }

// function handleDeleteTask(taskId: number) {
//   dispatch({
//     type: "deleted",
//     id: taskId,
//   });
// }

