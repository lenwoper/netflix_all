import React from 'react';
import './styling.css';
import { NavLink } from 'react-router-dom';
import netflix_logo from './images/netflix\ landing\ image/logo.png';
import downloadable from './images/netflix\ landing\ image/download.jpg';
import children from './images/netflix\ landing\ image/children.png';
import Footer from './Footer';

function Landing() {

  function  Accordiono(e){
        var paragraph = e.target.nextElementSibling;
        e.target.classList.toggle('active');
        if (paragraph.style.display === 'none') {
            paragraph.style.display = 'block';
           
        }
        else {
        
            paragraph.style.display = 'none';
        }
    }
     
       
    
  
    return (
        <>

            <div className="container group relative">

                {/* it is just for blacklayer zindex 2 */}
                <div className="blacklayer"></div>
                {/* logo netflix */}
                <span><img className="logo-netflix" src={netflix_logo} alt="" /></span>

                {/* top langauge button and sihin button absolute */}
                <span className="top_tow_button"> <select name="English" id="language" className="langauge">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                </select>

                    {/* sighin button */}
                    <NavLink to="/sigh"><button id="sighin">sigh in</button></NavLink>


                    {/* banner strory of the netflix here  */}

                    <div className="banner_story" id="banner_story">
                        <h1>Unlimited Movies, TV <br /> Shows and more.</h1>
                        <h2>Watch wherever you want. Cancel whenever you want.</h2>
                        <br />
                        <p>Ready to watch? Enter your email address to create or restart your membership.</p>

                        <form action="" method="get"> <span><input type="email" name="" placeholder="E-mail address " id="" /> <button id="getemail">Get Started</button></span></form>

                    </div>




                </span>

            </div>

            {/* widged for the services sowing  */}

            <div className="widged_flex">
                {/* in first we have to fill content  */}
                <div className="first content">
                    <section className="articles">
                        <h1>Download your shows to watch offline.</h1>
                        <br />
                        <p>Save your favourites easily and always have something to watch.</p>
                    </section>
                </div>
                <div className="first">
                    <img className="imageWidged" src={downloadable} alt="" />
                </div>
            </div>

            {/*----2----- */}
            <div className="widged_flex">
                {/* in first we have to fill content  */}
                <div className="first content">
                    <img className="imageWidged" src={children} alt="" />

                </div>
                <div className="first content ">
                    <section className="articles">
                        <h1>Create profiles for children.</h1>
                        <br />
                        <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </section>
                </div>





            </div>
            {/* ---3---- */}
            <div className="widged_flex">
                {/* in first we have to fill content  */}
                <div className="first content">
                    <section className="articles">
                        <h1>Download your shows to watch offline.</h1>
                        <br />
                        <p>Save your favourites easily and always have something to watch.</p>
                    </section>
                </div>
                <div className="first">
                    <img className="imageWidged" src={downloadable} alt="" />
                </div>
            </div>
            {/* ask your question frequently part accordiono  */}
            <div className="ask_frequently">
                <br />
                <h1>Frequently Asked Questions!</h1>
                <br />
                {/* ---1--- */}
                <button onClick={Accordiono} activeClassName="active" className="accordion_btn">What is Netflix ?</button>
                <article className="accordion_target">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit saepe ullam officiis eaque, vel pariatur provident quod, eveniet cum non veniam autem facilis quae porro ipsam assumenda quam sed nemo?</p>
                </article>
                {/* ---2--- */}
                <button onClick={Accordiono} className="accordion_btn">How much does Netflix  cost ?</button>
                <article className="accordion_target">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit saepe ullam officiis eaque, vel pariatur provident quod, eveniet cum non veniam autem facilis quae porro ipsam assumenda quam sed nemo?</p>
                </article>
                {/* ---3--- */}
                <button onClick={Accordiono} className="accordion_btn">Where can i watch  ?</button>
                <article className="accordion_target">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit saepe ullam officiis eaque, vel pariatur provident quod, eveniet cum non veniam autem facilis quae porro ipsam assumenda quam sed nemo?</p>
                </article>
                {/*---4--- */}
                <button onClick={Accordiono} className="accordion_btn">How do i cancel ?</button>
                <article className="accordion_target">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit saepe ullam officiis eaque, vel pariatur provident quod, eveniet cum non veniam autem facilis quae porro ipsam assumenda quam sed nemo?</p>
                </article>
                {/* ---5--- */}
                <button onClick={Accordiono} className="accordion_btn">What can i watch on Netflix ?</button>
                <article className="accordion_target">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit saepe ullam officiis eaque, vel pariatur provident quod, eveniet cum non veniam autem facilis quae porro ipsam assumenda quam sed nemo?</p>
                </article>
                {/* email form  */}
                <br />
                <div className="email_new_account">
                <p>Ready to watch? Enter your email address to create or restart your membership.</p>

<form action="" method="get"> <span><input type="email" name="" placeholder="E-mail address " id="" /> <button id="getemail">Get Started</button></span></form>
<br />
                </div>
            </div>

            <Footer/>
        </>
        
    )
   
}

export default Landing;