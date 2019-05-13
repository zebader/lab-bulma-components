import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Navbar.js'
import NavBar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import SignUp from './SignUp'

function App() {
  return (
    <div>

      <NavBar />

      <div className="form-wrapper">

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

        <CoolButton className="button is-rounded is-medium is-danger">button1</CoolButton>
        <CoolButton className="button is-medium is-success">button2</CoolButton>

        <SignUp />

      </div>
    </div>
  );
}

export default App;
