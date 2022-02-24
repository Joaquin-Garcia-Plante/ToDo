import React, { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { IoMdAdd, IoIosClose } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { CgMoreR } from "react-icons/cg";
import { AiOutlineCloseSquare } from "react-icons/ai";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";
import img9 from "./assets/img9.png";
function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [click, setClick] = useState(false);
  const [bg, setBg] = useState(`url(${img1})`);
  const handleClick = () => setClick(!click);
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
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const changeBg = (e) => {
    let id = e.target.id;
    setBg(`url(${images[id]})`);
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
  const containerStyle = {
    backgroundImage: bg,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    // height: "100%",
  };
  return (
    <div style={containerStyle}>
      <div onClick={handleClick}>
        {click ? (
          <AiOutlineCloseSquare className="izq" />
        ) : (
          <CgMoreR className="izq"></CgMoreR>
        )}
      </div>
      <div className={click ? "active" : "off"}>
        <img src={img1} alt="" id="0" onClick={changeBg}></img>
        <img src={img2} alt="" id="1" onClick={changeBg}></img>
        <img src={img3} alt="" id="2" onClick={changeBg}></img>
        <img src={img4} alt="" id="3" onClick={changeBg}></img>
        <img src={img5} alt="" id="4" onClick={changeBg}></img>
        <img src={img6} alt="" id="5" onClick={changeBg}></img>
        <img src={img7} alt="" id="6" onClick={changeBg}></img>
        <img src={img8} alt="" id="7" onClick={changeBg}></img>
        <img src={img9} alt="" id="8" onClick={changeBg}></img>
      </div>
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
    </div>
  );
}

export default App;
