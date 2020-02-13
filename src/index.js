import React from 'react';   /*Import in all react js's*/
import ReactDOM from 'react-dom';  /*Import when you have to edit DOM from the your Js files*/


const el = <h1>Hello world platzi!</h1>;  // This only works beacuase of the react import 

const container = document.getElementById('app');

ReactDOM.render(el,container);

