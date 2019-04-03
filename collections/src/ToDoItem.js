import React, { Component } from 'react';
import Address from "./Address";
import Geo from "./Geo";

//component to return info in an array
class ToDoItem extends Component{
    render(){
        return(
            <div>
                {/*returning each element in array*/}
                <p>ID: {this.props.eachElement.id}</p>
                <p>Name: {this.props.eachElement.name}</p>
                <p>UserName: {this.props.eachElement.username}</p>
                <p>Email: {this.props.eachElement.email}</p>
                <p>Phone: {this.props.eachElement.phone}</p>
                <p>Website: {this.props.eachElement.website}</p>
                <Address eachElement={this.props.eachElement.address} />
                {/*<Geo eachElement={this.props.eachElement.geo}/>*/}
                <hr/>

            </div>
        );
    }
}

export default ToDoItem;