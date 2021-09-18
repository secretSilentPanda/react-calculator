import React from "react";

export default function Calculator({
  handleClick,
  clear,
  evaluate,
  operator,
  result,
}) {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div
        onClick={(e) => handleClick(e)}
        style={{ height: "500px" }}
        className="w-80 border border-gray-500 shadow-xl flex flex-col items-center justify-between text-xl font-thin"
      >
        <div className="bg-gray-900 text-white justify-end pr-2 py-8 w-full flex items-cecnter text-4xl relative">
          <div className="absolute top-1 right-2 text-sm grid place-items-center">
            {operator}
          </div>
          {result}
        </div>
        <div className="container">
          <button value="clear" onClick={clear} className="container-dark">
            AC
          </button>
          <button className="container-dark">±</button>
          <button className="container-dark">%</button>
          <button
            value="/"
            className="border-b bg-yellow-500 text-white text-2xl"
          >
            ÷
          </button>
        </div>
        <div className="container">
          <button value="7" className="border-brg hover:bg-opacity-70">
            7
          </button>
          <button value="8" className="border-brg">
            8
          </button>
          <button value="9" className="border-brg">
            9
          </button>
          <button
            value="*"
            className="border-b bg-yellow-500 text-white text-2xl"
          >
            ×
          </button>
        </div>
        <div className="container">
          <button value="4" className="border-brg">
            4
          </button>
          <button value="5" className="border-brg">
            5
          </button>
          <button value="6" className="border-brg">
            6
          </button>
          <button
            value="-"
            className="bg-yellow-500 text-white border-b text-2xl"
          >
            -
          </button>
        </div>
        <div className="container">
          <button value="1" className="border-brg">
            1
          </button>
          <button value="2" className="border-brg">
            2
          </button>
          <button value="3" className="border-brg">
            3
          </button>
          <button
            value="+"
            className="bg-yellow-500 text-white border-b text-2xl"
          >
            +
          </button>
        </div>
        <div className="container">
          <div className="flex items-center justify-center h-full w-full">
            <button value="0" className="w-full h-full  border-r bg-gray-100">
              0
            </button>
          </div>
          <div className="flex items-center justify-center h-full w-full">
            <button value="." className=" border-r bg-gray-100 ">
              .
            </button>
            <button
              value="="
              onClick={evaluate}
              className="bg-yellow-500 text-white  text-2xl "
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
