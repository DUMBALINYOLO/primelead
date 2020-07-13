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
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<Link to="/" className="nav-link">Home</Link>
								</li>
								<li className="nav-item active">
									<Link to="/contacts" className="nav-link">Contact Us</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			<main>
				<div className="container-fluid p-0">
					<div className="site-content">
						<div className="d-flex justify-content-center" data-aos="flip-right">
							<div className="d-flex flex-column">
								<h1 className="site-title">We Welcome You to</h1>
								<p className="site-desc">PRIME LEAD INVESTMENTS</p>
							</div>
						</div>
					</div>
				</div>

				<div className="section-1">
					<div className="container text-center">
						<h1 className="heading-1">Our Services</h1>
						<div className="row justify-content-center text-center">
							<div className="col-md-4">
								<div className="card" data-aos="fade-left">
									<div className="card-body">
										<h4 className="card-title">Company Documents</h4>
										<li>Certification of Incorporation</li>
										<li>Memorandum and Articles of Association</li>
										<li>CR6 Form (Company certificate stating registered company address)</li>
										<li>CR14 Form (Company certificate with list of all directors)</li>
										<li>Valid ZIMRA Tax Clearance Certificate / Bank Clearance Certificate</li>
									</div>
								</div>
							</div>
							<div className="col-md-4">
							<div className="card" data-aos="fade-up">
								<div className="card-body">
									<h4 className="card-title">Services Offered</h4>
									<li>Course selection.</li>
									<li>University selection.</li>
									<li>Visa assistance.</li>
									<li>Pre-departure and arrival services in universities.</li>
									<li>Airport Pickup.</li>
 									<li>Accommodation.</li>
									<li>Assistance in Travel Medical Insurance (TMI)</li>
								</div>
							</div>
							</div>
							<div className="col-md-4">
							<div className="card" data-aos="fade-right">
								<div className="card-body">
									<h4 className="card-title">TRADE REFERENCES</h4>
									<li>Ganpat University, India</li>
									<li>Lazarski University, Poland</li>
									<li>Rusvus, Russia</li>
									<li>Elic, China</li>
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
								<Link to="/contacts" className="nav-link">
									<input  data-aos="fade-left" type="button" value="Share" className="btn btn-danger" />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="section-3">
					<div className="container">
					<h1 className="heading-1">About Us</h1>
						<div className="row">
							<div className="col-md-4" data-aos="fade-left">
								<div className="d-flex flex-row">
									<i className="fas fa-question fa-3x m-2"></i>
									<div className="d-flex flex-column">
										<h3 className="m-2">24/7 Support</h3>
										<p className="m-2">We make each person's conversation more powerful by enabling continuous, visually rich, and contextual conversations on their time, wherever they are, on their most preferred channel.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4" data-aos="fade-up">
								<div className="d-flex flex-row">
									<i className="fas fa-seedling fa-3x m-2"></i>
									<div className="d-flex flex-column">
										<h3 className="m-2">Mission</h3>
										<p className="m-2">Operate according to the highest standards to guide students who are planning to study abroad in
line with the laws of Zimbabwe.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4" data-aos="fade-right">
								<div className="d-flex flex-row">
									<i className="fas fa-rocket fa-3x m-2"></i>
									<div className="d-flex flex-column">
										<h3 className="m-2">Vision</h3>
										<p className="m-2">Introduce more options of courses with practical attachment offered by various foreign
institutions.
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
