import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Toggle extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState: any) => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'On' : 'Off'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
);
