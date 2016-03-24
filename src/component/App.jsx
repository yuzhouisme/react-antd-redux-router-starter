import React from 'react';
import Main from '../container/Main';

const App = React.createClass({
  render() {
    return (
      <div>
        { this.props.children || <Main /> }
      </div>
    );
  },
});

export default App;
