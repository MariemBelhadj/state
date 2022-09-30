import React from "react";
import myImage from './img/ma.jpg'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Person: {
      fullName:"mariem belhadj",
      bio:"aaaaaaaaaaaaaaaa",
      profession:"aaaa",
      imgSrc : myImage
      },
      show : false,
      counter : 0
    }
  }
 componentDidMount(){
  this.myInterval = setInterval(()=>{
    this.setState(prevState =>({
      counter: prevState.counter+0.5
    }))
  },1000)
 } 
  handleShow = () => {
    this.setState({
      ...this.state.Person,
      show: !this.state.show,
    });
  }

  componnetWillUnmont(){
    clearInterval(this.state.myInterval)
    }
    
  
      
  
  render() {
    const counter = this.state.counter;
    return (
      <>
       
        {this.state.show && (
          <>
        <img src={this.state.Person.imgSrc} alt=""/>
        <h1>{this.state.Person.fullName}</h1>
        <h1>{this.state.Person.bio}</h1>
        <h1>{this.state.Person.profession}</h1>
        </>) }
        <button onClick={this.handleShow}>click here</button>
         <h1>count:{counter}</h1>
      </>
    )
  }
}

export default App;
