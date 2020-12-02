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
    }

    render(){
        return (
            <div className="scrollbar">
                <span id="scrollbar-thumb" className="scrollbar-thumb"></span>
                <span className="scrollbar-track"></span>
            </div>
        );
    }
}
