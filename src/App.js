import React, { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { IoMdAdd, IoIosClose } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  //add task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return alert("Debe ingresar una tarea");
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false,
    };
    setTasks([...tasks, addTask]);
    setInput("");
  };
  //delete task
  const deleteTask = (id) => {
    let filteredTasks = [...tasks].filter((t) => t.id !== id);
    setTasks(filteredTasks);
    console.log("task deleted");
  };
  //alternar el estado "completed"
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };
  const date = new Date();
  // console.log(date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="app">
      <div className="container">
        <h1>
          <FcTodoList></FcTodoList> My Day
        </h1>
        <div className="date">
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()},</p>
          <p>{months[date.getMonth()]}</p>
          <p>{date.getFullYear()}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <IoMdAdd className="icon" onClick={handleSubmit}></IoMdAdd>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a task"
              type="text"
            ></input>
          </div>
        </form>
        <div className="container-tasks">
          {tasks.map((t) => (
            <div
              className={`task-row ${t.completed ? "completed" : ""}`}
              key={t.id}
            >
              <GiCheckMark
                className="icon"
                onClick={() => toggleComplete(t.id)}
              ></GiCheckMark>
              <p>{t.text}</p>
              <IoIosClose
                onClick={() => deleteTask(t.id)}
                className="icon"
              ></IoIosClose>
            </div>
          ))}
        </div>
        <p className="length">
          {tasks < 1 ? "You have no tasks" : `Tasks: ${tasks.length}`}
        </p>
      </div>
    </div>
  );
}

export default App;
