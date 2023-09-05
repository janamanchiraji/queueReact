import React, { useState, useEffect } from "react";
import "./QueueApp.css";
function QueueApp() {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [maxInputs, setMaxInputs] = useState(5);
  useEffect(() => {
    fetch("https://srp9hp-3001.csb.app/") 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQueue(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const enqueue = () => {
    if (inputValue !== "" && queue.length < maxInputs) {
      fetch("https://srp9hp-3001.csb.app/enqueue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: inputValue }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.message);
          setQueue([...queue, inputValue]);
          setInputValue("");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      if (queue.length >= maxInputs) alert("Queue is full");
    }
  };

  const dequeue = () => {
    fetch("https://srp9hp-3001.csb.app/dequeue")
      .then((response) => response.json())
      .then((data) => {
        if (data.item) {
          const updatedQueue = [...queue];
          updatedQueue.shift();
          setQueue(updatedQueue);
        } else {
          alert("Queue is empty");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const showFirstValue = () => {
    if (queue.length > 0) {
      alert(`First value in queue: ${queue[0]}`);
    } else {
      alert("Queue is empty");
    }
  };

  const checkIsEmpty = () => {
    if (queue.length === 0) {
      alert("Queue is empty");
    } else {
      alert("Queue is not empty");
    }
  };

  const checkIsFull = () => {
    if (queue.length >= maxInputs) {
      alert("Queue is full");
    } else {
      alert("Queue is not full");
    }
  };
  const clearAll = () => {
    if (queue.length === 0) {
      alert("Already Empty");
    } else {
      setQueue([]);
      alert("Queue Cleared");
    }
  };

  const selectedValue = (value) => {
    alert(value);
  };

  return (
    <div>
      <h2>Queue React App</h2>
      <div>
        <input
          className="valueInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <button onClick={enqueue}>Enqueue</button>
        <button onClick={dequeue}>Dequeue</button>
        <button onClick={showFirstValue}>First</button>
        <button onClick={checkIsEmpty}>isEmpty</button>
        <button onClick={checkIsFull}>isFull</button>
        <button onClick={clearAll}>clear All</button>
        <br />
        <label>
          Max Entry:
          <input
            className="inputRestrict"
            type="number"
            value={maxInputs}
            onChange={(e) => setMaxInputs(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <ul>
          {queue.map((item, index) => (
            <li key={index} onClick={() => selectedValue(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QueueApp;
