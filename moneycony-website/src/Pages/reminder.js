
import Footer from './footer';
import Header from "./header";
import "../Styles/style.css"
    function Reminder() {
      return (
        <div>
          <Header />
          <div className="header-small-container">
            <div className="header-small-wrapper">
              <a href="/">Reminder and Invites Inbox</a>
              <div className="search-wrapper">
                <input placeholder="search" type="text" />
                <div className="svg-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" color = "#027DE5" float = "right" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="inbox-reminder-wrapper">
            <div className="reminder-btn">
              <a href="/">Reminder</a>
              <ol>
                <li>New Reminder</li>
                <li>Second Reminder</li>
                <li>...............</li>
              </ol>
            </div>
            <div className="reminder-btn">
              <a href="/">Invites</a>
              <ol>
                <li>New Reminder</li>
                <li>Second Reminder</li>
                <li>...............</li>
              </ol>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
    
    export default Reminder;