import React from "react";

export default function TodoItem({ todo, onDelete }) {
  return (
    <>
      <div className="container my-3">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      </div>
      <hr/>
    </>
  );
}
