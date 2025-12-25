import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:['Instagram','Spotify','Books','Myntra'],
        positions:['Her World','Her Therapy','Her Escape','Her Joy'],
        desc:[
            'Her favorite place to scroll, share moments, and stay connected with friends.',
            'Music is her therapy - she never goes a day without her favorite tunes!',
            'A cozy corner with a good book is her happy place.',
            'Because retail therapy is real therapy! 🛍️'
        ],
        linkto:['https://www.instagram.com/','https://open.spotify.com/','https://openlibrary.org/','https://www.myntra.com/'],
        delay:[500,0,500,0]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>{this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="One Click Away"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
       
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Sneha's Favourites</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing;
