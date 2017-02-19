import React from 'react';
import Button from './button.jsx'

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from {this.props.phrase}!</h1>
        <Button name="new"></Button>
        <h1>World</h1>
      </div>
    );
  }
}
