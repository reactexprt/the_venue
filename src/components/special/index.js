import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Special = () => {
    const qualities = [
        { emoji: '💝', title: 'Loving', desc: 'Her heart is full of love for everyone around her' },
        { emoji: '🤗', title: 'Caring', desc: 'She always puts others before herself' },
        { emoji: '👯', title: 'Amazing Friend', desc: 'The best friend anyone could ask for' },
        { emoji: '🧠', title: 'Understanding', desc: 'She listens and understands like no one else' },
        { emoji: '💪', title: 'Health Guardian', desc: 'Always looking after me and my health' },
        { emoji: '✨', title: 'One of a Kind', desc: 'Simply irreplaceable and unique' }
    ];

    return (
        <div className="special_section">
            <div className="center_wrapper">
                <Fade>
                    <h2>Why She's Special</h2>
                    <p className="special_subtitle">A few of the million reasons why I love her</p>
                </Fade>
                
                <div className="qualities_grid">
                    {qualities.map((quality, index) => (
                        <Zoom delay={index * 100} key={index}>
                            <div className="quality_card">
                                <div className="quality_emoji">{quality.emoji}</div>
                                <h3>{quality.title}</h3>
                                <p>{quality.desc}</p>
                            </div>
                        </Zoom>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Special;
