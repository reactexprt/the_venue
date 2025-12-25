import React from 'react';
import Button from '@material-ui/core/Button';

const MyButton = (props) => {
    return ( 
        <Button 
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained" 
            size="medium" 
            style={{ 
                background: `linear-gradient(135deg, ${props.bck} 0%, #ff8c00 100%)`,
                color: props.color,
                borderRadius: '30px',
                padding: '12px 28px',
                fontWeight: 500,
                textTransform: 'none',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 15px rgba(255, 168, 0, 0.4)',
                transition: 'all 0.3s ease'
            }}
        >
            {props.text}
        </Button>
     );
}
 
export default MyButton;