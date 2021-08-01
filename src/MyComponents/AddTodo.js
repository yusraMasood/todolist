import React,{useState} from "react";

export default function AddTodo({ addTodo }){
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const submit = (e) => {
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Descripton cannot be empty");
    }
    else {

    addTodo(title,desc);
    setTitle("");
    setDesc("");
  }}
  return (
    <div className="container">
    <h3>Add a Todo</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="todo" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="desc"
            className="form-control"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
          />
        </div>
        <button type="submit" onClick={submit} className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
