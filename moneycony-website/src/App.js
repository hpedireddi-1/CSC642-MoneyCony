import logo from './logo.svg';
import './App.css';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css"></link>

function App() {
  return (
    <div className="App">
       <div class  = "topnav" >
        <img className="logomoney" src="C:\Users\suraj\Desktop\CSC642-MoneyCony\moneycony-website\src\moneylogo.jpg"></img>
        <a class="active" href="#home">Home</a>
        <a href="About">About</a>
        <a href="Groups">Groups</a>
        <a href="Pricing">Pricing</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" color = "#027DE5" class="bi bi-inbox" viewBox="0 0 16 16">
          <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" color = "#027DE5" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
    </div>
    <body>
      <div className = "bodytital"> Reminders and Invites</div>
      <div className = "Search"> Search </div>
      <div className = "search-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" color = "#027DE5" float = "right" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
      </div>
      <div className = "reminders"> Reminders </div>
      <p  >
                          1. This is a first reminder. <br></br>
                          2. This is a second reminder. <br></br>
                          3. This is a third reminder. <br></br></p>
      <div className= "Invites" >Invites</div>
      <p  > 1. This is a invite. <br></br>
                          2. This is a invite. <br></br>
                          3. This is a invite. </p>
    </body>

      
    </div>
  );
}

export default App;
