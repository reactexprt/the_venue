import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {

    state = {
        deadLine: this.getNextBirthday(),
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
        age: this.calculateAge()
    }

    // Calculate the next birthday (Sept 16)
    getNextBirthday() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const birthMonth = 8; // September (0-indexed)
        const birthDay = 16;
        
        let nextBirthday = new Date(currentYear, birthMonth, birthDay);
        
        // If this year's birthday has passed, set to next year
        if (now > nextBirthday) {
            nextBirthday = new Date(currentYear + 1, birthMonth, birthDay);
        }
        
        return nextBirthday;
    }

    // Calculate age based on birth year (1997 for 23rd birthday in 2020)
    calculateAge() {
        const birthYear = 1997;
        const now = new Date();
        const currentYear = now.getFullYear();
        const birthMonth = 8; // September
        const birthDay = 16;
        
        let age = currentYear - birthYear;
        const birthday = new Date(currentYear, birthMonth, birthDay);
        
        // If birthday hasn't happened this year, subtract 1
        if (now < birthday) {
            age -= 1;
        }
        
        return age + 1; // +1 because countdown is for upcoming birthday
    }

    getTimeUntil(deadLine) {
        const time = deadLine.getTime() - Date.now();
        if (time < 0) {
            // Birthday has passed, recalculate for next year
            const newDeadline = this.getNextBirthday();
            this.setState({
                deadLine: newDeadline,
                age: this.calculateAge()
            });
        } else {
            const seconds = Math.floor((time/1000)%60)
            const minutes = Math.floor((time/1000/60)%60)
            const hours = Math.floor((time/(1000*60*60))%24)
            const days = Math.floor(time/(1000*60*60*24))

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.getTimeUntil(this.state.deadLine), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Format number to always show 2 digits
    formatNumber = (num) => {
        return num.toString().padStart(2, '0');
    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        <span className="birthday-age">{this.getOrdinalSuffix(this.state.age)}</span> Birthday starts in
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.formatNumber(this.state.days)}
                            </div>
                            <div className="countdown_tag">
                                Days
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.formatNumber(this.state.hours)}
                            </div>
                            <div className="countdown_tag">
                                Hours
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.formatNumber(this.state.minutes)}
                            </div>
                            <div className="countdown_tag">
                                Mins
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.formatNumber(this.state.seconds)}
                            </div>
                            <div className="countdown_tag">
                                Secs
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        )
    }

    getOrdinalSuffix(num) {
        const j = num % 10;
        const k = num % 100;
        if (j === 1 && k !== 11) return num + "st";
        if (j === 2 && k !== 12) return num + "nd";
        if (j === 3 && k !== 13) return num + "rd";
        return num + "th";
    }
}

export default Countdown;
