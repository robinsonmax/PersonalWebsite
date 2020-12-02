import React, {Component} from 'react'
import './css/scrollbar.css'

export default class ScrollBar extends Component {

    componentDidMount = () => {
        window.addEventListener("scroll", () => {
            const scrollHeight = document.body.scrollHeight;
            const windowHeight = window.innerHeight;
            const totalHeight = scrollHeight - windowHeight;
            document.getElementById("scrollbar-thumb").style.top = `${100*window.scrollY/totalHeight}%`
        })
        const thumb = document.getElementById("scrollbar-thumb")
        var mouseDown = false;
        var yOffset = 0;
        thumb.addEventListener("mousedown", (event) => {
            const thumbPos = thumb.getBoundingClientRect()
            yOffset = event.clientY - thumbPos.y - (thumbPos.height / 2)
            mouseDown = true
        })
        window.addEventListener("mouseup", (event) => {
            mouseDown = false
        })
        window.onmousemove = (event) => {
            if(mouseDown){
                const padding = 45
                const prog = (event.clientY - yOffset - padding)
                const total = (window.innerHeight - (padding*2))
                const scrollableDistance = document.body.scrollHeight - window.innerHeight
                window.scrollTo(0,(scrollableDistance*prog/total))
            }
        }

    }

    render(){
        return (
            <div className="scrollbar">
                <input type="textbox" id="scrollbar-thumb" className="scrollbar-thumb"/>
                <span className="scrollbar-track"></span>
            </div>
        );
    }
}
