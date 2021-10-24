import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Clock extends React.Component<any, any> {
    private timerId: any;

    constructor(props: any) {
        super(props);
        this.state = {date : new Date()};
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({date : new Date()});
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}!</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);
