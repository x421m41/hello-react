import React from 'react';

export default class List extends React.Component {
    render() {
        return (
            <ul> {
                this.props.data.map((val, i) =>{
                  return <li key={i}>{ val }</li>
                })
              }
            </ul>
        );
    }
}
