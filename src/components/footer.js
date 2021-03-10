import React, { Component } from 'react'

import '../styles/components/footer.css'

import Twitter from '../images/twitter.svg'
import Linkedin from '../images/linkedin.svg'
import GitHub from '../images/github.svg'

export default class footer extends Component {
    render() {
        return (
            <div className="Footer">
                <a href="#"><img src={Twitter}/></a>
                <a href="https://www.linkedin.com/in/juan-martínez-035392126/"><img src={Linkedin}/></a>
                <a href="https://github.com/JuanFeA98"><img src={GitHub}/></a>
            </div>
        )
    }
}
