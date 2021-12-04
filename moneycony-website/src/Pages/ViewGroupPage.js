import Logo from "../Assets/logo.png";
import Mail from "../Assets/mail.png";
import Profile from "../Assets/profile.png";
import Admin from "../Assets/admin.png";

import '../Styles/ViewGroupPageStyle.css'

export default function ViewGroupPage(){

    return(

        <>
        <div className='header'>
            <div className="column header">
                <img src={Logo} alt={"logo"} class = 'c1'/>
            </div>
             <div className='column header'>
                 <ul>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Groups</a></li>
                     <li><a href="#">Pricing</a></li>
                 </ul>
             </div>
            <div className="column header" >
                <img src={Mail} alt={"mail"} class = 'c1'/>
                <img src={Profile} alt={"profile"} class = 'c1'/>
            </div>
        </div>
        <div className='blank1'>
        </div>
        <div className="row">
            <div className="column left">
                <h2>Your Group List</h2>
                <button className="button Group">Group1</button>
                <button className="button Group">Group2</button>
                <button className="button Group">Group3</button>
                <button className="button Group">Group4</button>
            </div>
            <div className="row2">
                <div className="column middle">
                    <div align="center">
                        <div className='blank2'>
                        </div>
                        <img src={Admin} alt={"admin"} class = 'c2' />
                        <div className='blank2'>
                        </div>
                        <p className="one"></p>
                        <button className="button Main">Add Member</button>
                        <button className="button Main">Delete Member</button>
                    </div>
                </div>
                <div className="column right">
                    <h2>Group Member List</h2>
                    <p className="one"></p>
                    <ul className = 'member'>
                        <p>member1</p>
                        <p>member2</p>
                        <p>member3</p>
                        <p>member4</p>
                        <p>member5</p>
                    </ul>
                    <p className="one"></p>
                    <button className="button SendRemind">Send Remind</button>
                </div>

            </div>
        </div>
        <div className="footer">
            <div className="column ToS">
                <h5>Terms of Service</h5>
            </div>
            <div className="column MoneyCony">
                <h5>@MoneyCony</h5>
            </div>
        </div>
        </>
    )
}
