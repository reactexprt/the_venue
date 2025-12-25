import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueInfo = () => {
    // Calculate the next birthday date dynamically
    const getNextBirthdayDate = () => {
        const now = new Date();
        const currentYear = now.getFullYear();
        const birthMonth = 8; // September (0-indexed)
        const birthDay = 16;
        
        let nextBirthday = new Date(currentYear, birthMonth, birthDay);
        
        // If this year's birthday has passed, set to next year
        if (now > nextBirthday) {
            nextBirthday = new Date(currentYear + 1, birthMonth, birthDay);
        }
        
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return nextBirthday.toLocaleDateString('en-US', options);
    };

    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_calendar})`
                                        }}
                                    >
                                    </div>
                                    <div className="vn_title">
                                        Party Date & Time
                                    </div>
                                    <div className="vn_desc">
                                        {getNextBirthdayDate()} @07:00 pm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    >
                                    </div>
                                    <div className="vn_title">
                                        Party Location
                                    </div>
                                    <div className="vn_desc">
                                        B-1205, Windsor Cabana
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                </div>
            </div>
        </div>
    );
}

export default VenueInfo;