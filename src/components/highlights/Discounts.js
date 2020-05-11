import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discounts extends Component {

    state = {
        discountStarts: 1,
        discountEnd: 100
    }

    porcentage = () => {
        if (this.state.discountStarts < this.state.discountEnd) {
            this.setState({
                discountStarts: this.state.discountStarts + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade onReveal={() => this.porcentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStarts}%</span>
                            <span>Fun</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Trust me, you should not miss it</h3>
                            <p>Party All Night, Party All Night, Party All Night.........</p>

                            <MyButton 
                                text="Please Click and confirm your Presence"
                                bck="#ffa800"
                                color="#ffffff"
                                link="https://google.com"
                            />
                        </div>
                    </Slide>

                </div>
            </div>
        );
    }

}

export default Discounts;