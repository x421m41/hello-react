import React from 'react';

export default class List extends React.Component {
    render() {
        return (
            <ul> {
                this.props.data.map((a, i) =>{
                  return <li>{ a }</li>
                })
              }
            </ul>
        );
    }
}
