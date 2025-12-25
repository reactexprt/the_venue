import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarIcon from '@material-ui/icons/Star';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FaceTwoToneIcon from '@material-ui/icons/FaceTwoTone';
import CloudIcon from '@material-ui/icons/Cloud';
import ListIcon from '@material-ui/icons/List';

const SideDrawer = (props) => {

    const scrollToElement = element => {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutCubic',
            offset: -70
        });
        props.onClose(false)
    }

    const menuItems = [
        { name: 'featured', label: 'Countdown', icon: <AccessTimeIcon /> },
        { name: 'venueInfo', label: 'Party Info', icon: <InfoIcon /> },
        { name: 'nicknames', label: 'Her Nicknames', icon: <FaceTwoToneIcon /> },
        { name: 'special', label: 'Why She\'s Special', icon: <StarIcon /> },
        { name: 'highlights', label: 'About Her', icon: <PersonIcon /> },
        { name: 'favoriteThings', label: 'Things She Loves', icon: <ListIcon /> },
        { name: 'adventures', label: 'Our Adventures', icon: <FlightTakeoffIcon /> },
        { name: 'dreams', label: 'Her Dreams', icon: <CloudIcon /> },
        { name: 'favourite', label: 'Quick Links', icon: <FavoriteIcon /> },
        { name: 'location', label: 'Location', icon: <LocationOnIcon /> }
    ];

    return ( 
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            {/* Close Button */}
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '10px 10px 0 0'
            }}>
                <IconButton 
                    onClick={() => props.onClose(false)}
                    style={{
                        color: '#ffffff',
                        backgroundColor: 'rgba(255, 72, 0, 0.2)',
                        borderRadius: '12px',
                        padding: '8px'
                    }}
                    aria-label="Close menu"
                >
                    <CloseIcon />
                </IconButton>
            </div>

            <div style={{ 
                padding: '10px 0 20px 0', 
                textAlign: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div style={{
                    fontSize: '24px',
                    fontFamily: "'Righteous', cursive",
                    background: 'linear-gradient(135deg, #fff 0%, #ffa800 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Menu
                </div>
            </div>
            
            <List component="nav" style={{ padding: '20px 0', flex: 1, overflowY: 'auto' }}>
                {menuItems.map((item, index) => (
                    <ListItem 
                        button 
                        onClick={() => scrollToElement(item.name)}
                        key={index}
                        style={{
                            margin: '5px 10px',
                            borderRadius: '12px',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <ListItemIcon style={{ color: '#ffa800', minWidth: '40px' }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                            primary={item.label}
                            primaryTypographyProps={{
                                style: { 
                                    fontWeight: 500,
                                    letterSpacing: '0.5px'
                                }
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
     );
}
 
export default SideDrawer