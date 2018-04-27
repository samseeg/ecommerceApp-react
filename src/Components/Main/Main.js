import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Main.css';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: []
        }
    }


    render() {
        return (
            <div className='main_wrapper'>
                <div className='head'>
                    <div className='ham_menu'>

                    </div>

                    <div className='title'>

                    </div>

                    <div className='cart'>
                    
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;