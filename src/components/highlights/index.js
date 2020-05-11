import React from 'react';
import Description from './Description';
import Discounts from "./Discounts"

const Highlights = () => {
    return ( 
        <div className="highlight_wrapper">
            <Description />
            <Discounts />
        </div>
     );
}
 
export default Highlights;