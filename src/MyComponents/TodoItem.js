import React from "react";

export default function TodoItem({ todo, onDelete }) {
  return (
    <>
      <div className="container my-3">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <a href="/#" className="btn btn-danger" onClick={() => onDelete(todo)}>
          Delete
        </a>
      </div>
    </>
  );
}
