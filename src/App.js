import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './components/Form';
import Form1 from './components/Form';
import Register from './components/Register';
//import Greet from './Greet';
//import Hello from './Hello';
import Greet from './components/Greet';
import one from './L2.png';
import two from './L1.png';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import HookCounter2 from './components/HookCounter2';
import Discount from './components/Discount';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import Greeting from './components/Greeting';
import Greeting2 from './components/Greeting2';
import NameList from './components/NameList';
import PostList from './components/PostList';
import PhotosList from './components/PhotosList';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import UserForm from './components/UserForm';
import UserFormF from './components/UserFormF';

//const element = React.createElement('h1',{className:'h1',id:'hello'},'gm')
//composing and decomposing component
function App() {
  return (
    <div className='App'>
      <UserFormF></UserFormF>
      {/* <UserForm></UserForm> */}
      {/* <HookCounter4></HookCounter4> */}
      {/* <HookCounter3></HookCounter3> */}
      {/* <PhotosList></PhotosList>
      <PostList></PostList> */}
      {/* <NameList></NameList> */}
      {/* <Greeting></Greeting> */}
      {/* <Greeting2 isLogged={false}/> */}
      {/* <UserGreeting isloggedIn={true}></UserGreeting> */}
      {/* <EventBind></EventBind> */}
      {/*<Discount></Discount>*/}
      {/*<HookCounter2 value={2}/>*/}
      {/*<Counter value={3}></Counter>*/}
      {/*<Message></Message>*/}
      {/*<Welcome firstname="Aalok" lastname="Choudhari"></Welcome>
      <Welcome></Welcome>
      <Welcome firstname="Prajwal" lastname="Kachade"></Welcome>*/}
      {/*<Header></Header>
      <Nav></Nav>
      <Mainc></Mainc>
      <Footer></Footer>
    <Greet></Greet>
    <Form></Form>
    <Greet firstname="aalok" lastname="c"/>
    <Greet firstname="Prajwal" lastname="K"/>
    <Greet firstname="Yash" lastname="W"/>*/}
    {/*<Greet emid={100} ename="Aalok" >
    <p>This is children props</p>
    <img src={two} alt='not found'></img>
    <button>Click ME!</button>
    </Greet>
    <Greet emid={101} />
    <Greet empid={113}/>
  <Greet/>*/}
    {/*<Hello></Hello>*/}
    {/*<Register ename="aalok" eage={20} edept='IT' epic={one} />
    <Register ename="prajwal" eage={21} edept='CSE' epic={two}/>    
  <Register ename="Subh" eage={22} edept='Roboticss'/>*/}
   </div>
  );
}/*
  <div className="App">
  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>Edit <code>src/App.js</code> and save to reload.</p>
  <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
  >
  Learn React
  </a>
  </header>
  </div>
    

  // with using JSX 
  <div className="App">
  <React.Fragment>
  <h1>GM</h1>
  <h2>Have a nice day</h2>
  <p id="bye">Good bye!</p>
  </React.Fragment>
  </div>
  */

 /* with using React
 React.createElement('div',{className:'App'},
 React.createElement('h1',null,'Goodmorning'),
 React.createElement('h2',null,'Have a nice day'),
 React.createElement('p',{id:'Bye'},'Goodbye!'))
 */


 
//child component - called in parent class
//function name : always uppercase
   
 /*

 //internal components
 function Greet()
  {
    return{
      <div>
      <h1>Greet,This is first child component</h1>
      </div>
    };
  }

  function Hello()
  {
    return{
      <div>
        <h1>Hello,This is second child component</h1>
      </div>
    };
  }*/
export default App;

const Header = () => {
  return (
    <div>Header</div>
  )
}
const Nav = () => {
  return (
    <div>This is sidenav</div>
  )
}
const Mainc = () => {
  return (
    <div>This is main component</div>
  )
}
const Footer = () => {
  return (
    <div>Footer</div>
  )
}
