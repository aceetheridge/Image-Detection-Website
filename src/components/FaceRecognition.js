import React from 'react';
import PropsTile from './PropsTile'
import Rectangle from './Rectangle'



const FaceRecognition = ({imageUrl, namesList, faceRec, Boxes, imageH, imageW}) => {
    console.log(imageH, imageW);
    const Draw = namesList.map((object , i) => {
        return <PropsTile key={i} name={namesList[i].name}/>
    });

    const DrawBoxes = Boxes.map((object, i) =>{
        return<Rectangle key={i} topRow={{...Boxes[i]}.top_row * imageH } 
        bottomRow={imageH - ({...Boxes[i]}.bottom_row * imageH)} 
        rightCol={imageW - ({...Boxes[i]}.right_col * imageW)} 
        leftCol={{...Boxes[i]}.left_col * imageW}/>
    });

    if(faceRec === false){
        return(
        <div className=' cf flex flex-wrap justify-center ma3'>
            
            <div className='br3 w-30 pa3'>
                <img className='br3 shadow-1' src={imageUrl} alt='Your Image Should Appear Here' />
                
                
            </div>
            <div className=' w-50 pa3 '>
                <div>Your image could be classified by the following traits.</div>
                <div className='flex flex-wrap'>{Draw}</div>
            </div>
        </div>
    )}
    
    else if(faceRec === true && Boxes != null){
        // for(let i = 0; i<Boxes.length;i++){
        //     console.log(Boxes[0].region_info.bounding_box.top_row)
        //     let box = Boxes[i];
        //     console.log(box.region_info.bounding_box.top_row);
        // }
        // console.log(Boxes[0].region_info.bounding_box.top_row);
        

        return(
            <div className=' cf flex flex-wrap justify-center'>
                <div className='br3  absolute'>
                    <div className='ma3 f3'>Detecting Faces</div>
                    <img id='inputimage' className=' br3' src={imageUrl} alt='Your Image Should Appear Here' />
                    {DrawBoxes}
                    {/* <div className='absolute shadow-1 flex flex-wrap justify-center' style={{top: Boxes.topRow}}></div> */}
                </div>
            </div>
        );
    }
    };


export default FaceRecognition;