import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe
                title="Cabana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7053232986436!2d77.3610745150827!3d28.638592582415423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfab322a8d097%3A0xb3ed285e2c9b2ded!2sCabana%20Service%20Residence!5e0!3m2!1sen!2sin!4v1589140799405!5m2!1sen!2sin"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
}

export default Location;