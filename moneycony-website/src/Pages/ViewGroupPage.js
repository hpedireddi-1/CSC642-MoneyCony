import Admin from "../Assets/admin.png";
import Header from "./header";

import '../Styles/ViewGroupPageStyle.css'
import Footer from "./footer";

export default function ViewGroupPage(){

    return(

        <>
        <Header />

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
                        <img src={Admin} alt={"admin"} className = 'c2' />
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
        <Footer />
        </>
    )
}
