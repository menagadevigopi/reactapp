import React from 'react';
class App extends React.Component{
	render(){
	return(
		<div className="wrapper">
	       <Header/>
	       <LogoSection/>
	       <Banner/>
	       <LoginSection/>
	       <Blog/>
	       <Footer/>
	    </div>
	);
	}
}
class Header extends React.Component{

	render(){
	return(
	<header>
		<section className="head_nav">
			<ul>
				<li>Home</li>
				<li>Start</li>
				<li>Login</li>
				<li>Our Blog</li>
			</ul>
		</section>
		<div className="clear"></div>
	</header>
	

	);
	}
}
class LogoSection extends React.Component{
  render(){
  return(
     <div>
	    <section className="logo_section">
			<div className="logo"><img src="logo.png"/></div>
			<div className="logo_section_nav">
			<ul>
				<li>Home</li>
				<li>About Us</li>
				<li>Services</li>
				<li>Online Shops</li>
				<li>Contact Us</li>
			</ul>
	</div>
		<div className="clear"></div>
	</section>
     </div>
  );
  }
}

class Banner extends React.Component{
	render(){
	return(
	<section className="banner">
		<div className="banner_left">
			<h2>WEB & GRAPHICS DESIGN SOLUTION</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ulis ligula tincidunt. Sed veh</p>
			<p><span className="span1">quam ac arcu facilisis dapibus.</span> Integer fermentum dignissim purus et bibendum. Morbi nec dui </p> 
			<p><span className="span2">ac est tincidunt varius. Suspendisse lacinia suscipit elit, </span>at laoreet erat ullamcorper sem</p>
			<p>Suspendisse lacinia suscipit elit, at laoreet erat ullamcorper sem</p>
			<button className="readmore">Read More</button>
		</div>
		<div className="banner_right"><img src="BAN.png" height="330px"/></div>
		<div className="clear"></div>
	</section>

	);
	}
}

class LoginSection extends React.Component{
	render(){
	return(
	<section className="login_section">
		<div className="login_section_left">
			<h3>Welcome to <span className="span3">Our Company</span></h3>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum augue id lectus laoreet a iaculis ligula tincidunt. Sed vehicula quam ac arcu facilisis dapibus. Integer fermentum dignissim purus et bibendum. Morbi nec dui ac est tincidunt varius. Suspendisse lacinia suscipit elit, at laoreet erat ullamcorper semper. Donec a nulla sapien. Quisque venenatis fermentum felis id porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec magna metus, bibendum nec vehicula nec, consequat ut elit. Vestibulum imperdiet, neque non semper ultricies, justo velit vestibulum ligula, in hendrerit lorem turpis ut sem.</p>
		</div>
		<div className="login_section_right">
			<h4>CLIENT LOGIN</h4>
			<table>
			<tbody>
				<tr>
				<td>User Name</td>
				<td><input type="text" name="Username"/></td>
			</tr>
				<tr>
				<td>Password</td>
			    <td><input type="password" name="password"/></td>
			</tr>
			</tbody>
			</table>
				<input className="submit" type="submit" value="SUBMIT"/>
		</div>
		<div className="clear"></div>
	</section>

	);
	}
}

class Blog extends React.Component{
 render(){
 return(
	 	<section className="blog">
			<div className="left_blog">
			<h5><img src="arr.png"/>
			Recent Work Sample
			</h5>
			<p className="blog_img">
				<img src="img1.png"/>
				<img src="img2.png"/>
			</p>
				<button className="mre_button1">More..</button>
				<div className="clear"></div>
			</div>
			<div className="right_blog">
				<h5><img src="arr.png"/>
			Client Testimonials 
			</h5>
			<div className="content">
				<div className="content1">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum augue id lectus laoreet a iaculis ligula tincidunt. Sed vehicula quam ac arcu facilisis dapibus. Integer fermentum dignissim purus et bibendum. 
				<p className="sign">Charlie
				<br/>
				<span>CEO</span></p>
				
			</div>
			<div className="content2">
				 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum augue id lectus laoreet a iaculis ligula tincidunt. Sed vehicula quam ac arcu facilisis dapibus. Integer fermentum dignissim purus et bibendum. 
				 <p className="sign">Charlie
				<br/><span>CEO</span></p>
			</div>
			<button className="mre_button2">More..</button>
			</div>
			     
			</div>
			<div className="clear"></div>
	</section>
 );
 }
}
class Footer extends React.Component{
  render(){
  return(
	    <footer>
		<div className="footer_left">
			<h5>Follow Us</h5>
			<img src="f1.png"/>
			<img src="f2.png"/>
			<img src="f3.png"/>
			<img src="f4.png"/>
			<img src="f5.png"/>
		</div>
		<div className="footer_right">
			<p>© 2010 </p>
			<p>info@companyname.com </p>
			<p>Tel. +52 (81) 8883 - 2432 & +52 (81) 1688 - 8906</p>
			<img src="feather.png"/>
		</div>
		<div className="clear"></div>
	</footer>
  );
  }
}
export default App;