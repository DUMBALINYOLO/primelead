import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import photo from "./img/pexels-2.png";
import photo1 from "./img/pexels-5.png";
import photo2 from "./img/pexels-4.png";
import photo3 from "./img/pexels-7.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Home =() => {
	useEffect(() => {
		Aos.init({duration: 1000});
	},[]);
	return (
		<>
		    <header>
				<nav className="navbar navbar-expand-lg navbar-light">
					<Link to="/" className="navbar-brand ml-3">Students:)<span style={{color:"red"}}>Scholarship</span></Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
					aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle Navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse">
						<div className="collapse navbar-collapse" id="navbarMenu">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<Link to="/" className="nav-link">Home</Link>
								</li>
								<li className="nav-item active">
									<Link to="/contacts" className="nav-link">Contact Us</Link>
								</li>
							</ul>
							<form className="form-inline my-2 my-lg-0">
								<button className="btn menu-right-btn border" type="submit">Template</button>
							</form>
						</div>
					</div>
				</nav>
			</header>
			<main>
				<div className="container-fluid p-0">
					<div className="site-content">
						<div className="d-flex justify-content-center" data-aos="flip-right">
							<div className="d-flex flex-column">
								<h1 className="site-title">We Welcome You!!</h1>
								<p className="site-desc">My name is kuvuki, how can l help you today. If none fuckoff!!</p>
								<div className="d-flex flex-row">
									<input type="button" value="Shop now" className="btn site-btn1 px-4 py-3 mr-4 btn-dark"/>
									<input type="button" value="See Features" className="btn site-btn2 px-4 py-3 mr-4 btn-light"/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section-1">
					<div className="container text-center">
						<h1 className="heading-1">Fantastic Fetures</h1>
						<h1 className="heading-2">& Different Types Of Offerings</h1>
						<p className="para-1">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum,
						a first-century BCE text by the Roman statesman and philosopher Cicero, with words
						altered, added, and removed to make it nonsensical, improper Latin.
						</p>
						<div className="row justify-content-center text-center">
							<div className="col-md-4">
								<div className="card" data-aos="fade-left">
									<img src={photo} alt="Image1" className="card-img-top"/>
									<div className="card-body">
										<h4 className="card-title">Responsive</h4>
										<p className="card-text"> Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created,
										giving the design and production process more freedom.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
							<div className="card" data-aos="fade-up">
								<img src={photo1} alt="Image2" className="card-img-top"/>
								<div className="card-body">
									<h4 className="card-title">Flexible</h4>
									<p className="card-text"> Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created,
									giving the design and production process more freedom.
									</p>
								</div>
							</div>
							</div>
							<div className="col-md-4">
							<div className="card" data-aos="fade-right">
								<img src={photo2} alt="Image3" className="card-img-top"/>
								<div className="card-body">
									<h4 className="card-title">UI/UX</h4>
									<p className="card-text"> Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created,
									giving the design and production process more freedom.
									</p>
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section-2">
					<div className="container-fluid">
						<div className="d-flex justify-content-end">
							<div className="d-flex flex-column m-4">
								<h1 className="heading-1" data-aos="fade-down">Like & Share Your Love</h1>
								<p className="para" data-aos="fade-up"> Also known as filler or dummy text, this is simply copy
								that serves to fill a space without actually saying anything meaningful. It’s essentially nonsense text, but gives an idea of what real text will look like in the final product.
								</p>
								<input  data-aos="fade-left" type="button" value="Show" className="btn btn-danger" />
							</div>
						</div>
					</div>
				</div>

				<div className="section-3">
					<div className="container">
						<div className="row">
							<div className="col-md-4" data-aos="fade-left">
								<div className="d-flex flex-row">
									<i className="fas fa-question fa-3x m-2"></i>
									<div className="d-flex flex-column">
										<h3 className="m-2">24/7 Support</h3>
										<p className="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
										ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
										eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
										mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4" data-aos="fade-up">
								<div className="d-flex flex-row">
									<i className="fas fa-seedling fa-3x m-2"></i>
									<div className="d-flex flex-column">
										<h3 className="m-2">Marketing</h3>
										<p className="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
										ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
										eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
										mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4" data-aos="fade-right">
								<div className="d-flex flex-row">
									<i className="fas fa-rocket fa-3x m-2"></i>
									<div className="d-flex flex-column">
										<h3 className="m-2">Speed</h3>
										<p className="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
										ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
										eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
										mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-2">
							<div className="col-md-4" data-aos="fade-left">
								<div className="d-flex flex-row">
									<i className="fas fa-user-shield fa-3x m-2"></i>
									<div className="d-flex flex-column">
										<h3 className="m-2">Authorised</h3>
										<p className="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
										ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
										eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
										mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4" data-aos="fade-down">
								<div className="d-flex flex-row">
									<i className="fas fa-search fa-3x m-2"></i>
									<div className="d-flex flex-column">
										<h3 className="m-2">SEO</h3>
										<p className="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
										ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
										eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
										mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4" data-aos="fade-right">
								<div className="d-flex flex-row">
									<i className="fas fa-sliders-h fa-3x m-2"></i>
									<div className="d-flex flex-column">
										<h3 className="m-2">Customize</h3>
										<p className="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
										ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
										eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
										mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section-4 bg-dark">
					<div className="container">
						<div className="row">
							<div className="col-md-7" data-aos="fade-left">
								<img src={photo3} alt="Image-7" width="590"/>
							</div>
							<div className="col-md-5" data-aos="fade-right">
								<h1 className="text-white">Don't know where to start from</h1>
								<Link to="/">Join Us </Link>
								<p className="para-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>

			<footer>
				<div className="section-5 text-center">
					<h4 style={{margin:"5%"}}>Get Your Products From Our Convinience Online Store</h4>
					<h4 className="my-4">If you need any help</h4>
					<div className="form-inline justify-content-center">
						<input data-aos="fade-right" type="email" name="Email" id="email" placeholder="Email" size="40" className="form-control px-4 py-2"/>
						<input data-aos="fade-left" type="button" value="Contact Us" className="btn btn-danger px-4 py-2"/>
					</div>
					<div className="social" style={{margin:"5%"}}>
						<div className="d-flex flex-row justify-content-center">
							<i data-aos="fade-right"className="fab fa-facebook-f m-2"></i>
							<i data-aos="fade-down"className="fab fa-twitter m-2"></i>
							<i data-aos="fade-up"className="fab fa-instagram m-2"></i>
							<i data-aos="fade-left"className="fab fa-youtube m-2"></i>
						</div>
					</div>
					<hr/>
					<h5 style={{color: "lightseagreen"}}>Melcin fair &copy;{`${new Date().getFullYear()}`}</h5>
				</div>
			</footer>
		</>
	);
}
 export default Home;
