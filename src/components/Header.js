import React from 'react';
import ActionsBar from './ActionsBar';
const Header = (props) => {
    return <div>
               <ActionsBar {...props}/>
        </div>
};

export default Header;