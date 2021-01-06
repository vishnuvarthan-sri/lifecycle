import React, { Component } from 'react';
import './App.css';
class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            template: "New World",
            previoustemplate: ""
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.template) {
            return {
                previoustemplate: props.template
            }
        }
        return null
    }

    shouldComponentUpdate(nextState, nextProps) {
        return nextProps.template !== nextState.template
    }
    updating = () => {
        this.setState({
            template: "All is well"
        });
    }

    render() {
        return (
            <div className="App">
                <h1>LifeCycle2</h1>
                <p>
                    {this.state.previoustemplate}
                    <br />
                    {this.state.template}
                </p>
                <button onClick={this.updating}>Check Here</button>
            </div>

        );

    }

}
export default App2