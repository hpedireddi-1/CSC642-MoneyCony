import React from 'react'
import Logo from '../Assets/logo.png'
import '../Styles/group.css'

export default function CreateGroupPage() {
    return (
        <>
        <div className="root-container">
  <div className="container">
    <div className="logo">
      <img src={Logo} alt="logo" />
    </div>
    <div className="content-wrapper">
      <h1>START A NEW GROUP</h1>
      <div className="content">
        <div className="group-container">
          <div className="group-content">
            <h3>My group shall be called</h3>
            <div className="group-field">
              <button>save</button>
              <input type="text" placeholder="Team Dogie Coin" />
            </div>
          </div>
        </div>
        <div className="member-container">
          <div className="add">
            <p>+Add</p>
          </div>
          <div className="member">
            <h3>Members</h3>
            <li>Elon Musk</li>
            <li>Mr Beast</li>
            <li>Snoop Dog</li>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;

        </>
    )
}
