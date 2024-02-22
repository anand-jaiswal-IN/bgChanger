import React from "react";

function App() {
  const colorNames = [
    "red",
    "green",
    "blue",
    "darkmagenta",
    "black",
    "brown",
    "crimson",
    "chocolate",
    "darkslategrey",
    "indigo",
  ];
  return (
    <>
      <h1 className="text-4xl font-bold text-white bg-slate-700 py-3 px-10 rounded-3xl text-center mt-3">
        Background Changer
      </h1>
      <div className="header w-4/5 shadow-2xl py-3 px-5 rounded-2xl mt-5 mx-auto bg-white">
        <div className="btn-group flex justify-around ">
          {colorNames.map((color) => (
            <button
              className="py-2 px-4 rounded-2xl shadow-lg"
              style={{ backgroundColor: color, color: "white" }}
              onClick={() => {
                document.body.style.backgroundColor = color;
              }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
