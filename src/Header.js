import { Component } from 'react';
import './css/header.css'

export default class Header extends Component {

    /*
    componentDidMount() {
        const ctx = document.getElementById("header-canvas").getContext("2d")
        window.onload = () => {
            resize()
        }
        window.onscroll = () => {
            draw()
        }
        window.onresize = () => {
            resize()
        }

        const resize = () => {
            ctx.canvas.width = window.innerWidth
            ctx.canvas.height = window.innerHeight
            draw()
        }
        const draw = () => {
            const w = ctx.canvas.width;
            const h = ctx.canvas.height
            const s = window.scrollY

            ctx.clearRect(0, 0, w, h);

            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "#ffffff";
            ctx.arc((0.8 * w), (h * 0.65) - (s * 0.6), 30, 0, 2 * Math.PI);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "#ffffff";
            ctx.arc((0.1 * w), (h * 0.9) - (s * 0.2), 30, 0, 2 * Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "#ffffff";
            ctx.arc((0.6 * w), (h * 0.25) - (s * 0.4), 30, 0, 2 * Math.PI);
            ctx.stroke();

        }
    }


    <canvas id="header-canvas"></canvas>

    */

    render(){
        return (
            <>
                <header>
                    <h1>Max</h1>
                    <h1>Robinson</h1>
                </header>
            </>
        );
    }
}
  
