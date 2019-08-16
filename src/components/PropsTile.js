import React from 'react';

const PropsTile = (props) => {
    return(
        <div className=' w-20 ma3 shadow-2'>
            <div className='tc flex items-center justify-center'>
                <p>{(JSON.stringify(props.name))}</p>
            </div>
        </div>
    );
}
export default PropsTile;