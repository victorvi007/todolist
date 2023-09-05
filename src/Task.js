const Task = function(props){
    return (
        <div className={(props.status === true)? 'list-item  completed':'list-item  uncompleted'}>
           <i className={(props.status === true)?'far fa-check-circle':'far fa-circle'} id="checkbox" onClick={()=>props.completed(props.id)}></i>
               <div className={(props.status === true)?'item-name line-through':'item-name'}>{props.data}</div>
               <button className="del" onClick={()=>props.deleteTask(props.id)}> <i className="far fa-trash-alt"></i> </button>
           </div>
    )
}

export default Task;