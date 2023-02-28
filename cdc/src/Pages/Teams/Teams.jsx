import React from "react";
import './Teams.css';

const Teams = () => {

  //let message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
  return (
    <section class="section-white">

  <div class="container">

      <div class="row">
     
                  <div class="col-md-12 text-center">

                        <h1 class="section-title">Our Team </h1>

                        <p class="section-subtitle">{message}</p>
                        
                  </div> 
           
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />                   
                    <h3>Dr. Samir Bajpai</h3>     
                    <p className="team-infos">head.cdc@nitrr.ac.in</p>
                    <p className="team-infos">+91-9826167065</p>
                    <div class="team-info"><p>Head of Career Development Center </p></div>          
                    <p>Samir Bajpai is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>
                
              </div>
          </div> 

          <div class="col-sm-6 col-md-4">

<div class="team-item">

    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />                   
    <h3>Dr. Manoj Kumar Chopkar</h3>          
    <p className="team-infos">head.cdc@nitrr.ac.in</p>
                    <p className="team-infos">+91-9826167065</p>  
    <div class="team-info"><p>Faculty-in-charge</p></div>
    <p>Johnathan is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>

</div>
</div> 
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />
                   
                    <h3>Dr. Alok Naugarhiya</h3>
                    <p className="team-infos">head.cdc@nitrr.ac.in</p>
                    <p className="team-infos">+91-9826167065</p>
                    
                    <div class="team-info"><p>Faculty-in-charge</p></div>
                    <p>Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.</p>
                  
                </div>

          </div> 

          <div class="col-sm-6 col-md-4">

<div class="team-item">

    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />                   
    <h3>Dr. Suraj Kumar Mukti</h3>          
    <p className="team-infos">head.cdc@nitrr.ac.in</p>
                    <p className="team-infos">+91-9826167065</p>  
    <div class="team-info"><p>Faculty-in-charge</p></div>
    <p>Johnathan is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>
    

</div>
</div> 


<div class="col-sm-6 col-md-4">

<div class="team-item">

    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />                   
    <h3>Dr. R N Patel</h3>            
    <p className="team-infos">head.cdc@nitrr.ac.in</p>
                    <p className="team-infos">+91-9826167065</p>
    <div class="team-info"><p>Faculty-in-charge</p></div>
    <p>Johnathan is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>

    

</div>
</div> 

<div class="col-sm-6 col-md-4">

<div class="team-item">

    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />                   
    <h3>Dr. Saurabh Gupta</h3>  
    <p className="team-infos">head.cdc@nitrr.ac.in</p>
                    <p className="team-infos">+91-9826167065</p>
    <h4></h4>          
    <div class="team-info"><p>Faculty-in-charge</p></div>
    <p>Johnathan is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>

</div>
</div> 
      
      </div> 


      
  
  </div> 

  </section>
  );
};

export default Teams;
