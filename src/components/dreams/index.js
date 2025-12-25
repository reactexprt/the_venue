import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Dreams = () => {
    const dreams = [
        {
            icon: '🏠',
            title: 'Her Own Home',
            description: 'A beautiful place to call her own, decorated just the way she wants'
        },
        {
            icon: '🐾',
            title: 'Furry Friends',
            description: 'A home full of love with adorable pets to cuddle'
        },
        {
            icon: '🌍',
            title: 'Travel The World',
            description: 'Explore every corner of this beautiful planet together'
        }
    ];

    return (
        <div className="dreams_section">
            <div className="center_wrapper">
                <Fade>
                    <h2>Her Dreams</h2>
                    <p className="dreams_subtitle">And I promise to help make each one come true</p>
                </Fade>

                <div className="dreams_grid">
                    {dreams.map((dream, index) => (
                        <Zoom delay={index * 200} key={index}>
                            <div className="dream_card">
                                <div className="dream_icon">{dream.icon}</div>
                                <h3>{dream.title}</h3>
                                <p>{dream.description}</p>
                                <div className="dream_promise">I'm with you ❤️</div>
                            </div>
                        </Zoom>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dreams;
