import React from 'react';
const ImageLink = ({ onImageLinkChange, onSubmit}) => {
    return (
        <div className='cf flex flex-wrap justify-center ma3  '>
            <input className=' pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50' type='tex' onChange={onImageLinkChange} />
            <button className='b w4 h3 input-reset ba b--black bg-transparent grow pointer f6 dib ma3' onClick={onSubmit}>Submit</button>
        </div>
    )
}
export default ImageLink;