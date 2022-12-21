import React from 'react';
import Navigationbar from '../topNavigationbar/navigationbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navigationbar />
        {children}
    </div>
  )
};

export default Layout;
