import React from 'react'
import Header from './header'
import Footer from './footer'
import'../Styles/style.css'

export default function Product() {

    function registerProduct() {
        alert('Product Registered!');
      }

    return (
        <div>
            <Header/>
            <div className="dashboard-container">
                <div className="upcomming-paymet">
                    <h1>Product Search</h1>
                    <div className="search-product"><br/>
                        
                    </div>
                </div>
                <div className="product-link">
                    <div>
                        <select>
                            <option>Group Selection</option>
                            <option>Group A</option>
                            <option>Group B</option>
                            <option>Solo Purchase</option>
                        </select>
                    </div>
                    <div>
                        <a href="/">Product Price</a>
                    </div>
                    <div>
                        <input type="date" id="birthday" name="birthday"/>
                    </div>
                    <button className="register-product-button" onClick={registerProduct}>Register Product</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
