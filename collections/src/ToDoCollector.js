import React, { Component } from 'react';
import ToDoItem from "./ToDoItem";

class ToDoCollector extends Component{
    render(){
        //parsing info by creating new component for database info
        const toDoCollector = this.props.array.map(
            (eachElement)=>{
                return(<ToDoItem eachElement={eachElement}/>)
            }
        );

        return(
            <div>
                {toDoCollector}
            </div>
        );
    }
}

export default ToDoCollector;
