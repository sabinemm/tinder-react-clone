import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

function Header() {
    return (
        // BEM
        <div class="header">
            <PersonIcon />
            <img
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo"
            />
            <QuestionAnswerIcon />
        </div>
    )
}

export default Header