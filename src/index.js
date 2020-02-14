import React from 'react';   /*Import in all react js's*/
import ReactDOM from 'react-dom';  /*Import when you have to edit DOM from the your Js files*/


const jsx = (
    <div>
        <h1 class="red font">This is the first child</h1>
        <p>This is a child</p>
    </div>

);  // This only works beacuase of the react import  JSX 

// const element  = React.createElement('h1', {},`Hey I am testing shits ${name}`)  // the uggly way using react

const container = document.getElementById('app');

ReactDOM.render(jsx ,container);

