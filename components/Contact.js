import React,{Component} from 'react';
import './style_component.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: '',
      secondName : '',
      email : '',
      message : ''
      };
  }
  myChangeHandler = (event) => {
    alert(event.target.name);
    this.setState({
      firstName: event.target.value,
      secondName: event.target.value,
      email: event.target.value,
      message: event.target.value
    });
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.email);
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler} className='page'>
        <input
          type='text' required
          placeholder = "Enter First Name"
          onChange={this.myChangeHandler}/>
      
        <input
          type='text' required
          placeholder = "Enter Second Name" 
          onChange={this.myChangeHandler}/>
      
        <input
          type='email' required
          placeholder = "Enter your email" 
          onChange={this.myChangeHandler}/>

        <input
          type='text' required
          placeholder = "Type message here..." 
          onChange={this.myChangeHandler}/>

        <button type='submit'>
          Submit
        </button>
      </form>
    );
  }
}