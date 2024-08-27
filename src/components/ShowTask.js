export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleDelete = (id) => {
    const newList = tasklist.filter((task) => task.id !== id);
    setTasklist(newList);
  };

  const handleEdit = (id) => {
    const selectedTask = tasklist.find((task) => task.id === id);
    setTask(selectedTask);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(task.id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(task.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
