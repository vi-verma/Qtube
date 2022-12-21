import React from 'react';
import Navigationbar from '../topNavigationbar/Navigationbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navigationbar />
        {children}
    </div>
  )
};

export default Layout;
