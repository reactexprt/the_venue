import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';

export default class Header extends Component {
    state = {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 50){
            this.setState({ headerShow: true })
        } else {
            this.setState({ headerShow: false })
        }
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <AppBar 
                position="fixed"
                style={{ 
                    backgroundColor: this.state.headerShow 
                        ? 'rgba(26, 26, 46, 0.95)' 
                        : 'transparent',
                    backdropFilter: this.state.headerShow ? 'blur(10px)' : 'none',
                    WebkitBackdropFilter: this.state.headerShow ? 'blur(10px)' : 'none',
                    boxShadow: this.state.headerShow 
                        ? '0 4px 30px rgba(0, 0, 0, 0.3)' 
                        : 'none',
                    padding: '10px 0px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                 }}    
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="header_logo_venue">Miss Kashyupp</div>
                        <div className="header_logo_title">Birthday Bash</div>
                    </div>

                    <IconButton
                        aria-label="Open menu"
                        color="inherit"
                        onClick={() => this.toggleDrawer(true)}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            padding: '10px'
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value) => this.toggleDrawer(value)} 
                    />

                </Toolbar>
            </AppBar>
        )
    }
}
