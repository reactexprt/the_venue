import React from 'react';
import Fade from 'react-reveal/Fade';

const Nicknames = () => {
    const nicknames = [
        { name: 'Honeybunch', meaning: 'Because she\'s the sweetest person I know 🍯' },
        { name: 'Vanilla', meaning: 'Pure, sweet, and simply the best flavor of life 🍦' },
        { name: 'Peaches', meaning: 'Soft, sweet, and absolutely peachy! 🍑' }
    ];

    return (
        <div className="nicknames_section">
            <div className="center_wrapper">
                <Fade>
                    <h2>What I Call Her</h2>
                    <p className="nicknames_subtitle">Because one name isn't enough for someone this special</p>
                </Fade>

                <div className="nicknames_container">
                    {nicknames.map((nick, index) => (
                        <Fade delay={index * 200} key={index}>
                            <div className="nickname_card">
                                <div className="nickname_name">{nick.name}</div>
                                <div className="nickname_meaning">{nick.meaning}</div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Nicknames;
