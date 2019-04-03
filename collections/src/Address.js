import React, { Component } from 'react';
import ToDoItem from "./ToDoItem";

//Component to render embedded address items
class Address extends Component{
    render(){

        return(
            <div>
                <p>Street: {this.props.eachElement.street}</p>
                <p>Suite: {this.props.eachElement.suite}</p>
                <p>City: {this.props.eachElement.city}</p>
                <p>ZipCode: {this.props.eachElement.zipcode}</p>
                <p>GeoLat: {this.props.eachElement.geolat}</p>
                </div>
        );
            }}



export default Address;