import "./styles.css";
import { Row, Col, Typography } from "antd";
import { List } from "antd";
import { useState } from "react";

export default function App() {
  const [toDo, setToDo] = useState([
    { id: 1, task: "Task1" },
    { id: 3, task: "Task3" },
    { id: 5, task: "Task5" },
  ]);

  const [inProgress, setInProgress] = useState([{ id: 2, task: "Task2" }]);

  const [completed, setCompleted] = useState([{ id: 4, task: "Task4" }]);

  const handleToDo = (todo) => {
    const removeTask = toDo.filter((item) => {
      return item.id !== todo.id;
    });
    setToDo(removeTask);
    setInProgress([...inProgress, { id: todo.id, task: todo.task }]);
  };
  const handleInProgres = (inprogress) => {
    console.log(inprogress);
    const removeInProgress = inProgress.filter((item) => {
      return item.id !== inprogress.id;
    });
    setInProgress(removeInProgress);
    setCompleted([...completed, { id: inprogress.id, task: inprogress.task }]);
  };
  return (
    <div className="App">
      <Row>
        <Col span={8}>
          <Typography>To Do</Typography>
          <ul>
            {toDo.map((todo) => (
              <li
                key={todo.id}
                onClick={(e) => {
                  handleToDo(todo);
                }}
                style={{ cursor: "pointer" }}
              >
                {todo.task}
              </li>
            ))}
          </ul>
        </Col>
        <Col span={8}>
          <Typography>In Progress</Typography>
          <ul>
            {inProgress.map((inprogress) => (
              <li
                key={inprogress.id}
                onClick={(e) => {
                  handleInProgres(inprogress);
                }}
                style={{ cursor: "pointer" }}
              >
                {inprogress.task}
              </li>
            ))}
          </ul>
        </Col>
        <Col span={8}>
          <Typography>Completed</Typography>
          <ul>
            {completed.map((completed) => (
              <li key={completed.id}>{completed.task}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}
