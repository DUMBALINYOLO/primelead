import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route} from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Contacts from "./components/Contacts";


function App() {
	return (
		<>
		    <Route exact path="/" component={Home} />
			<Route exact path="/contacts" component={Contacts} />
		</>
	);
}
 export default App;
