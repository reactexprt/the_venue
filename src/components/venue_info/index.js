import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueInfo = () => {
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
                                        16 September 2020 @07:00 pm
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