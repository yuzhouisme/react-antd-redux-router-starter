import React from 'react';
import Administrator from '../container/Administrator';

const Admin = React.createClass({
  render() {
    return (
      <div>
        { this.props.children || <Administrator /> }
      </div>
    );
  },
});

export default Admin;
