import logo from "../Assets/logo.png";
import '../Styles/header.css';
import mail from '../Assets/mail.png';
import profile from '../Assets/profile.png'

function Header() {
    return (
     <div>
         <div className="menu">
             <img className='logo' src={logo} alt="../Assets/logo.png"/>

             <a href="/home" className="home-link">Home</a>
             <a href="/profile" className="about-link">About</a>
             <a href="/viewGroupPage" className="groups-link">Groups</a>
             <a href="/" className="pricing-link">Pricing</a>
             <a href='/reminder'>
             <img className='mail-logo' alt="mail-logo" src={mail}/>
             </a>
             <a href='/profile'>
             <img className='profile-logo' alt="profile-img" src={profile}/>
             </a>
         </div>
     </div>
    );
  }
  
  export default Header;