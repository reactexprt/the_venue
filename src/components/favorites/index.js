import React from 'react';
import Fade from 'react-reveal/Fade';

const FavoriteThings = () => {
    const favorites = [
        { category: 'Comfort Food', items: ['Gobhi Paratha 🥟', 'Banana Chips 🍌', 'Fish & Prawns 🦐', "Mom's Cooking 👩‍🍳"] },
        { category: 'Color Palette', items: ['Black 🖤', 'Everything Black', 'More Black', 'Did I mention Black?'] },
        { category: 'Binge Watch', items: ['Emily in Paris 🗼', 'Gossip Girl 👗', 'Movie Nights 🎬', 'Series Marathons 📺'] },
        { category: 'Happy Places', items: ['Mountains 🏔️', 'With Friends 👯', 'Shopping Sprees 🛍️', 'Gym Sessions 💪'] }
    ];

    return (
        <div className="favorites_section">
            <div className="center_wrapper">
                <Fade>
                    <h2>Things She Loves</h2>
                    <p className="favorites_subtitle">A little peek into what makes her happy</p>
                </Fade>

                <div className="favorites_grid">
                    {favorites.map((fav, index) => (
                        <Fade delay={index * 150} key={index}>
                            <div className="favorites_card">
                                <h3>{fav.category}</h3>
                                <ul>
                                    {fav.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </Fade>
                    ))}
                </div>

                <Fade delay={600}>
                    <div className="hrithik_banner">
                        <span>🎬</span>
                        <p>And yes, she's a huge <strong>Aditya Roy Kapoor</strong> fan! (Don't worry, I'm not jealous... much 😄)</p>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default FavoriteThings;
