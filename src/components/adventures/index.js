import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Adventures = () => {
    const memories = [
        {
            icon: '🏔️',
            title: 'Tosh, Himachal',
            subtitle: 'Where It All Began',
            description: 'Our first trip together — the mountains, the brownie, the endless conversations. This is where our journey truly started.'
        },
        {
            icon: '❄️',
            title: 'Himachal Adventures',
            subtitle: 'Our Happy Place',
            description: 'Every trip to the mountains feels like coming home. The cold breeze, hot chai and maggi, and her warm smile — perfect!'
        },
        {
            icon: '💑',
            title: 'Every Moment Together',
            subtitle: 'The Real Adventure',
            description: "Whether we're on a mountain peak or just at home, being with her makes everything feel like an adventure."
        }
    ];

    return (
        <div className="adventures_section">
            <div className="center_wrapper">
                <Fade>
                    <h2>Our Adventures</h2>
                    <p className="adventures_subtitle">Because the best journeys are the ones we take together</p>
                </Fade>

                <div className="memories_container">
                    {memories.map((memory, index) => (
                        <Slide left={index % 2 === 0} right={index % 2 !== 0} key={index}>
                            <div className="memory_card">
                                <div className="memory_icon">{memory.icon}</div>
                                <div className="memory_content">
                                    <h3>{memory.title}</h3>
                                    <span className="memory_subtitle">{memory.subtitle}</span>
                                    <p>{memory.description}</p>
                                </div>
                            </div>
                        </Slide>
                    ))}
                </div>

                <Fade delay={500}>
                    <div className="adventures_quote">
                        <span>"</span>
                        With you, I don't need a destination. The journey itself is the adventure.
                        <span>"</span>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Adventures;
