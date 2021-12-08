
import Footer from './footer';
import Header from "./header";

    function Reminder() {
      return (
        <div>
          <Header />
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

     <Footer />
       
     </div>
      );
    }
    
    export default Reminder;