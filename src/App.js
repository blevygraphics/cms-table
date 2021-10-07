import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Navigation from './pages/Navigation';

 
class App extends Component {
  render() {
    return (      
		<BrowserRouter>
			<div>
				<Navigation />
				<Switch>
					<Route path="/" component={Home} exact/>
					<Route path="/about" component={About}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/error" component={Error}/>
				</Switch>
			</div> 
		</BrowserRouter>
    );
  }
}
 
export default App;