import React from 'react'

function Mainpage() {
    return (
<>
      
        <div className="section1">
            <div className='heropage'>
                <div className="heroimg">
                    <h1>Unleash Your Inner Champion Today. <br />All In One Place.</h1>

                    <p>Join the ultimate tennis experience - where passion meets performance,<br /> and every swing brings you closer to victory</p>

                    <button className='start'>Start your own journey</button>
                </div>

                <div className="train">
                    <h3>Train with real professionals.  <br />Get the real result</h3>
                    <div className="train_img">
                        <img src="https://images.unsplash.com/photo-1660463527860-b66aebd362c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVubmlzJTIwY291aGVzfGVufDB8MHwwfHx8MA%3D%3D" alt="" />

                         <img src="https://images.unsplash.com/photo-1660463527860-b66aebd362c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVubmlzJTIwY291aGVzfGVufDB8MHwwfHx8MA%3D%3D" alt="" />
                          <img src="https://images.unsplash.com/photo-1660463527860-b66aebd362c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVubmlzJTIwY291aGVzfGVufDB8MHwwfHx8MA%3D%3D" alt="" />
                          
                    </div>
                </div>

                <div className="social">
                    <button className='social_icon'>Instagram</button>
                    <button className='social_icon'>Facebook</button>

                </div>
            </div>

            <div className="horizon">
                <div className="About_horizon">
                    <h2>About Horizon</h2>
                </div>
                <div className="About_horizon_description">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam odit? Ipsum assumenda rerum distinctio provident quae, itaque et esse veniam laboriosam facilis iste fugiat nulla odio atque obcaecati sed error. Voluptates, veritatis quibusdam. Ullam?</p>
                </div>
            </div>

            <div className="cards">
                <div className="card1">
                    <div className="logo"><h1>@</h1></div>
                    <h2>Professional hard court <span className='gray'>with tournament-grade lighting & climate control-play in</span> perfect conditions, in any season </h2>
                </div>
                <div className="card2">
                    <h3>Private & Group Lessons</h3>
                </div>
                <div className="card3">
                    <h1>100+</h1>
                    <h3>Pro Coaches</h3>
                    <p>Certified Professionals ready to boost your game from first serve to tournament level</p>
                    <h2>Beginner</h2>
                    <h2>Intermediate</h2>
                    <h2>Advanced</h2>
                </div>


            </div>
            <div className="facts">
                <h1>A few more facts about us in number</h1>
            </div>
            <div className="hero_fact_card">
                <div className="factcard">
                    <h1>12000+</h1>
                    <h4>Hours of play annually</h4>
                </div>
                <div className="factcard">
                    <h1>89%</h1>
                    <h4>Player Retention Rate</h4>
                </div>
                <div className="factcard">
                    <h1>1,200+</h1>
                    <h4>Active Member</h4>
                </div>
                <div className="factcard">
                    <h1>125+</h1>
                    <h4>Annual Tournaments</h4>
                </div>

            </div>
            <hr />

            <div className="heroservice">
                <div className="service">
                       <h2>Service</h2>

                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sed assumenda cum eligendi obcaecati eum non et quas incidunt nam voluptates, ipsam quam adipisci vel!</p>
                        <button className='explore'>Explore More</button>
                </div>

                <div className="training_card  img1">
                    <h3>Training Programs</h3>

                    <h4>program designed for all ages and abilities</h4>
                </div>
                <div className="training_card img2">
                    <h3>Training Programs</h3>

                    <h4>program designed for all ages and abilities</h4>
                </div>
                <div className="training_card img3">
                    <h3>Training Programs</h3>

                    <h4>program designed for all ages and abilities</h4>
                </div>
            </div>
        </div>
</>
    )
}

export default Mainpage