import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {
  return (
    <div>
      <Link to='/app/dashboard'>Layout</Link>
      <br/>
      { props.children }
    </div>
  );
}

export default Layout;
