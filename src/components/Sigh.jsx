import React from "react";
import netflix_logo from './images/netflix\ landing\ image/logo.png';
import Footer from "./Footer";

class Sigh extends React.Component {
    constructor(props) {
        super(props);
            this.state={
                email:'',
                password: ''
            }
            this.formSubmit=this.formSubmit.bind(this);
            this.onChanging= this.onChanging.bind(this);

        }
    

    formSubmit(event){
        event.preventDefault();
console.warn(this.state);

    }
    onChanging(event){
        this.setState({[event.target.name]:event.target.value});
    }


    render(){

        return(
            <>
<div className="container group relative">
<div className="blacklayer"></div>
      {/* logo netflix */}
      <span><img className="logo-netflix" src={netflix_logo} alt="" /></span>

    <div id="blacklayer"></div>
<form className="sigh1"  onSubmit={this.formSubmit}>
<h2 className="title">Sign up</h2>

<input type="email" name="email" value={this.state.email} onChange={this.onChanging} placeholder="Email or phone number" id="" />
<br />
<input type="password" name="password" value={this.state.password} onChange={this.onChanging} placeholder="Password" id="" />
<br />
<input type="submit" id="sbmt" value="SUBMIT" />

<br />
{/* this is hold other helping routing  */}
<div className="other_content">
    {/* rember me form  */}
    <span id="remberme"> <form action="" className="remeber"><input type="checkbox" name="" id="" /><span> Remember me</span> <span id="need_help"><a href=""><strong>Need help ?</strong></a></span></form>  </span>
{/* login with facebook */}
<div id="loginwithFacebook">Login with<a href=""> Facebook ?</a></div>

<div id="newtouser">New to Netflix <a href=""> <strong>Sigh up now</strong> </a>.</div>

<p id="protectedbyreCAPTCHA">This page is protected by reCAPTCHA to ensure your 're not a bot . <a href="">Learn more</a></p>
</div>

</form>
</div>






<Footer/>

            </>
        )
    }

}


export default Sigh;