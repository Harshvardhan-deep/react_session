import React, { Component } from "react";

class ClassComp extends Component {

    constructor() {

        super();
        console.log("Constructor called");

        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log("Component Did Mount called");
    }

    shouldComponentUpdate() {
        console.log('');
    }

    componentDidUpdate() {
        console.log("Component Did Update called");
        return true;
    }

    increaseFn = () => {
        console.log("INCREMENT...");
        this.setState({ count: this.state.count + 1 });
    }

    decreaseFn = () => {
        console.log("DECREMENT...");
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        console.log("Render called");
        return (
            <>
                <h1>Class Component</h1>

                <h3>NUM - {this.state.count}</h3>

                <button onClick={this.increaseFn}>INCREMENT</button>
                <button onClick={this.decreaseFn}>DECREMENT</button>
            </>
        )
    }
}

export default ClassComp;