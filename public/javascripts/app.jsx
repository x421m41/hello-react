import React from 'react';
import ReactDOM from 'react-dom';
import List from './list.jsx'
import DateTimeShow from './datetime.js'


ReactDOM.render(
    <List data={["Pen", "Pinapple", "Apple", "Pen"]}/>,
    document.querySelector('.root')
);

let tick = () => {
  ReactDOM.render(
      <div>
      Current Time: <DateTimeShow />
      </div>,
      document.querySelector('.time')
  );
}

tick();
setInterval(tick, 1000);
