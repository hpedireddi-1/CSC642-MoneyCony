import Footer from './footer';
import Header from './header'
import '../Styles/style.css'

export default function Mainpage() {
    return (
        <div>
        <Header />
			<div className="dashboard-container">
                <div className="upcomming-paymet">
                    <h1>Upcoming Payment</h1>
                    <div className="payment-list"><br/>
                        <li>Payment 1</li><br/>
                        <li>Payment 2</li><br/>
                        <li>Payment 3</li><br/>
                        <li>Payment 4</li><br/>
                        <li>Payment 5</li><br/>
                        <li>Payment 6</li><br/>
                        <li>Payment 7</li><br/>
                        <li>Payment 8</li><br/>
                    </div>
                    <a href="/">View All</a>
                </div>
                <div className="useful-link">
                       <a href="/product">Register a New Product</a>
                       <a href="/viewGroupPage">View Groups</a>
                       <a href="/creategroup">Create a new Group</a>
                </div>
            </div>
            <Footer />
		</div>
    )
}
