import React from 'react'

const NavigationBar = ({onRouteChange}) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end', padding: '3rem'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black pa3 pointer'>
                Sign Out
            </p>
        </nav>
    );
}
export default NavigationBar;