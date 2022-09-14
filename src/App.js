import React, { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";

function App() {
  const [filterList, setFilterList] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    setFilterList(event.target.value);
    console.log(filterList);
  };

  const listofdata = () => {
    setData((olditems) => {
      return [...olditems, filterList];
    });
    setFilterList("");
  };

  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-5 text-center mt-2">
          <div className="card">
            <h3 className="title">TODOS</h3>
            <form>
              <input
                className="form-control"
                placeholder="E.g. Get the juice"
                id="first"
                value={filterList}
                onChange={handleSubmit}
              />
              <button type="button" className="add-btn" onClick={listofdata}>
                Submit
              </button>
            </form>
            <div className="todo-list">
              {data.map((item, index) => {
                return <Todolist key={index} text={item}></Todolist>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
