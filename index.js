import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class NumberComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }





    SendNumber = () => {
        let Numinfo = {
            number: this.ref.number.value
        };
        fetch('https://localhost:44354/', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(Numinfo)
        })


    };





    render = () => {
        return (
            <div>
                <h2> Please write number..</h2>
                <p>
                    <label>Number: <input type="text" ref="number"></input></label>
                </p>
                <button onClick={this.SendNumber}>create</button>
                <p>{this.state.message}</p>
            </div>


        )
    }
    
   
}
const element = <NumberComponent></NumberComponent>

ReactDOM.render(element,document.getElementById("root"))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
