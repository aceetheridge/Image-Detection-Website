import React, {Component} from 'react';
import './App.css';
import NavigationBar  from './components/Navigation';
import ImageLink  from './components/ImageLink';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition';
import 'tachyons';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Clarifai from 'clarifai';
const AI = new Clarifai.App({apiKey: 'c94246448a1b46a89010cd39ad198241'});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      namesList: [],
      faceRec: false,
      Boxes: [],
      imageH: 0,
      imageW: 0,
      route: 'signin'
    }
  }

  calculateFaceLocation = (data) =>{
    let boxList = [];
    
    for(let i = 0; i < data.outputs[0].data.regions.length;i++){
      boxList.push(data.outputs[0].data.regions[i].region_info.bounding_box);
    }
    return boxList;
  };
  
  dispFace = (data)=>{
    const imgh = Number(document.getElementById('inputimage').height);
    const imgw = Number(document.getElementById('inputimage').width);
    this.setState({Boxes: data});
    this.setState({imageH: imgh});
    this.setState({imageW: imgw});
    };
    

  
  onImageLinkChange = ( event ) => {
    this.setState({input: event.target.value});
  }
  onRouteChange =(route) =>{
    this.setState({route: route})
  }
  onSubmit =() =>{
    
    this.setState({imageUrl: this.state.input})
    AI.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict(this.state.input);
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts'];
        let returnObjects = [];
        let face = 0;
        for(var i = 0; i< concepts.length;i++){
          returnObjects.push(concepts[i]);
          
          if(concepts[i].name === "face" || concepts[i].name === "man" || concepts[i].name === "woman" ){
             face = face + 1;
          }
          
        };
        AI.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input).then(response => {this.dispFace(this.calculateFaceLocation(response))},(err => {console.log(err)}));
        this.setState({namesList: returnObjects})
        if(face > 0){
            
          this.setState({faceRec: true})
        }
        else if(face === 0){
          this.setState({faceRec: false})
        }
      });
      
    
    
  }
  render(){
    return (
      <div className="App">
        {/* <NavigationBar onRouteChange={this.onRouteChange} />
        {this.state.route ==='home' ?
        <div>  */}
          <Rank />
          <ImageLink onImageLinkChange={this.onImageLinkChange} onSubmit={this.onSubmit}/>
          <FaceRecognition imageUrl={this.state.imageUrl} namesList={this.state.namesList} 
            faceRec={this.state.faceRec} Boxes={this.state.Boxes} imageH={this.state.imageH} imageW={this.state.imageW}/>
        {/* </div> : (this.state.route === 'signin'? */}
         {/* <SignIn onRouteChange={this.onRouteChange} /> 
         : <Register onRouteChange={this.onRouteChange} />
         )
        } */}
      </div>
    );
  }
}

export default App;
