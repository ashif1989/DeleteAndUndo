import "./styles.css";
import { useState } from "react";

export default function App() {
  const names = [
    { cname: "Ashif", id: 1, company: "Dankse IT" },
    { cname: "Lavanya", id: 2, company: "Danske IT" },
    { cname: "Bhasker", id: 3, company: "TCS" }
  ];

  const [delList, setDelList] = useState(names);
  const [undoList, setUndoList] = useState([]);

  let handleDelete = (name, index) => {
    let list = [...delList];
    list.splice(index, 1);
    setDelList(list);
    setUndoList([name, ...undoList]);
  };

  let handleUndo = () => {
    if (undoList.length > 0) {
      let list = undoList[0];
      setDelList([list, ...delList]);
      let addedList = [...undoList];
      addedList.splice(undoList[0], 1);
      setUndoList(addedList);
    }
  };

  return (
    <div className="App">
      <h1>Add & Delete</h1>
      {delList.map((name, index) => (
        <>
          <span key={name.id}>{name.cname}</span>
          <button onClick={() => handleDelete(name, index)}>Delete</button>
          <br />
        </>
      ))}
      <br />
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
}
