import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {


    static propTypes = {
        button: React.PropTypes.string.isRequired
    };
    static defaultProps = {
        button: 'default'
    };
    btnOnClick(){
        console.log('test');
    }

    render() {

        const divStyle = {
            backgroundColor : 'blue',

        };
        return (
            <div  style={divStyle} >
                <h1 className="test">test</h1>
                Hello {this.props.name}
                <button onClick = {this.btnOnClick}>{this.props.button}</button>
            </div>
        );
    }
}
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('time')
    );
}

setInterval(tick, 1000);

ReactDOM.render(<HelloMessage name="John" /*button="clicks"*//>, document.getElementById('app'));

