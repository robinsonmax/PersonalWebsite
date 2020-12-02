import React, {Component} from 'react';
import backgroundImage from './img/background.jpg';

const backgrounCss = {
  position: "fixed",
  left:0,
  right:0,
  top:0,
  height:"110%",
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  zIndex: -1000
}

export default class Background extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount = () => {
    this.updateCss();
    window.addEventListener("scroll", () => {
      this.updateCss();
    })
    if(/Android|Opera Mini|Mobile|mobile/i.test(navigator.userAgent)){
      document.getElementById("background").style.height = `${window.innerHeight * 1.10}px`
    }
  }

  updateCss = () => {
    const scrollDifference = window.scrollY > 300 ? 300 : window.scrollY;
    const grayscale = 20 + (scrollDifference / 5);
    const contrast = 150 - (scrollDifference / 5);
    const brightness = 65 - (scrollDifference / 7);
    document.getElementById("background").style.filter = `contrast(${contrast}%) grayscale(${grayscale}%) brightness(${brightness}%)`
  }

  render(){
    return (
      <>
        {this.props.children}
        <div id="background" style={backgrounCss}>
        </div>
      </>
    );
  }

}
