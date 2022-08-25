import { Component } from "react";

class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            name:"Franco",
        };
    }
    render() {
        return <div>{this.state.name}</div>;
    }
}


export default ClassComponent;