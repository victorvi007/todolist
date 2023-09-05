import './assets/fontawesome/css/all.css'
import './App.css';
import Task from './Task'
import {useState} from 'react';

function App() {
  const [textInput,setTextInput] = useState('');
  const [todoArray,setTodoArray] = useState([]);
  const [groupFilter,setGroupFilter] = useState('all');

  const setAsObject = (e)=>{
    const todoData = {
      id:(todoArray.length === 0)?1 : todoArray[todoArray.length-1].id +1,
      data:e.target.value,
      status:false,
    }
    setTextInput(todoData)
  }

  const append = ()=>{
  
    if(textInput.length !== 0){
      setTodoArray([...todoArray,textInput])
      }else{
        setTodoArray([textInput])
      }
  }

  const completed = (id)=>{
    setTodoArray(
    todoArray.map((data)=>{
        if(data.id === id){
         return {...data,status:!data.status};
        }else{
          return data;
        }
        
      })
      )
  }

  const deleteTask = (id)=>{
    setTodoArray(todoArray.filter((data)=>(data.id !== id)) )
  }
  return (
    <div className="container">
           <div className="clip-board">
            <div className="header">
                <h1>Todo Check List</h1>
                <h6>things to do today</h6>
                <div className="show">
                   <input type="text"   className="addBox" onChange={(e)=>setAsObject(e)}  />
                   <button className="addBtn" onClick={append}> Add </button>
                </div>
                <div className="select">
                    <select name="" onChange ={(e)=>setGroupFilter(e.target.value)} className="selector">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
            <div className="list" id="list">
              {(groupFilter === 'all') && todoArray.map((data,key)=><Task data={data.data} status={data.status} id={data.id} completed={completed} deleteTask={deleteTask} key={key}/>)}
              {(groupFilter === 'completed') && todoArray.map((data,key)=>
                (data.status) && <Task data={data.data} status={data.status} id={data.id} completed={completed} deleteTask={deleteTask} key={key}/> 
              )}
              {(groupFilter === 'uncompleted') && todoArray.map((data,key)=>
                (!data.status) && <Task data={data.data} status={data.status} id={data.id} completed={completed} deleteTask={deleteTask} key={key}/> 
              )}
            </div>
        </div>
    </div>
  );
}

export default App;
