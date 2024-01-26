import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => {
            setToDo(e.target.value);
          }}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value, index) => (
          <div className="todo" key={index}>
            <div className="left">
              <input onChange={(e) => {
                console.log(e.target.checked)
                console.log(value)
                setToDos(toDos.filter((toDo) => {
                  if (toDo.id === value.id) {
                    toDo.status = e.target.checked;
                  }
                  return toDo;
                }))
              }}
                value={value.status} type="checkbox" name="" id="" />
              <p>{value.text}</p>
            </div>
            <div className="right">
              <i onClick={() =>
                  setToDos((prevToDos) =>
                    prevToDos.filter((toDo) => toDo.id !== value.id)
                  )
                }
                className="fas fa-times"
              ></i>
            </div>

          </div>
        ))}
        {toDos.map((toDo) => {
          if (toDo.status) {
            return (<h1 style={{ color: 'yellow' }}>{toDo.text}</h1>)
          }
          return null;
        })
        }
      </div>
    </div>
  );
}

export default App;
