import React, { Component } from 'react';

class Counter extends Component{
        constructor(props) {
            super(props);

            this.state = {
                count: 5
            };
        }

        incrementCount = () =>{
            this.setState({
                count: 10
            });
        }

        render() {
            return(
                <h1>{this.state.count}</h1>
            );
        }
}

export default Counter;