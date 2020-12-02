import { Component } from 'react';
import './css/header.css'

export default class Header extends Component {

    componentDidMount() {
        window.onscroll = () => {
            console.log("Scroll")
        }
    }

    render(){
        return (
            <>
                <header>
                    <h1>Max</h1>
                    <h1>Robinson</h1>
                </header>
                <canvas></canvas>
            </>
        );
    }
}
  
