import React from 'react';
import './shad.css';


const Rectangle = (props) => {
    return(
        <div className='absolute flex flex-wrap justify-center shad ' style={{top: (props.topRow) , bottom: props.bottomRow, right: props.rightCol, left: props.leftCol}}>
           
        </div>
    );
}
export default Rectangle;