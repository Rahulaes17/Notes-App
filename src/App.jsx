import { useState } from "react";
import { Trash } from 'lucide-react';

const App = () => {

  const[heading,setHeading] = useState('');
  const[details,setDetails] = useState('');
  const[task,setTask] = useState([]);


  const noteHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({heading,details});
    setTask(copyTask)
    console.log(task)

    setDetails('');
    setHeading('');
  }

  const deleteTask = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }

  return (
    <div className="bg-gray-700 h-screen text-white p-15 lg:flex">

      <form
        onSubmit={(e) => {
          noteHandler(e);
        }}
        className="flex flex-col gap-6 lg:w-1/2">
        <h1 className="items-start  text-7xl font-semibold text-#F3F4F6 my-10">
          My Notes
        </h1>
        <input
          type="text"
          placeholder="Heading"
          className="px-5 py-2 border-4 rounded-xl w-2/3 font-medium outline-none bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value)
          }}
        />
        <textarea
          type="text"
          placeholder="Start writing"
          className="px-5 py-2 border-4 rounded-xl w-2/3 min-h-45 font-medium outline-none bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button className="active:scale-95 border-4 rounded-xl px-5 py-3  w-1/3 bg-indigo-500 hover:bg-indigo-600 text-#FFFFFF my-15 outline-none font-medium border-transparent">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 p-10">
        <h1 className="items-start  text-7xl font-semibold text-#F3F4F6 ">Recent Notes</h1>
        <div className="flex flex-wrap gap-6 mt-10  overflow-auto">
          {task.map(function (elem, idx){
            return <div 
            key={idx} 
            className="bg-[url('https://i.pinimg.com/736x/7d/6e/6b/7d6e6b1ec62f7d6043e1b5399d530728.jpg')] bg-cover h-50 w-40 rounded-2xl overflow-auto flex flex-col justify-between  relative pt-7 pb-4 px-5 text-gray-200">
              <div>
              <h3 className="font-bold leading-tight text-xl">{elem.heading}</h3>
              <p className="leading-tight font-medium text-gray-400 mt-3">{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteTask(idx);
              }} className="#94A3B8 rounded py-1 px-2 text-white active:scale-95 absolute bottom-4 right-4 hover:text-red-400"><Trash /></button>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default App
