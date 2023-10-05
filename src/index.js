import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*specifying expression using  JSX
let a=10, b=20;
var name ='aalok'
const element = <p>sum of {a+b}<br/>sub of a-b is {a-b}</p>
const element = <p>My name is {name}</p>

const element1 = <a href='http:/rknec.edu'>RCOEM</a>
const element2 =<img src={logo}/>;

#using jsx 
constant element = <h1> hello </h1>
*/

//#without jsx
//const element = React.createElement('h1',{className:'h1',id:'hello'},'Hello World')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //element1
  /*
  <table>
  <tr>
  <td>element1</td>
  <td>element2</td>
  </tr>
  </table>
  */
  //<React.StrictMode>
    <App />
      /*
      {element1},{element2}
      */
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
