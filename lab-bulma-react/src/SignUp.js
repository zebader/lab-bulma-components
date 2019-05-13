import React from 'react';
import NavBar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class SignUp extends React.Component {
  render () {
    return(
      <div>
        <NavBar />

        <FormField label="Name" type="text" placeholder="Your name here" />
        <FormField label="Email" type="email" placeholder="Your email here" />
        <FormField label="Password" type="password" placeholder="*********" />

        <CoolButton className="button is-rounded is-medium is-danger">button1</CoolButton>
      </div>
    )}
  
  }

  export default SignUp;