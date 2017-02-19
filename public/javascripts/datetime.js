import React from 'react';

export default class DateTimeShow extends React.Component {
  render() {
    return <span>{new Date().toLocaleString()}</span>
  }
}
