import React, { Component } from 'react';
import Address from "./Address";

//Component to render embedded geo items
class Geo extends Component{
    render(){

        return(
            <div>
                <p>Lat: {this.props.eachElement.lat}</p>
                <p>Long: {this.props.eachElement.long}</p>

            </div>
        );
    }}



export default Geo;