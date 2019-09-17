import React from "react";
import './styles.scss';

class ToDoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            strikeStyle: {textDecorationLine: 'none'}
        }
    }
    strikeThrough = (event) => {
        if(event.target.checked){
            this.setState({
                strikeStyle: {textDecorationLine: 'line-through'}
            });
        }
        else{
            this.setState({
                strikeStyle: {textDecorationLine: 'none'}
            });
        }
        
    }
    componentDidMount = () => {
        console.log(this.props.name + " mounted");
    }
    componentWillUnmount = () => {
        console.log(this.props.name + " unmounted");
    }
    render = () => (
        <form className="itemForm" >
            <input type="checkbox" onChange = {this.strikeThrough}></input>
            <label className="itemLabel" style = {this.state.strikeStyle}>{this.props.name}</label>
        </form>
    );
}


export default ToDoItem;