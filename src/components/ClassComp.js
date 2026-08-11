import React, { Component } from 'react';

class ClassComp extends Component {

    constructor(props) {

        super(props);

        this.state = {
            count: 0
        }


    }

    increaseFn = () => {
        console.log('INCREMENT...');
        this.setState({ count: this.state.count + 1 });
    }


    decreaseFn = () => {
        console.log('DECREMENT...');
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <>
                <h2 id='numdisplay'>Class Component - State Variable</h2>

                <div style={{ textAlign: 'center', backgroundColor: 'green', padding: '6px' }}>

                    <h3>NUM - {this.state.count}</h3>

                    <br></br>

                    <button onClick={this.increaseFn}>INCREMENT</button>
                    <button onClick={this.decreaseFn}>DECREMENT</button>

                </div>

                <div>

                </div>

            </>
        )
    }


}

export default ClassComp;