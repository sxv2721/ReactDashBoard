import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import ToDoItem from './ToDoItem/';
import './styles.scss';


class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "Add New Task",
            items: ["Travelagent India", "Top things to see during a holiday in Hong Kong", "Copper Canyon", "See the unmatched beauty of the Great Lakes", "Become A Travel Pro in One Easy Lesson"],
            
        }
        this.state = {
            itemsMap: this.state.items.map((item, index) => {
            
                return(
                <div className="item" key={item + index}><ToDoItem name={item} />
                    <button onClick={this.handleRemove} value={index}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                        </button></div>
            )}
        )}
        
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleInput = (event) => {
        event.preventDefault();
        this.setState({
            input: event.target.value
        });
    }
    handleAdd = (event) => {
        event.preventDefault();
        this.setState((state) => ({
            items: [...this.state.items, this.state.input],
            input: "Add New Task"
        }));
        console.log(this.state.items);
    }
    handleRemove = (event) => {
        event.preventDefault();
        let tempItems = this.state.items;
        let tempMap = this.state.itemsMap;
        console.log(tempMap);
        //tempItems.splice(event.currentTarget.value, 1);
        //tempMap.splice(event.currentTarget.value, 1);
        
        this.setState((state) => {
            return {
                items: [...tempItems],
                itemsMap: [...tempMap]
            } 
        });
        console.log(event.currentTarget.value);
        console.log(this.state.items);
    }

    render = () => {
        

        return (<div className="toDo" id="toDo">
            <h3 className="toDoTitle">To Do List</h3>
            {console.log(this.state.itemsMap)}
            {this.state.itemsMap}
            <form className="newTask" onSubmit={this.handleAdd}>
                <input 
                    type="text"
                    className="newTaskBox"
                    value={this.state.input}
                    onChange={this.handleInput}
                />
                <button type="submit" className="newTaskButton" >
                    <FontAwesomeIcon icon={faLocationArrow} color = "blue"/>
                </button>
            </form>
        </div>);
    }
}
export default ToDo;