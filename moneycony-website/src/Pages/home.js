import React from 'react'
import Mail from '../Assets/mail.png'
import Profile from '../Assets/profile.png'
import '../Styles/style.css'

export default function Mainpage() {
    return (
        <div className="root-container">
			<nav className="navbar">
			    <div className="nav-flex">
                    <div className="nav-menu">
                        <a href="../home.js" className="logo-name">MoneyCony</a>
                        <a href="../home.js" className="menu-choice">Home</a>
                        <a href="../home.js" className="menu-choice">About</a>
                        <a href="../home.js" className="menu-choice">Groups</a>
                        <a href="../home.js" className="menu-choice">Pricing</a>
                    </div>
                    <div className="nav-profile">
                        <a href="../home.js" className="mail-button"><img alt="Mail-Icon" className="nav-icon" src={Mail}/></a>
                        <a href="../home.js" className="profile-button"><img alt="Profile-Icon" className="nav-icon" src={Profile}/></a>
                    </div>
                </div>
			</nav>
			<footer className="footer">
			    <div className="footer-flex">
                    <div className="footer-ToS">
                        Terms of Services
                    </div>
                    <div className="footer-copyright">
                        ©MoneyCony
                    </div>
                </div>
			</footer>
		</div>
    )
}
