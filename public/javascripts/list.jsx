import React from 'react';

export default class List extends React.Component {
    render() {
        return (
            <ul> {
                this.props.data.map((val) =>{
                  return <li>{ val }</li>
                })
              }
            </ul>
        );
    }
}
